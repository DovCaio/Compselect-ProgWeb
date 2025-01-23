import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MinioService } from './minio.service';
import * as Minio from 'minio';
@Global()
//https://alexisbouchez.hashnode.dev/how-to-setup-minio-in-a-nestjs-api-to-handle-file-uploads FAzer assim
@Module({
    imports: [ConfigModule],
    providers: [
        MinioService        
    ],
    exports: [MinioService]
})
export class MinioModule {}
