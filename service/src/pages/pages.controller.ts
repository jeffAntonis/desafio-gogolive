import { Controller, Get } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}
  
  @Get()
  getPages(): any {
    return this.pagesService.getPages();
  }  
}
