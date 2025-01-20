import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { get } from 'http';

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


    async getCommentsAveragePerPost(){ 

        const totalComments = await this.prisma.comment.count()
        const totalPosts = await this.prisma.post.count() 

        if (totalPosts === 0) return 0

        return totalComments / totalPosts 
    }


   
    
}
