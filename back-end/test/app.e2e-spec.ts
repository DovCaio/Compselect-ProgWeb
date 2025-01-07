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
    const eventDto: CreateEventRequestDTO = {
      title: "Event 1",
      date: new Date(),
      time: "10:00",
      description: "Description 1",
      target: ["target 1", "target2"],
      activities: ["activity 1", "activity 2"],
      image: new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10])
    }

    it('should create an event', () => {
      return pactum
            .spec()
            .post("/events")
            .withBody(eventDto)
            .expectStatus(201)
            .inspect()
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
            .inspect()
    })
  })
});
