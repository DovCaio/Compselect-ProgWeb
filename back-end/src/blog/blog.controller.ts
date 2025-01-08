import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostRequestDTO, UpdatePostRequestDTO } from './dto';


@Controller('blog')
export class BlogController {

    constructor(private blogService: BlogService){}

    @Post()
    createPost(@Body() postdto: CreatePostRequestDTO){

        return this.blogService.createPost(postdto)

    }

    @Get()
    getPosts(){
        return this.blogService.getPosts()
    }

    @Get(":id")
    getPost(@Param("id", ParseIntPipe) id: number){
        
        return this.blogService.getPost(id)
    }

    @Patch(":id")
    updatePost(@Param("id", ParseIntPipe) id: number, @Body() postdto: UpdatePostRequestDTO){
        return this.blogService.updatePost(id, postdto)
    }

    @Delete(":id")
    @HttpCode(HttpStatus.NO_CONTENT)
    deletePost(@Param("id", ParseIntPipe) id: number){
        return this.blogService.deletePost(id)
    }

}
