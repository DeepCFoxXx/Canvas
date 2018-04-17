var assert = require('assert');
var position = require('./position.js');


describe('position', function() {
  it('should start at position 0,0', function() {
    assert.equal(0, position.y);
    assert.equal(0, position.x);
  });

});
