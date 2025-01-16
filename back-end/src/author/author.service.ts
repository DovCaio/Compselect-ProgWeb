import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto';
import { AuthorsOnPublicationsService } from '../authors-on-publications/authors-on-publications.service';

@Injectable()
export class AuthorService {

    constructor(private prisma: PrismaService, private authorsOnPublicationsService: AuthorsOnPublicationsService){}

    async createAuthor(authorDto: CreateAuthorDTO){

        const publications = [...authorDto.publications]
        delete authorDto.publications

        let author = await this.prisma.author.create({
            data: {
                ...authorDto,                
            }
            
        })

        if (publications.length > 0) {
            await this.authorsOnPublicationsService.createRelationWithPublication(author.id, publications)
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


        if(authorDto.publications && authorDto.publications.length > 0){

            await this.authorsOnPublicationsService.deleteRelationWithPublication(id)
            await this.authorsOnPublicationsService.createRelationWithPublication(id, authorDto.publications)

        }
        delete authorDto.publications
        
        return await this.prisma.author.update({
            
            data: {
                ...authorDto,
            },
            where: {
                id
            }
        })
    }


    async deleteAuthor(id: number){

        await this.authorsOnPublicationsService.deleteRelationWithPublication(id)

        return await this.prisma.author.delete({
            where: {
                id
            }
        })    
    }

    async getAuthorPublications(id: number){


        const publicationsIds = await this.prisma.authorsOnPublications.findMany({
            where: {
                authorId: id
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
