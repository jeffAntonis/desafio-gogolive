import { Injectable } from '@nestjs/common';

import * as posts from '../postsData.json'; 

@Injectable()
export class PostsService {
  
  getPosts(): any {
    return posts;
  }
}
