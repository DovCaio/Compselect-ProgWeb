import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO } from './dto';
import { CreateExceptionCatches, GetExceptionCatches } from '../decorator';
@Controller('publications')
export class PublicationController {

    constructor(private publicationService: PublicationService){}

    @Post()
    @CreateExceptionCatches("Publication already exists, try another filds")
    createPublication(@Body() publicationDto: CreatePublicationDTO){ 
        return this.publicationService.createPublication(publicationDto)
    }


    @Get()
    getPublications(){
        return this.publicationService.getPublications()
    }

    @Get(":id")
    @GetExceptionCatches("Publication not found")
    getPublication(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.getPublication(id)
    }

    
}
