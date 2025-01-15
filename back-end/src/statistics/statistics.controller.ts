import { Controller, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { StatisticsService } from './statistics.service';

@Controller('statistics')
export class StatisticsController {

    constructor(private statisticsService: StatisticsService){}


    //GETS
    @Get("events/qtt")
    getEventsQuantity(){
        return this.statisticsService.getEventsQuantity()
    }


    @Get("blogs/qtt")
    getBlogsQuantity(){
        return this.statisticsService.getBlogsQuantity()
    }

    @Get("comments/qtt")
    getCommentsQuantity(){
        return this.statisticsService.getCommentsQuantity()
    }

    @Get("publications/qtt")
    getPublicationsQuantity(){
        return this.statisticsService.getPublicationsQuantity()
    }

    @Get("authors/qtt")
    getAuthorsQuantity(){
        return this.statisticsService.getAuthorsQuantity()
    }

    @Get("comments/average-per-post")
    getCommentsAverage(){
        return this.statisticsService.getCommentsAveragePerPost()
    }


}
