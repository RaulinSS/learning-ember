import Ember from 'ember';

export default Ember.Component.extend({
  maps: Ember.inject.service(),
  //This function gets executed at render time after the component's markup gets inserted into the DOM.
  didInsertElement() {
    this._super(...arguments);
    let location = this.get('location');
    let mapElement = this.get('maps').getMapElement(location);
    this.$('.map-container').append(mapElement);
  }
});
