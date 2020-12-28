import { Controller, Get } from '@nestjs/common';

import { PagesService } from './pages.service';
import { Page } from '../interfaces/page';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}
  
  @Get()
  getPages(): [Page] {
    return this.pagesService.getPages();
  }  
}
