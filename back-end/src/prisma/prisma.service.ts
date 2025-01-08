import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class PrismaService extends PrismaClient{

    constructor(config: ConfigService){
        super({
            datasources: {
                db: {
                    url: config.get("DATABASE_URL")
                }
            }
        })
    }

    cleanDb(){
        this.$connect();
        return this.$transaction([
            this.location.deleteMany(),
            this.event.deleteMany(),
            this.post.deleteMany(),
            this.comment.deleteMany(),
            this.publication.deleteMany()
        ])
    }

}
