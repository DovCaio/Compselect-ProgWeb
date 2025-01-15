import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class AuthorService {

    constructor(private prisma: PrismaService){}


    async createRelationWithPublication(authorId: number, titlesPublications: string[]){

        let publications = []
                
            publications = await this.prisma.publication.findMany({
                where: {
                    title: {
                        in: titlesPublications
                    }
                }
            })    
            if (publications.length !== titlesPublications.length) {
                throw new ForbiddenException("Publication not found")
            }

            await this.prisma.authorsOnPublications.createMany({
                data: publications.map((publication) => {
                    return {
                        authorId: authorId,
                        publicationId: publication.id
                    }
                })
            })

    }

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
            await this.createRelationWithPublication(author.id, authorDto.publications)
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


            await this.prisma.authorsOnPublications.deleteMany({
                where: {
                    authorId: id
                }
            })

            await this.createRelationWithPublication(id, authorDto.publications)


        }

        
        return await this.prisma.author.update({
            
            data: {
                ...authorDto,
                publications: {
                    connect: []
                }},
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
