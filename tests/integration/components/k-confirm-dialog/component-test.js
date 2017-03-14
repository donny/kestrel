import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('k-confirm-dialog', 'Integration | Component | k confirm dialog', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{k-confirm-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#k-confirm-dialog}}
      template block text
    {{/k-confirm-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
