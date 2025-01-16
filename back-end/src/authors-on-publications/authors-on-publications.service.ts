import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsOnPublicationsService {

    constructor (private prisma: PrismaService){}



    async createRelationWithPublication(authorId: number, titlesPublications: string[]){
                
        let publications = await this.prisma.publication.findMany({
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

}
