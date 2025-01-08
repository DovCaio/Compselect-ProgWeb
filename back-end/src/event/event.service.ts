import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventRequestDTO, UpdateEventRequestDTO } from './dto';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService){}


    async createEvent(event: CreateEventRequestDTO){

        if(!this.eventHaveValidDate(event.dateEvent)) {
            throw new ForbiddenException("Date must be greater than today");
        }

        return await this.prisma.event.create({
            data: {
                ...event,
                location: {
                    create: {
                        ...event.location
                    }
                }
            }
        })

        
    }

    private eventHaveValidDate(date: Date) {
        const today = new Date()
        date = new Date(date)
        return date > today;
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

    async updateEvent(id: number, event: UpdateEventRequestDTO){
        console.log(id)
        const eventExists = await this.prisma.event.findUnique({
            where: {
                id
            }
        })

        if(!eventExists){
            throw new ForbiddenException("Event not found")
        }else if (event.dateEvent && !this.eventHaveValidDate(event.dateEvent)){
            throw new ForbiddenException("Date must be greater than today")

        }

        return await this.prisma.event.update({
            where: {
                id
            },
            data: {
                ...event,
                location: {
                    update: {
                        ...event.location
                    }
                }
            }
        })

    }

    async deleteEvent(id: number){
        const eventExists = await this.prisma.event.findUnique({
            where: {
                id
            }
        })

        if(!eventExists){
            throw new ForbiddenException("Event not found")
        }

        return await this.prisma.event.delete({
            where: {
                id
            }
        })
    }
}
