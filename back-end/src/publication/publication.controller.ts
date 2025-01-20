import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { PublicationService } from './publication.service';
import { CreatePublicationDTO, UpdatePublicationDTO } from './dto';
import { CreateExceptionCatches, DeleteExceptionCatches, GetExceptionCatches, UpdateExceptionCatches } from '../decorator';
@Controller('publications')
export class PublicationController {

    constructor(private publicationService: PublicationService){}

    @Post()
    @CreateExceptionCatches("Publication already exists, try another filds")
    createPublication(@Body() publicationDto: CreatePublicationDTO){ 
        return this.publicationService.createPublication(publicationDto)
    }



    //A sequência entre: getPublicationAuthors e getPublications, importa, por uma questão de ambiguidade de rotas
    @Get(":id/authors")
    @GetExceptionCatches("Publication not found")
    getPublicationAuthors(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.getPublicationAuthors(id)
    }

    @Get(":limit/:page")
    @GetExceptionCatches("Publication not founds")
    getPublications(@Param("limit", ParseIntPipe) limit: number, @Param("page", ParseIntPipe) page: number){
        return this.publicationService.getPublications(limit, page)
    }


    @Get(":id")
    @GetExceptionCatches("Publication not found")
    getPublication(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.getPublication(id)
    }    


    @Patch(":id")
    @UpdateExceptionCatches("Publication not found")
    updatePublication(@Param("id", ParseIntPipe) id: number, @Body() publicationDto: UpdatePublicationDTO){
        return this.publicationService.updatePublication(id, publicationDto)
    }   
    
    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    @DeleteExceptionCatches("Publication not found")
    deletePublication(@Param("id", ParseIntPipe) id: number){
        return this.publicationService.deletePublication(id)
    }

    
}
