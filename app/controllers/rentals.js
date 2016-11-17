import Ember from 'ember';

/*Controllers can contain actions and properties available to the template of its corresponding route. */
export default Ember.Controller.extend({
  actions: {
    filterByCity(param) {      
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental'); 
      }
    }
  }
});