import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsOnPublicationsService {

    constructor (private prisma: PrismaService){}


    //Authors > Publications
    async createRelationWithPublication(authorId: number, titlesPublications: string[]){
                
        const publications = await this.prisma.publication.findMany({
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

    async deleteRelationWithPublication(authorId: number){
        await this.prisma.authorsOnPublications.deleteMany({
            where: {
                authorId: authorId
            }
        })
    }


    //Publications > Authors

    async createRelationWithAuthor(publicationId: number, authorsId: number[]){

        const authors = await this.prisma.author.findMany({
            where: {
                id: {
                    in: authorsId
                }
            }
        })

        if (authors.length !== authorsId.length) {
            throw new ForbiddenException("Author not found")
        }

        return this.prisma.authorsOnPublications.createMany({
            data: authorsId.map((authorId) => {
                return {
                    authorId: authorId,
                    publicationId: publicationId
                }
            })
        })
    }

    async deleteRelationWithAuthor(publicationId: number){
        await this.prisma.authorsOnPublications.deleteMany({
            where: {
                publicationId: publicationId
            }
        })
    }

}
