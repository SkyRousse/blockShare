import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeFromCart(item){
      debugger;
      this.get('shoppingCart').remove(item);
    }
  }
});
