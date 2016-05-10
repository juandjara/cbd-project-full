'use strict';

import mongoose from 'mongoose';

var StorySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean,
  likes:    [ mongoose.Schema.ObjectId ],
  dislikes: [ mongoose.Schema.ObjectId ],
  visits:   [ mongoose.Schema.ObjectId ]    
});

export default mongoose.model('Story', StorySchema);
