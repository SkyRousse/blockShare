import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveListing() {
      var params = {
        name: this.get('name') ? this.get('name'): "",
        description: this.get('description')  ? this.get('description'): "",
        location: this.get('location')  ? this.get('location'): "",
        pricePerDay: parseInt(this.get('pricePerDay') ? this.get('pricePerDay'): 0),
        image: this.get('image') ? this.get('image'):"https://pixabay.com/static/uploads/photo/2012/04/10/22/34/flat-26677_960_720.png",
        rating: 0,
        category: this.get('category')
      };
      debugger;
      this.sendAction('saveListing', params);
    }
  }
});
