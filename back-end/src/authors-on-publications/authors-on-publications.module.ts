import { Global, Module } from '@nestjs/common';
import { AuthorsOnPublicationsService } from './authors-on-publications.service';

@Global()
@Module({
  providers: [AuthorsOnPublicationsService],
  exports: [AuthorsOnPublicationsService]
})
export class AuthorsOnPublicationsModule {}
