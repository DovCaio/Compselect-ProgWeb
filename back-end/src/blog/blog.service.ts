import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePostRequestDTO } from './dto';

@Injectable()
export class BlogService {

    constructor(private prisma: PrismaService){}


    createPost(postdto: CreatePostRequestDTO){

        return this.prisma.post.create({
            data: {
                ...postdto
            }
        })

    }

}
