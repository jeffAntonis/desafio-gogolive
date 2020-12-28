import { Injectable } from '@nestjs/common';

import { Page } from '../interfaces/page';

import * as pages from '../pagesData.json'; 

@Injectable()
export class PagesService {

  getPages(): [Page] {
    return pages as [Page];
  }
}
