import { Injectable } from '@nestjs/common';

import { Post } from '../interfaces/post';

import * as posts from '../postsData.json'; 

@Injectable()
export class PostsService {
  
  getPosts(): [Post] {
    return posts as [Post];
  }
}
