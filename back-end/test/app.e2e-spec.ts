import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import  * as pactum from "pactum"
import { PrismaService } from '../src/prisma/prisma.service';
import { CreateEventRequestDTO } from '../src/event/dto';
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
      const eventDto: CreateEventRequestDTO = {
        title: "Event 1",
        dateEvent: new Date(),
        time: "10:00",
        description: "Description 1",
        target: ["target 1", "target2"],
        activities: ["activity 1", "activity 2"],
        image: "aedaedaae" //ISSO da que deve vir em string, usar o FileRead.readAsDataURL 
      }
  
      it('should create an event', () => {
        return pactum
              .spec()
              .post("/events")
              .withBody(eventDto)
              .expectStatus(201)
              .expectBodyContains(eventDto.title)
              .expectBodyContains(eventDto.description)
              .expectBodyContains(eventDto.dateEvent)
              .expectBodyContains(eventDto.image)

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
            .withPathParams("id", 1)
            .expectStatus(200)
            .expectBodyContains("Event 1")
    })

  })

  })
});
