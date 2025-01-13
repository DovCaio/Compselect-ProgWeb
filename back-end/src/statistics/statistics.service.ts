import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class StatisticsService {

    constructor(private prisma: PrismaService){}


    getEventsQuantity() {

        return this.prisma.event.count()

    }


    getBlogsQuantity(){

        return this.prisma.post.count()
    }


    getCommentsQuantity(){

        return this.prisma.comment.count()
    }

    getPublicationsQuantity(){

        return this.prisma.publication.count()
    }


    getAuthorsQuantity() {
        return this.prisma.author.count()
    }


    //TODO: Seria legal uma média de comentarios por post
}
