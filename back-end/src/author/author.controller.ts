import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto';

@Controller('authors')
export class AuthorController {

    constructor(private authorService: AuthorService){}

    @Post()
    createAuthor(@Body() authorDto: CreateAuthorDTO) {
        return this.authorService.createAuthor(authorDto)
    }

    @Get()
    getAuthors() {
        return this.authorService.getAuthors()
    }

    @Get(":id")
    getAuthor(@Param("id", ParseIntPipe) id: number) {
        return this.authorService.getAuthor(id)
    }

}
