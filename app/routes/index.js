import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    shoppingCart: Ember.inject.service(),
  },
  model() {
    return this.store.findAll('category');
  }
});
