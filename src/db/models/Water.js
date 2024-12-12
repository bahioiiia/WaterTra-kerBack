import { Schema, model } from 'mongoose';

import { handleSaveError, setUpdateSettings } from './hooks.js';

const waterSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },

    volume: {
      type: Number,
      required: true,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

waterSchema.post('save', handleSaveError);
waterSchema.pre('findOneAndUpdate', setUpdateSettings);
waterSchema.post('findOneAndUpdate', handleSaveError);

const waterCollection = model('water', waterSchema);

export default waterCollection;