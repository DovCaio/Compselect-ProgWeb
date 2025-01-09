import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post, UseInterceptors } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateCommentDTO, CreatePostRequestDTO, UpdatePostRequestDTO } from './dto';


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


    //Comentários

    @UseInterceptors(ClassSerializerInterceptor)
    @Post(":id/comment")
    async createComment(@Param("id", ParseIntPipe) postId: number,
     @Body() commentDto: CreateCommentDTO) {
        return  new CreateCommentDTO({
            ...(await this.blogService.createComment(postId, commentDto))
        })
    }

    @Get(":id/comments/not-accepteds")
    getCommentsNotAcceptedAndNotPending(@Param("id", ParseIntPipe) postId: number){

        return this.blogService.getCommentsNotAcceptedAndNotPending(postId)
    }

    @Get(":id/comments/accepteds")
    getCommentsAccepted(@Param("id", ParseIntPipe) postId: number){

        return this.blogService.getCommentsAccepted(postId)
    }


    @Patch(":id/comment/:tokenForValidation")
    async validateCommentToken(@Param("id", ParseIntPipe) postId: number,
     @Param("tokenForValidation") tokenForValidation: string) {
        return  await this.blogService.validateCommentToken(postId, tokenForValidation)
    }

    @Patch(":id/comment/:commentId/accept")
    async updateComment(@Param("id", ParseIntPipe) postId: number,
     @Param("commentId", ParseIntPipe) commentId: number) {
        return  await this.blogService.acceptComment(postId, commentId)
        
    }

    @HttpCode(HttpStatus.NO_CONTENT)
    @Delete(":id/comment/:commentId")
    async deleteComment(@Param("id", ParseIntPipe) postId: number,
     @Param("commentId", ParseIntPipe) commentId: number) {
        return  await this.blogService.deleteComment(postId, commentId)        
    }

}
