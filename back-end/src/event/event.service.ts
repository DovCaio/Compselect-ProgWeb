import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventRequestDTO } from './dto';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService){}

    async createEvent(event: CreateEventRequestDTO){
        return await this.prisma.event.create({
            data: {
                ...event,
            }
        })
    }

    async getEvents(){
        return await this.prisma.event.findMany()
    }

    async getEvent(id: number){
        return await this.prisma.event.findUnique({
            where: {
                id
            }
        })
    }
}
