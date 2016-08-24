import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  pricePerDay: DS.attr(),
  location: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  rating: DS.attr(),
  category: DS.belongsTo('category', {async: true})
});
