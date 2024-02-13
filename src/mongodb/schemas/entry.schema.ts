import * as mongoose from 'mongoose';

export const EntrySchema = new mongoose.Schema(
  {
    lemma: {
      formRepresentations: [
        {
          form: String,
        },
      ],
    },
    senses: [
      {
        definition: {
          textRepresentations: [
            {
              form: String,
            },
          ],
        },
      },
    ],
  },
  { collection: 'basemJson' },
); // Explicitly set the collection name
