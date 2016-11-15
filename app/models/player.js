import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr(),
    job: DS.attr()
});
