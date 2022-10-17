import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | tutorials/mathematics/3d-vectors', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:tutorials/mathematics/3d-vectors');
    assert.ok(route);
  });
});
