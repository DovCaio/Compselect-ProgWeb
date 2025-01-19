import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublicationDTO, UpdatePublicationDTO } from './dto';
import { AuthorsOnPublicationsService } from '../authors-on-publications/authors-on-publications.service';

@Injectable()
export class PublicationService {

    constructor(private prisma: PrismaService, private authorsOnPublicationsService: AuthorsOnPublicationsService){}

    async createPublication(publicationDto: CreatePublicationDTO){
        let authors = [...publicationDto.authors];
        delete publicationDto.authors

        const publication = await this.prisma.publication.create({
            data: {
                ...publicationDto,
                }
        })

        if(authors.length > 0)  this.authorsOnPublicationsService.createRelationWithAuthor(publication.id, authors)
        
        
        return publication
    }


    getPublications(limit: number, page: number){
        return this.prisma.publication.findMany({
            take: limit,
            skip: (page - 1) * limit,
            orderBy: {
                createAt: "desc"
            }
        })
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

    async updatePublication(id: number, publicationDto: UpdatePublicationDTO){


        if(publicationDto.authors && publicationDto.authors.length > 0){

            this.authorsOnPublicationsService.deleteRelationWithAuthor(id)
            this.authorsOnPublicationsService.createRelationWithAuthor(id, publicationDto.authors)
        
        }

        delete publicationDto.authors

        return await this.prisma.publication.update({
            where: {
                id
            },
            data: {
                ...publicationDto,
            }

        })
    }

    async deletePublication(id: number){

        this.authorsOnPublicationsService.deleteRelationWithAuthor(id)

        return await this.prisma.publication.delete({
            where: {
                id
            }
        })
    }

    async getPublicationAuthors(id: number){
        const authorsIds = await this.prisma.authorsOnPublications.findMany({
            where: {
                publicationId: id
            }
        })

        return await this.prisma.author.findMany({
            where: {
                id: {
                    in: authorsIds.map((author) => {
                        return author.authorId
                    })
                }
            }
        })

    }
}
