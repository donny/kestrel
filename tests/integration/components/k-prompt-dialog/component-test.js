import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('k-prompt-dialog', 'Integration | Component | k prompt dialog', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{k-prompt-dialog}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#k-prompt-dialog}}
      template block text
    {{/k-prompt-dialog}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
