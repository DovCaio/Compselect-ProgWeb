import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {

    constructor(private prisma: PrismaService){}


    async createAuthor(authorDto: CreateAuthorDTO){
        let publications = []
        if (authorDto.publications.length > 0) {
                
            publications = await this.prisma.publication.findMany({
                where: {
                    title: {
                        in: authorDto.publications
                    }
                }
            })
            if (publications.length !== authorDto.publications.length) {
                throw new ForbiddenException("Publication not found")
            }
        }
        
        return this.prisma.author.create({
            data: {
                ...authorDto,
                publications: {
                    
                    create: publications.map((publicationId) => {
                        return {
                            publicationId
                        }
                    })
                }
            }
            
        })
    }

    getAuthors(){
        return this.prisma.author.findMany()
    }

    async getAuthor(id: number){
        const author = await this.prisma.author.findUnique({
            where: {
                id
            }
        })
        if (!author) {
            throw new ForbiddenException("Author not found")
        }

        return author 
    }

    async updateAuthor(id: number, authorDto: UpdateAuthorDTO){
        let publications = []

        if(authorDto.publications && authorDto.publications.length > 0){


            publications = await this.prisma.publication.findMany({
                where: {
                    title: {
                        in: authorDto.publications
                    }
                }
            })
        }

        return await this.prisma.author.update({
            
            data: {
                ...authorDto,
                publications: {
                    create: publications.map((publicationId) => {
                        return {
                            publicationId
                        }
                    })
                }
            },
            where: {
                id
            }
        })
    }


    async deleteAuthor(id: number){
        return await this.prisma.author.delete({
            where: {
                id
            }
        })    
    }
}
