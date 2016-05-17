/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/stories              ->  index
 * POST    /api/stories              ->  create
 * GET     /api/stories/:id          ->  show
 * PUT     /api/stories/:id          ->  update
 * DELETE  /api/stories/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import Story from './story.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of Storys
export function index(req, res) {
  return Story.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single Story from the DB
export function show(req, res) {
  return Story.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new Story in the DB
export function create(req, res) {
  return Story.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Story in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return Story.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a Story from the DB
export function destroy(req, res) {
  return Story.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

// Add a "like" to a Story
export function like(req, res){
  console.log("storiesController.like req params" + JSON.stringify(req.params));
  return Story
      .findOneAndUpdate(
         { _id: req.params.id },
         { 
           $pull: { dislikes: req.user._id }, 
           $addToSet: { likes: req.user._id } 
         }
       )
      .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .then(function(entity){
      
    })
    .catch(handleError(res));
}

// Add a "dislike" to a Story
export function dislike(req, res){
  console.log("storiesController.dislike req params" + JSON.stringify(req.params));
  return Story
      .findOneAndUpdate(
         { _id: req.params.id },
         { 
           $pull: { likes: req.user._id }, 
           $addToSet: { dislikes: req.user._id } 
         }
       )
      .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .then(function(entity){
      
    })
    .catch(handleError(res));
}

// Add a "visit" to a Story
export function visit(req, res){
  console.log("storiesController.visit req params" + JSON.stringify(req.params));
  return Story
      .findOneAndUpdate(
         { _id: req.params.id },
         { $addToSet: { visits: req.user._id } }
       )
      .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .then(function(entity){
      
    })
    .catch(handleError(res));
}

// edit nodes
export function nodes(req, res){
  console.log("storiesController.nodes req params" + JSON.stringify(req.params));
  console.log("storiesController.nodes req body" + JSON.stringify(req.body));
    
  return Story
      .findOneAndUpdate(
         { _id: req.params.id },
         { nodes: req.body }
       )
      .exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .then(function(entity){
      
    })
    .catch(handleError(res));
}
