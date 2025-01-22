import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventRequestDTO, UpdateEventRequestDTO } from './dto';
import { MinioService } from '../minio/minio.service';

@Injectable()
export class EventService {
    constructor(private prisma: PrismaService, private minio: MinioService){}


    private async makeUploadImage(file: Express.Multer.File): Promise<string> {
        return await this.minio.uploadFile(file)
    }

    async createEvent(event: CreateEventRequestDTO){

        if(!this.eventHaveValidDate(event.dateEvent)) {
            throw new ForbiddenException("Date must be greater than today");
        }

        const imagePath = await this.makeUploadImage(event.image)

        return await this.prisma.event.create({
            data: {
                ...event,
                image: imagePath,
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

    async getEvents(page:number, limit: number){
        return await this.prisma.event.findMany({
            take: limit,
            skip: (page - 1) * limit,
            orderBy: {
                createAt: "desc"
            }
        })
    }


    async getEvent(id: number){
        return await this.prisma.event.findUnique({
            where: {
                id
            }
        })
    }

    async updateEvent(id: number, event: UpdateEventRequestDTO){

        if (event.dateEvent && !this.eventHaveValidDate(event.dateEvent)){
            throw new ForbiddenException("Date must be greater than today")
        }

        if( event.image && typeof event.image !== 'string') {
           event.image = await this.makeUploadImage(event.image) 
        }

        return await this.prisma.event.update({
            where: {
                id
            },
            data: {
                ...event,
                image: event.image as string,
                location: {
                    update: {
                        ...event.location
                    }
                }
            }
        })

    }

    async deleteEvent(id: number){

        return await this.prisma.event.delete({
            where: {
                id
            }
        })
    }
}
