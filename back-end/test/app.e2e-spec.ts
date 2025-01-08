import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import  * as pactum from "pactum"
import { PrismaService } from '../src/prisma/prisma.service';
import { CreateEventRequestDTO, CreateLocationRequestDTO, UpdateEventRequestDTO } from '../src/event/dto';
describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaService;
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({
    	whitelist: true
    }))
    await app.init();
    await app.listen(3334);
    prisma = app.get(PrismaService);
    await prisma.cleanDb();
    pactum.request.setBaseUrl("http://localhost:3334")
  });

  afterAll(async () => {
    app.close();
  });

  describe('Events', () => {

    describe('POST', () => {
      const locationDto: CreateLocationRequestDTO = {
        country: "Country 1",
        city: "City 1",
        street: "Street 1",
        number: 1
      }
      const eventDto: CreateEventRequestDTO = {
        title: "Event 1",
        dateEvent: new Date(),
        time: "10:00",
        description: "Description 1",
        target: ["target 1", "target2"],
        activities: ["activity 1", "activity 2"],
        image: "aedaedaae", //ISSO da que deve vir em string, usar o FileRead.readAsDataURL
        location: locationDto
      }
  
      it('should create an event', () => {
        return pactum
              .spec()
              .post("/events")
              .withBody(eventDto)
              .expectStatus(201)
              .stores("eventId", "id")
              .expectBodyContains(eventDto.title)
              .expectBodyContains(eventDto.description)
              .expectBodyContains(eventDto.dateEvent)
              .expectBodyContains(eventDto.image)
              .expectBodyContains(eventDto.time)
              .expectBodyContains(eventDto.target[0])
              .expectBodyContains(eventDto.target[1])
              .expectBodyContains(eventDto.activities[0])
              .expectBodyContains(eventDto.activities[1])

      })
  
      it('should return a error when create an event with title already exists', () => {
        return pactum
              .spec()
              .post("/events")
              .withBody({
                ...eventDto,
                title: ""
              })
              .expectStatus(400)
      })
    }
  )

    describe('GET', () => {


    it('should return all events', () => {
      return pactum
            .spec()
            .get("/events")
            .expectStatus(200)
            .expectJsonLength(1)
    })

    it('should return an event', () => {
      return pactum
            .spec()
            .get("/events/{id}")
            .withPathParams("id", "$S{eventId}")
            .expectStatus(200)
            .expectBodyContains("Event 1")
    })

  })

    describe("PATCH", () => {
      it('should update a title of a event', () => {
        const eventDto: UpdateEventRequestDTO = {
          title: "Event 2",
        }
        return pactum
              .spec()
              .patch("/events/{id}")
              .withPathParams("id", "$S{eventId}")
              .withBody(eventDto)
              .expectStatus(200)
              .expectBodyContains(eventDto.title)
    })

      it('should update a time of a event', () => {
        const eventDto: UpdateEventRequestDTO = {
          time: "18:00",
        }
        return pactum
              .spec()
              .patch("/events/{id}")
              .withPathParams("id", "$S{eventId}")
              .withBody(eventDto)
              .expectStatus(200)
              .expectBodyContains(eventDto.time)
    })

      it('should update a desciption of a event', () => {
        const eventDto: UpdateEventRequestDTO = {
          description: "Description 2 updated",
        }
        return pactum
              .spec()
              .patch("/events/{id}")
              .withPathParams("id", "$S{eventId}")
              .withBody(eventDto)
              .expectStatus(200)
              .expectBodyContains(eventDto.description)
    })

    it('should update a date of a event', () => {
        const eventDto: UpdateEventRequestDTO = {
          dateEvent: new Date("2025-01-01"),
        }
        return pactum
              .spec()
              .patch("/events/{id}")
              .withPathParams("id", "$S{eventId}")
              .withBody(eventDto)
              .expectStatus(200)
              .expectBodyContains(eventDto.dateEvent)
    })

    it('should update a activities of a event', () => {
      const eventDto: UpdateEventRequestDTO = {
        activities: ["updated activity 1", "updated' activity 2"],
      }
      return pactum
            .spec()
            .patch("/events/{id}")
            .withPathParams("id", "$S{eventId}")
            .withBody(eventDto)
            .expectStatus(200)
            .expectBodyContains(eventDto.activities[0])
            .expectBodyContains(eventDto.activities[1])
    })

    it('should update a activities of a event', () => {
      const eventDto: UpdateEventRequestDTO = {
        target: ["target activity 1", "target' activity 2"],
      }
      return pactum
            .spec()
            .patch("/events/{id}")
            .withPathParams("id", "$S{eventId}")
            .withBody(eventDto)
            .expectStatus(200)
            .expectBodyContains(eventDto.target[0])
            .expectBodyContains(eventDto.target[1])
    })

    it('should update a date of a event', () => {
      const eventDto: UpdateEventRequestDTO = {
        image: "NEWIMAGE",
      }
      return pactum
            .spec()
            .patch("/events/{id}")
            .withPathParams("id", "$S{eventId}")
            .withBody(eventDto)
            .expectStatus(200)
            .expectBodyContains(eventDto.image)
    })

    it('should return a error when update without a id valid', () => {
      const eventDto: UpdateEventRequestDTO = {
        image: "NEWIMAGE",
      }
      return pactum
            .spec()
            .patch("/events/{id}")
            .withPathParams("id", "500")
            .withBody(eventDto)
            .expectStatus(403)
    })

  })

   describe("DELETE", () => {
    it('should delete a event', () => {
      return pactum
            .spec()
            .delete("/events/{id}")
            .withPathParams("id", "$S{eventId}")
            .expectStatus(204)
    })

    it('should reuturn a error when delete a event not found', () => {
      return pactum
            .spec()
            .delete("/events/{id}")
            .withPathParams("id", "500")
            .expectStatus(403)
    })
  })

  })
});
