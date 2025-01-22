import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { S3Client } from '@aws-sdk/client-s3';
import { MinioService } from './minio.service';

@Global()
//https://alexisbouchez.hashnode.dev/how-to-setup-minio-in-a-nestjs-api-to-handle-file-uploads FAzer assim
@Module({
    imports: [ConfigModule],
    providers: [
        {
            provide: "MINIO_CLIENT",
            useFactory: (configService: ConfigService) => {
                return new S3Client({
                    endpoint: configService.get("AWS_ENDPOINT"),
                    region: configService.get("AWS_REGION"),
                    credentials: {
                        accessKeyId: configService.get("AWS_ACCESS_KEY_ID"),
                        secretAccessKey: configService.get("AWS_SECRET_ACCESS_KEY"),
                    },
                });
            },
            inject: [ConfigService],

        },
        MinioService
        
    ],
    exports: ["MINIO_CLIENT", MinioService]
})
export class MinioModule {}
