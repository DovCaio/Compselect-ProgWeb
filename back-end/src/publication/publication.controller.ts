import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO } from './dto';
import { ErrorCatches } from '../decorator';

@Controller('publications')
export class PublicationController {

    constructor(private publicationService: PublicationService){}

    @Post()
    @ErrorCatches("Publication already exists, try another(s): ")
    createPublication(@Body() publicationDto: CreatePublicationDTO){ 
        return this.publicationService.createPublication(publicationDto)
    }


    @Get()
    getPublications(){
        return this.publicationService.getPublications()
    }

    @Get(":id")
    @ErrorCatches("Publication not found")
    getPublication(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.getPublication(id)
    }

    
}
