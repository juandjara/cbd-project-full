'use strict';

import mongoose from 'mongoose';

var StorySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  likes:    [ mongoose.Schema.ObjectId ],
  dislikes: [ mongoose.Schema.ObjectId ],
  visits:   [ mongoose.Schema.ObjectId ],
  nodes:    [{
    id:       { type: String, index: { unique: true } },
    text:     String,
    title:    String,
    children: [ String ] // [id]
  }]
});

export default mongoose.model('Story', StorySchema);
