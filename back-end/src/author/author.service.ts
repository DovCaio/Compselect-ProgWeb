import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateAuthorDTO } from './dto';

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
                console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>")
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

}
