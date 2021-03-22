import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | personal', function(hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:personal');
    assert.ok(service);
  });
});
