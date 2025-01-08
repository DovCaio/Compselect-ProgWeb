import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostRequestDTO, UpdatePostRequestDTO } from './dto';

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
        console.log(existsPost as CreatePostRequestDTO)
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

}
