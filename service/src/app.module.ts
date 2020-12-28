import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { PagesModule } from './pages/pages.module';

@Module({
  imports: [PostsModule, PagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
