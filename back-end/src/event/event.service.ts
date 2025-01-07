import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventRequestDTO } from './dto';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService){}

    async createEvent(event: CreateEventRequestDTO){
        return this.prisma.event.create({
            data: {
                ...event,
            }
        })
    }
}
