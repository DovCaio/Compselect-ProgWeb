import { Body, Controller, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostRequestDTO } from './dto';


@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService){}

    @Post()
    createPost(@Body() postdto: CreatePostRequestDTO){

        return this.blogService.createPost(postdto)

    }


}
