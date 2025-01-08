import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostRequestDTO } from './dto';

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

}
