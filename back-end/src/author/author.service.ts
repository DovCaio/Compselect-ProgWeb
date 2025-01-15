import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {

    constructor(private prisma: PrismaService){}


    async createAuthor(authorDto: CreateAuthorDTO){
    


        



        let author = await this.prisma.author.create({
            data: {
                ...authorDto,
                publications: {
                    connect: []
                }
                
            }
            
        })

        if (authorDto.publications.length > 0) {
            let publications = []
                
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

            await this.prisma.authorsOnPublications.createMany({
                data: publications.map((publication) => {
                    return {
                        authorId: author.id,
                        publicationId: publication.id
                    }
                })
            })
        }


        return author
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
            }).then((publications) => {
                return publications.map((publication) => {
                    return  publication.id
                    
                })
            })

            if(publications.length !== authorDto.publications.length) {
                throw new ForbiddenException("Publication not found")
            }

        }

        
        return await this.prisma.author.update({
            
            data: {
                ...authorDto,
                publications: {
                    create: publications
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

    async getAuthorPublications(id: number){

        const author = await this.prisma.author.findUnique({
            where: {
                id
            }
        })

        const publicationsIds = await this.prisma.authorsOnPublications.findMany({
            where: {
                authorId: author.id
            }
        })

        return await this.prisma.publication.findMany({
            where: {
                id: {
                    in: publicationsIds.map((publication) => {
                        return publication.publicationId
                    })
                }
            }
        })
    }
}
