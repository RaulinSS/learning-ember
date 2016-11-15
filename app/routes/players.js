import Ember from 'ember';

export default Ember.Route.extend({
    model(){
        /* modelName = rental */
        return this.get('store').findAll('player');
    }
});
