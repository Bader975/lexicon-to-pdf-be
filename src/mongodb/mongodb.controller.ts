import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express'; // Import Response from express
import { MongodbService } from './mongodb.service';

@Controller('entries')
export class MongodbController {
  constructor(private readonly mongodbService: MongodbService) {}

  @Get()
  async findAll(@Res() response: Response) {
    const data = await this.mongodbService.findAll();
    response.header(
      'Cache-Control',
      'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
    );
    response.send(data);
  }
}
