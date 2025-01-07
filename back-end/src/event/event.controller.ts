import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventRequestDTO } from './dto';



@Controller('events')
export class EventController {

    constructor(private eventService: EventService) {}

    @Post()
    createEvent(@Body() event: CreateEventRequestDTO) {
        return this.eventService.createEvent(event)
    }

    @Get()
    getEvents() {
        return this.eventService.getEvents()
    }

    @Get(':id')
    getEvent(@Param('id', ParseIntPipe) id: number) {
        return this.eventService.getEvent(id)
    }
}
