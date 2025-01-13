import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EventModule } from './event/event.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PublicationModule } from './publication/publication.module';
import { BlogModule } from './blog/blog.module';
import { AuthorModule } from './author/author.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    PrismaModule,
     EventModule,
     PublicationModule,
     BlogModule,
     AuthorModule,
     StatisticsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
