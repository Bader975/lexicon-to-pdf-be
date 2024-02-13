import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MongodbService {
  constructor(
    @InjectModel('Entry') private readonly entryModel: Model<any>, // Use the correct type instead of `any` if you have it
  ) {}

  async findAll() {
    const entries = await this.entryModel
      .aggregate([
        {
          $project: {
            _id: 0,
            entry: {
              $arrayElemAt: ['$lemma.formRepresentations.form', 0],
            },
            definition: {
              $arrayElemAt: ['$senses.definition.textRepresentations.form', 0],
            },
          },
        },
      ])
      .exec();

    return entries;
  }
}
