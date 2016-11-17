import Ember from 'ember';

/* Ember offers Handlebars template helpers to decorate the data in our templates. */

const communityPropertyTypes = ['Condo', 'Townhouse','Apartment'];

export function rentalPropertyType([type]/*, hash*/) {    
  if(communityPropertyTypes.includes(type)){
    return "Community";
  }
  return "Standalone";
}

export default Ember.Helper.helper(rentalPropertyType);
