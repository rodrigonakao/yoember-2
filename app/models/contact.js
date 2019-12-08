import DS from 'ember-data';
import { match, gte, and, not } from '@ember/object/computed';

export default DS.Model.extend({
  emailAddress: DS.attr('string'),
  message: DS.attr('string'),

  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: gte('message.length', 5),

  isValid: and('isValidEmail', 'isMessageEnoughLong'),
  isNotValid: not('isValid')
});
