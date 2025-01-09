import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule } from './../src/app.module';
import  * as pactum from "pactum"
import { PrismaService } from '../src/prisma/prisma.service';
import { CreateEventRequestDTO, CreateLocationRequestDTO, UpdateEventRequestDTO } from '../src/event/dto';
import { CreateCommentDTO, CreatePostRequestDTO, UpdatePostRequestDTO } from 'src/blog/dto';
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
        dateEvent: new Date(Date.UTC(2030, 5, 19)), //Talvez isso deva ser atualizado a depender da data em que está sendo testado
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

      it("shold return a erro when create a event with data already passed", () => {
        eventDto.dateEvent = new Date(Date.UTC(2024, 11, 25))
        eventDto.title = "Shold be a erro"
        return pactum
        .spec()
        .post("/events")
        .withBody(eventDto)
        .expectStatus(403)
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
          dateEvent: new Date("2030-01-01"), //talves um dia seja necessário alterar essa data para o teste passar
        }
        return pactum
              .spec()
              .patch("/events/{id}")
              .withPathParams("id", "$S{eventId}")
              .withBody(eventDto)
              .expectStatus(200)
              .expectBodyContains(eventDto.dateEvent)
    })

    it('should throw a error when update a date invalid of a event', () => {
      const eventDto: UpdateEventRequestDTO = {
        dateEvent: new Date("2024-11-15"), //talves um dia seja necessário alterar essa data para o teste passar
      }
      return pactum
            .spec()
            .patch("/events/{id}")
            .withPathParams("id", "$S{eventId}")
            .withBody(eventDto)
            .expectStatus(403)
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

  describe("Blog", () => {

    describe("POST", () => {

      const blogDto: CreatePostRequestDTO = {
        images: ["image1", "image2"],
        titles: ["title1", "title2"],
        texts: ["text1", "text2"],
        links: ["link1", "link2"],
        sequenceOfContent: [
          1, 0, 3, 2, 1, 0, 3, 2,
        ]
      }
      it('should create a blog', () => {
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(201)
              .stores("blogId", "id")
              .expectBodyContains(blogDto.images[0])
              .expectBodyContains(blogDto.images[1])
              .expectBodyContains(blogDto.titles[0])
              .expectBodyContains(blogDto.titles[1])
              .expectBodyContains(blogDto.texts[0])
              .expectBodyContains(blogDto.texts[1])
              .expectBodyContains(blogDto.links[0])
              .expectBodyContains(blogDto.links[1])
              .expectBodyContains(blogDto.sequenceOfContent[0])
              .expectBodyContains(blogDto.sequenceOfContent[1])
            })

      it("shold return a erro when dont have a body", () => {
        return pactum
              .spec()
              .post("/blog")
              .withBody({})
              .expectStatus(400)
      })
      //Há muitos tests a serem feitos aqui, mas vou deixar apenas alguns por enquanto
      //Todos esses testes estão relacionados com a variaável blog, e dependem de manterem a mesma sequência

      it("should return a erro when dont have the same quantity of a total of all content with sequenceOfContent", () => {
        blogDto.sequenceOfContent.pop()
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(403)
      })
      
      it("should return a erro when dont have the same quantity of a total of image content", () => {
        blogDto.images.pop()
        blogDto.sequenceOfContent.push(2)
        blogDto.titles.push("title 5")
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a erro when dont have the same quantity of a total of title content", () => {
        blogDto.titles.pop()
        blogDto.titles.pop()
        blogDto.images.push("image3")
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a erro when dont have the same quantity of a total of texts content", () => {
        blogDto.texts.pop()
        blogDto.titles.push("title 3")
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a erro when dont have the same quantity of a total of links content", () => {
        blogDto.links.pop()
        blogDto.texts.push("title 3")
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a erro when dont have the same quantity of a total of links content", () => {
        blogDto.links.pop()
        blogDto.texts.push("title 3")
        return pactum
              .spec()
              .post("/blog")
              .withBody(blogDto)
              .expectStatus(403)
      })
    })

    describe("GET", () => {

      it('should return all blog', () => {
        return pactum
              .spec()
              .get("/blog")
              .expectStatus(200)
              .expectJsonLength(1)
      })
      it('should return a blog', () => {
        return pactum
              .spec()
              .get("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .expectStatus(200)
      })
    })

    describe("PATCH", () => {

      it("should update the titles of a blog", () => {
        const blogDto: UpdatePostRequestDTO = {
          titles: ["title1Updated", "title2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(200)
              .expectBodyContains(blogDto.titles[0])
              .expectBodyContains(blogDto.titles[1])
      })


      it("should update the imagens of a blog", () => {
        const blogDto: UpdatePostRequestDTO = {
          images: ["image1Updated", "image2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(200)
              .expectBodyContains(blogDto.images[0])
              .expectBodyContains(blogDto.images[1])
      })

      it("should update the texts of a blog", () => {
        const blogDto: UpdatePostRequestDTO = {
          texts: ["text1Updated", "text2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(200)
              .expectBodyContains(blogDto.texts[0])
              .expectBodyContains(blogDto.texts[1])
      })
      

      it("should update the links of a blog", () => {
        const blogDto: UpdatePostRequestDTO = {
          links: ["links1Updated", "links2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(200)
              .expectBodyContains(blogDto.links[0])
              .expectBodyContains(blogDto.links[1])
      })



      it("should update the sequence of content of a blog", () => {
        const blogDto: UpdatePostRequestDTO = {
          sequenceOfContent: [
            1, 0, 3, 2, 1, 0, 3, 2,
          ].reverse()
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(200)
              .expectBodyContains(blogDto.sequenceOfContent[0])
              .expectBodyContains(blogDto.sequenceOfContent[1])
              .expectBodyContains(blogDto.sequenceOfContent[2])
              .expectBodyContains(blogDto.sequenceOfContent[3])
              .expectBodyContains(blogDto.sequenceOfContent[4])
              .expectBodyContains(blogDto.sequenceOfContent[5])
              .expectBodyContains(blogDto.sequenceOfContent[6])
              .expectBodyContains(blogDto.sequenceOfContent[7])
      })

      it("should return a error when try to update a blog of a post not exists", () => {
        const blogDto: UpdatePostRequestDTO = {
          titles: ["title1Updated", "title2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "500")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of titles", () => {
        const blogDto: UpdatePostRequestDTO = {
          titles: ["title1Updated", "title2Updated", "title2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of titles", () => {
        const blogDto: UpdatePostRequestDTO = {
          titles: ["title1Updated", "title2Updated", "title2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of images", () => {
        const blogDto: UpdatePostRequestDTO = {
          images: ["images1Updated", "images2Updated", "images2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of texts", () => {
        const blogDto: UpdatePostRequestDTO = {
          texts: ["texts1Updated", "texts2Updated", "texts2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of links", () => {
        const blogDto: UpdatePostRequestDTO = {
          links: ["links1Updated", "links2Updated", "links2Updated"],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of length of sequenceOfContent", () => {
        const blogDto: UpdatePostRequestDTO = {
          sequenceOfContent: [0, 1, 2, 3, 4, 5, 6, 7],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })

      it("should return a error when try to update a post wich the body has invalid quantity of length of sequenceOfContent", () => {
        const blogDto: UpdatePostRequestDTO = {
          sequenceOfContent: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })


      it("should return a error when try to update a post wich the body has invalid sequenceOfContent", () => {
        const blogDto: UpdatePostRequestDTO = {
          sequenceOfContent: [1, 0, 3, 2, 1, 2, 3, 2,],
        }
        return pactum
              .spec()
              .patch("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .withBody(blogDto)
              .expectStatus(403)
      })
    })

    describe("DELETE", () => {

      it("should delete a post", () => {
        return pactum
              .spec()
              .delete("/blog/{id}")
              .withPathParams("id", "$S{blogId}")
              .expectStatus(204)
      })

      it("should return a error when delete a post not found", () => {
        return pactum
              .spec()
              .delete("/blog/{id}")
              .withPathParams("id", "500")
              .expectStatus(403)
      })
    }
    
  )

    describe("Comments", () => { 
      const postDto: CreatePostRequestDTO = {
        titles: ["title1", "title2", "title3"],
        images: ["images1", "images2", "images3"],
        texts: ["texts1", "texts2", "texts3"],
        links: ["links1", "links2", "links3"],
        sequenceOfContent: [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3],
      }
      it("should create a post", () => {
          return pactum
                .spec()
                .post("/blog")
                .withBody(postDto)
                .stores("postId", "id")
      })



      describe("POST", () => {
        const commentDto: CreateCommentDTO = {
          userName: "user1",
          email: "caiosciencec@gmail.com", 
          content: "Muito interessante o assunto desse post.",
        }
  
        it("should create a comment", () => {
          return pactum
                .spec()
                .post("/blog/{id}/comment")
                .withPathParams("id", "$S{postId}")
                .withBody(commentDto)
                .expectStatus(201)
                .stores("commentId", "id")
                .expectBodyContains(commentDto.userName)
                .expectBodyContains(commentDto.email)
                .expectBodyContains(commentDto.content)
        })

        it("should return a error when try to create a comment in a post not found", () => {
          return pactum
                .spec()
                .post("/blog/{id}/comment")
                .withPathParams("id", "500")
                .withBody(commentDto)
                .expectStatus(403)
                .expectBodyContains("Post not found")
        })
  
      })

      describe("PATCH", () => {
        it("should acept a comment", () => {
          return pactum
                .spec()
                .patch("/blog/{id}/comment/{commentId}/accept")
                .withPathParams("id", "$S{postId}")
                .withPathParams("commentId", "$S{commentId}")
                .expectStatus(200)
        })

        it("should return a error when try to acept a comment in a post not found", () => {
          return pactum
                .spec()
                .patch("/blog/{id}/comment/{commentId}/accept")
                .withPathParams("id", "500")
                .withPathParams("commentId", "500")
                .expectStatus(403)
                .expectBodyContains("Post not found")
        })

        it("should return a error when try to acept a comment not found", () => {
          return pactum
                .spec()
                .patch("/blog/{id}/comment/{commentId}/accept")
                .withPathParams("id", "$S{postId}")
                .withPathParams("commentId", "500")
                .expectStatus(403)
                .expectBodyContains("Comment not found")
        })

        it("should return a error when try to acept a comment already acepted", () => {
          return pactum
                .spec()
                .patch("/blog/{id}/comment/{commentId}/accept")
                .withPathParams("id", "$S{postId}")
                .withPathParams("commentId", "$S{commentId}")
                .expectStatus(403)
                .expectBodyContains("Comment already accepted")
        })
      })

      describe("GET", () => {

        it("should return comments not pendings and not acepted", () => {
          return pactum
                .spec()
                .get("/blog/{id}/comments")
                .withPathParams("id", "$S{postId}")
                .expectStatus(200)
                .expectJsonLength(1)
        })

        it("should return a error when try to get comments in a post not found", () => {
          return pactum
                .spec()
                .get("/blog/{id}/comments")
                .withPathParams("id", "500")
                .expectStatus(403)
                .expectBodyContains("Post not found")
        })
      })


    } )
  })

  describe("Publications", () => {

    it.todo("Fazer os tests e a implementação de publications")

  })
});
