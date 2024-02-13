import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MongodbService } from './mongodb.service';
import { MongodbController } from './mongodb.controller';
import { EntrySchema } from './schemas/entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entry', schema: EntrySchema }]),
    MongooseModule.forRoot('mongodb://localhost:27017/basem'),
  ],
  controllers: [MongodbController],
  providers: [MongodbService],
})
export class MongodbModule {}
