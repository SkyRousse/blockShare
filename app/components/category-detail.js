import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  sortBy: ['pricePerDay:asc'],
  sortedListings: Ember.computed.sort('category.listings', 'sortBy'),
  
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      this.sendAction('sendToCart');
    }
  }
});
