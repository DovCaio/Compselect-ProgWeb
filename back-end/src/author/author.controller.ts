import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO, UpdateAuthorDTO } from './dto';
import { UpdateExceptionCatches, GetExceptionCatches, CreateExceptionCatches  } from '../decorator';

@Controller('authors')
export class AuthorController {

    constructor(private authorService: AuthorService){}

    @Post()
    @CreateExceptionCatches("Author conflits")
    createAuthor(@Body() authorDto: CreateAuthorDTO) {
        return this.authorService.createAuthor(authorDto)
    }

    @Get(":limit/:page")
    getAuthors(@Param("limit", ParseIntPipe) limit: number, @Param("page", ParseIntPipe) page: number) {
        return this.authorService.getAuthors(limit, page)
    }

    @Get(":id")
    getAuthor(@Param("id", ParseIntPipe) id: number) {
        return this.authorService.getAuthor(id)
    }

    @Patch(":id")
    @UpdateExceptionCatches("Author or Publication not found")
    updateAuthor(@Param("id", ParseIntPipe) id: number, @Body() authorDto: UpdateAuthorDTO) {
        return this.authorService.updateAuthor(id, authorDto)
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id")
    @UpdateExceptionCatches("Author not found")
    deleteAuthor(@Param("id", ParseIntPipe) id: number) {
        return this.authorService.deleteAuthor(id)
    }

    @Get(":id/publications")
    @GetExceptionCatches("Author not found")
    getAuthorPublications(@Param("id", ParseIntPipe) id: number) {
        return this.authorService.getAuthorPublications(id)
    }

}
