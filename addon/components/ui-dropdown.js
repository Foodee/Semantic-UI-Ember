import Ember from 'ember';
import Base from '../mixins/base';
import DataAttributes from '../mixins/data-attributes';

export default Ember.Component.extend(Base, DataAttributes, {
  module: 'dropdown',
  classNames: [ 'ui', 'dropdown' ],
  tagName: 'div',

  onChange: function(value, text, $element) {
    if (value === undefined) {
      // The initial set selected doesn't have an value. This is potentially a problem
      // within the main Semantic library
      //
      // https://github.com/Semantic-Org/Semantic-UI/blob/master/src/definitions/modules/dropdown.js#L85
      value = $element.data('value');
    }
    return this.set('value', value);
  }
});
