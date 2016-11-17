import Ember from 'ember';

/* In Ember, route handlers are responsible for loading model data. */

/* The model hook we've added to our rentals route handler will be called 
when a user enters the rentals route. */

/*When we call this.get('store').findAll('rental'), 
Ember Data will make a GET request to /rentals. */

export default Ember.Route.extend({
    model(){
        /* modelName = rental */
        //return this.get('store').findAll('rental');
    }
});
