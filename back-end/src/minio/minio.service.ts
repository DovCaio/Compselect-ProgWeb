import { Injectable, Inject } from '@nestjs/common';
import { PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuid } from 'uuid';
import { Readable } from "stream"
import * as Minio from "minio"
import { ConfigService } from '@nestjs/config';
@Injectable()
export class MinioService {

    private readonly bucketName = ""
    private readonly minioClient: Minio.Client

    constructor(
        private readonly configService: ConfigService
    ) {
        this.minioClient = new Minio.Client({
            endPoint: this.configService.get('MINIO_ENDPOINT'),
            port: Number(this.configService.get('MINIO_PORT')),
            useSSL: this.configService.get('MINIO_USE_SSL') === 'true',
            accessKey: this.configService.get('MINIO_ACCESS_KEY'),
            secretKey: this.configService.get('MINIO_SECRET_KEY')
          })
          this.bucketName = this.configService.get('MINIO_BUCKET_NAME')
    }

    private async createBucketIfNotExist() {
        const exist = await this.minioClient.bucketExists(this.bucketName)
        if (!exist) await this.minioClient.makeBucket(this.bucketName)
    }

    async uploadFile(file: Express.Multer.File): Promise<string> {
        
        this.createBucketIfNotExist()

        const imageName = `${uuid()}-${file.originalname}`;

        await this.minioClient.putObject(
            this.bucketName,
            imageName,
            Readable.from(file.buffer),
            file.size,
        );


        return `http://localhost:3000/${this.bucketName}/${imageName}` ;
    }
}
