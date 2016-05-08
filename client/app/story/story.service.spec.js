'use strict';

describe('Service: storyResource', function () {

  // load the service's module
  beforeEach(module('cbdProjectFullApp.story'));

  // instantiate service
  var storyResource;
  beforeEach(inject(function (_Story_) {
    Story = _Story_;
  }));

  it('should exist', function () {
    expect(!!Story).toBe(true);
  });

});
