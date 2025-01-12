import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto';
import { NotFoundCatches } from '../decorator';

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

    @Patch(":id")
    updateAuthor(@Param("id", ParseIntPipe) id: number, @Body() authorDto: UpdateAuthorDTO) {
        return this.authorService.updateAuthor(id, authorDto)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    @NotFoundCatches("Author not found")
    deleteAuthor(@Param("id", ParseIntPipe) id: number) {
        return this.authorService.deleteAuthor(id)
    }

}
