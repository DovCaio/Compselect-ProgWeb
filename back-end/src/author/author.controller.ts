import { Body, Controller, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto';

@Controller('authors')
export class AuthorController {

    constructor(private authorService: AuthorService){}

    @Post()
    createAuthor(@Body() authorDto: CreateAuthorDTO) {
        return this.authorService.createAuthor(authorDto)
    }

}
