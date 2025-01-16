import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventRequestDTO, UpdateEventRequestDTO } from './dto';
import { UpdateDeleteExceptionCatches, GetExceptionCatches } from '../decorator';

@Controller('events')
export class EventController {

    constructor(private eventService: EventService) {}

    @Post()
    createEvent(@Body() event: CreateEventRequestDTO) {
        return this.eventService.createEvent(event)
    }


    @Get("/:limit/:page")
    @GetExceptionCatches("No events found")
    getEvents( @Param('limit', ParseIntPipe) limit:number, @Param('page', ParseIntPipe) page:number) {
        return this.eventService.getEvents(page, limit)
    }

    @Get(':id')
    @GetExceptionCatches("Event not found")
    getEvent(@Param('id', ParseIntPipe) id: number) {
        return this.eventService.getEvent(id)
    }


    @Patch(":id")
    @UpdateDeleteExceptionCatches("Event not found")
    updateEvent(@Param('id', ParseIntPipe) id: number, @Body() event: UpdateEventRequestDTO) {
        return this.eventService.updateEvent(id, event)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    @UpdateDeleteExceptionCatches("Event not found")
    deleteEvent(@Param('id', ParseIntPipe) id: number) {
        return this.eventService.deleteEvent(id)
    }
}
