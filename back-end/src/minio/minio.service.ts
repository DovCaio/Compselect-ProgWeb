import { Injectable, Inject } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { v4 as uuid } from 'uuid';
import { Readable } from "stream"
import { Upload } from '@aws-sdk/lib-storage';
@Injectable()
export class MinioService {

    private readonly bucketName = "images-upload"

    constructor(
        @Inject('MINIO_CLIENT') private readonly minioClient: S3Client
    ) {}

    async uploadFile(file: Express.Multer.File): Promise<string> {
        const imageName = `${uuid()}-${file.originalname}`;


        const upload = new Upload({
            client: this.minioClient,
            params: {
                Bucket: this.bucketName,
                Key: imageName,
                Body: Readable.from([file.buffer])
            }
        });

        await upload.done();

        return `http://localhost:3000/${this.bucketName}/${imageName}` ;
    }
}
