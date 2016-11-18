import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  // This tells Ember that it is a sub-route and will be accessed 
  // through localhost:4200/rentals/show
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router;
