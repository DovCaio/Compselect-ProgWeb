import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublicationDTO } from './dto';

@Injectable()
export class PublicationService {

    constructor(private prisma: PrismaService){}

    async createPublication(publicationDto: CreatePublicationDTO){
        let authors = [];
        if(publicationDto.authors.length > 0) {

            authors = await this.prisma.author.findMany({
                where: {
                    id: {
                        in: publicationDto.authors
                    }
                }
                
            })

            if(authors.length !== publicationDto.authors.length) {
                throw new ForbiddenException("Author not found")
            }
        }


        return await this.prisma.publication.create({
            data: {
                ...publicationDto,
                authors: {
                    create: authors.map((authorId) => {
                        return {
                            authorId
                        }
                    })
                }
            }
        })
    }


    getPublications(){
        return this.prisma.publication.findMany()
    }

    getPublication(id: number){

        const existsPublication = this.prisma.publication.findUnique({
            where: {
                id
            }
        })

        if (!existsPublication) {
            throw new ForbiddenException("Publication not found")
        }

        return existsPublication
    }
}
