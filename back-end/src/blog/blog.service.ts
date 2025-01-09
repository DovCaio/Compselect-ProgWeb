import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCommentDTO, CreatePostRequestDTO, UpdatePostRequestDTO } from './dto';
import { v4 as uuid} from "uuid";
@Injectable()
export class BlogService {

    constructor(private prisma: PrismaService){}


    createPost(postdto: CreatePostRequestDTO){


        if (!this.contentQuantityAndValuesValid(postdto)) {
            throw new ForbiddenException("Content quantity and values must be the same")
        }


        return this.prisma.post.create({
            data: {
                ...postdto
            }
        })

    }

    contentQuantityAndValuesValid(postdto: CreatePostRequestDTO){
        
        const quantityOfAllContent = postdto.images.length + postdto.titles.length + postdto.texts.length + postdto.links.length
        
        return quantityOfAllContent === postdto.sequenceOfContent.length && 
        postdto.images.length === postdto.sequenceOfContent.filter(content => content === 0).length &&
        postdto.titles.length === postdto.sequenceOfContent.filter(content => content === 1).length &&
        postdto.texts.length === postdto.sequenceOfContent.filter(content => content === 2).length &&
        postdto.links.length === postdto.sequenceOfContent.filter(content => content === 3).length 
    }


    getPosts(){
        return this.prisma.post.findMany()
    }

    getPost(id: number){
        return this.prisma.post.findUnique({
            where: {
                id
            }
        })
    }

    async updatePost(id: number, postdto: UpdatePostRequestDTO){

        const existsPost = await this.prisma.post.findUnique({
            where: {
                id
            }
        })
        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }
        
        const toValidate = {
            ...existsPost,
            ...postdto
        }

        if (!this.contentQuantityAndValuesValid(toValidate as CreatePostRequestDTO)) {
            throw new ForbiddenException("Content quantity and values must be the same")
        }


        return await this.prisma.post.update({
            where: {
                id
            },
            data: {
                ...postdto
            }
        })
    }

    async deletePost(id: number){
        const existsPost = await this.prisma.post.findUnique({
            where: {
                id
            }
        })
        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }
        return await this.prisma.post.delete({
            where: {
                id
            }
        })
    }

    async createComment(postId: number, commentDto: CreateCommentDTO){
        
        const exitsPost = await this.prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!exitsPost) {
            throw new ForbiddenException("Post not found")
        }
        
        
        const emailVerificationToken = uuid()

        //Enviar email

        return await this.prisma.comment.create({
            data: {
                ...commentDto,
                accept: false,
                pending: true,
                emailVerificationToken,
                post: {

                    connect: {
                        id: postId
                    }
                }
            }
        })
    }

    async getCommentsNotAcceptedAndNotPending(postId: number){

        const existsPost = await this.prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }

        return  await this.prisma.comment.findMany({
            where: {
                postId,
                accept: false,
                pending: true
            }
        })
    }

    async getCommentsAccepted(postId: number){

        const existsPost = await this.prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }

        return  await this.prisma.comment.findMany({
            where: {
                postId,
                accept: true
            }
        })
    }

    async acceptComment(postId: number, commentId: number){

        const existsPost = await this.prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }

        const existsComment = await this.prisma.comment.findUnique({
            where: {
                id: commentId
            }
        })

        if (!existsComment) {
            throw new ForbiddenException("Comment not found")
        }else if (existsPost.id !== existsComment.postId) {
            throw new ForbiddenException("Comment not found")

        }else  if(existsComment.accept){
            throw new ForbiddenException("Comment already accepted")
        }
        return await this.prisma.comment.update({
            where: {
                id: commentId
            },
            data: {
                accept: true
            }
        })
    }

    async validateCommentToken(postId: number, tokenForValidation: string){

        const existsPost = await this.prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }

        const existsComment = await this.prisma.comment.findUnique({
            where: {
                emailVerificationToken: tokenForValidation
            }
        })

        if (!existsComment) {
            throw new ForbiddenException("Comment not found")
        }else if (existsPost.id !== existsComment.postId) {
            throw new ForbiddenException("Comment not found")
        }


        return this.prisma.comment.update({
            data: {
                pending: false
            },
            where: {
                emailVerificationToken: tokenForValidation
            }
        })
    }

    async deleteComment(postId: number, commentId: number){

        const existsPost = await this.prisma.post.findUnique({
            where: {
                id: postId
            }
        })

        if (!existsPost) {
            throw new ForbiddenException("Post not found")
        }

        const existsComment = await this.prisma.comment.findUnique({
            where: {
                id: commentId
            }
        })

        if (!existsComment) {
            throw new ForbiddenException("Comment not found")
        }else if(existsPost.id !== existsComment.postId){
            throw new ForbiddenException("Comment not found")
        }

        return this.prisma.comment.delete({
            where: {
                id: commentId
            }
        })
    }


}
