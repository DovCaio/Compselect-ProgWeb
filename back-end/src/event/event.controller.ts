import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventRequestDTO, UpdateEventRequestDTO } from './dto';



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


    @Patch(":id")
    updateEvent(@Param('id', ParseIntPipe) id: number, @Body() event: UpdateEventRequestDTO) {
        return this.eventService.updateEvent(id, event)
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deleteEvent(@Param('id', ParseIntPipe) id: number) {
        return this.eventService.deleteEvent(id)
    }
}
