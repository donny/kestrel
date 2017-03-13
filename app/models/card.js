import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  score: DS.attr('number'),
  list: DS.attr('string')
});
