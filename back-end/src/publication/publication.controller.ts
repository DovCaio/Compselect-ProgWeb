import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO, UpdatePublicationDTO } from './dto';
import { CreateExceptionCatches, GetExceptionCatches, UpdateDeleteExceptionCatches } from '../decorator';
@Controller('publications')
export class PublicationController {

    constructor(private publicationService: PublicationService){}

    @Post()
    @CreateExceptionCatches("Publication already exists, try another filds")
    createPublication(@Body() publicationDto: CreatePublicationDTO){ 
        return this.publicationService.createPublication(publicationDto)
    }

    @Get()
    @GetExceptionCatches("Publication not founds")
    getPublications(){
        return this.publicationService.getPublications()
    }

    @Get(":id")
    @GetExceptionCatches("Publication not found")
    getPublication(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.getPublication(id)
    }


    @Patch(":id")
    @UpdateDeleteExceptionCatches("Publication not found")
    updatePublication(@Param("id", ParseIntPipe) id: number, @Body() publicationDto: UpdatePublicationDTO){
        return this.publicationService.updatePublication(id, publicationDto)
    }   
    
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @UpdateDeleteExceptionCatches("Publication not found")
    deletePublication(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.deletePublication(id)
    }
    
}
