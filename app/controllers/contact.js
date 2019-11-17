import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { gte } from '@ember/object/computed';
import { match, not } from '@ember/object/computed';
import { and } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Contact header',

  isLongEnough: gte('message.length', 5),
  isValid: match('emailAddress', /^.+@.+\..+$/),
  
  isBothTrue: and('isLongEnough', 'isValid'),

  isDisabled: not('isBothTrue'),


  actions: {

    sendMessage() {
      alert(`Sending: ${this.get('emailAddress')}`);
      this.set('responseMessage', `We got your message and we’ll get in touch soon! ${this.get('emailAddress')} and ${this.get('message')}`);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  },

  actualEmailAddress: computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  })
});
