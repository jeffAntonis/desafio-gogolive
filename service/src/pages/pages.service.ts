import { Injectable } from '@nestjs/common';

import * as pages from '../pagesData.json'; 

@Injectable()
export class PagesService {

  getPages(): any {
    return pages;
  }
}
