'use strict';

var express = require('express');
var controller = require('./story.controller');
import * as auth from '../../auth/auth.service';

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.post('/:id/like', auth.isAuthenticated(), controller.like);
router.post('/:id/dislike', auth.isAuthenticated(), controller.dislike);
router.post('/:id/visit', auth.isAuthenticated(), controller.visit);
router.post('/:id/nodes', auth.isAuthenticated(), controller.nodes);


module.exports = router;
