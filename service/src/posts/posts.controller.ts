import { Controller, Get } from '@nestjs/common';

import { PostsService } from './posts.service';
import { Post } from '../interfaces/post';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  getPosts(): [Post] {
    return this.postsService.getPosts();
  }
}
