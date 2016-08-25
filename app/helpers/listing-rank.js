import Ember from 'ember';

export function listingRank(params/*, hash*/) {
  var listingRate = params[0].get('rating');

  if (listingRate >= 5) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (listingRate >= 4) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (listingRate >= 3) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (listingRate >= 2) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i>');
  } else if (listingRate >=1) {
    return Ember.String.htmlSafe('<i class="fa fa-star" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(listingRank);
