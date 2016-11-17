import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list-filter',"raulito"],
  value: '',

  init() {
    console.log("executei o init;");
    this._super(...arguments);
    this.get('filter')('').then((results) => this.set('resultados', results));
  },

  actions: {
    handleFilterEntry() {
      console.log("executei o handle;");
      let filterInputValue = this.get('value');
      let filterAction = this.get('filter');
      filterAction(filterInputValue).then((filterResults) => this.set('resultados', filterResults));
    }
  }
});