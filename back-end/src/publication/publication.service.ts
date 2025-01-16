import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePublicationDTO, UpdatePublicationDTO } from './dto';
import { AuthorsOnPublicationsService } from '../authors-on-publications/authors-on-publications.service';

@Injectable()
export class PublicationService {

    constructor(private prisma: PrismaService, private authorsOnPublicationsService: AuthorsOnPublicationsService){}

    async createPublication(publicationDto: CreatePublicationDTO){
        let authors = publicationDto.authors;
        delete publicationDto.authors


        const publication = await this.prisma.publication.create({
            data: {
                ...publicationDto,
                }
        })

        if(authors.length > 0) {

            this.authorsOnPublicationsService.createRelationWithAuthor(publication.id, authors)
        }
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

    async updatePublication(id: number, publicationDto: UpdatePublicationDTO){

        let authors = []

        if(publicationDto.authors && publicationDto.authors.length > 0){

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
        return await this.prisma.publication.delete({
            where: {
                id
            }
        })
    }
}
