import Controller from '@ember/controller';
import { computed, observer } from '@ember/object';
import { match, not } from '@ember/object/computed';

export default Controller.extend({

  headerMessage: 'Comming Soon header',
  responseMessage: '',

  //isDisabled: true,
  // isDisabled: computed('emailAddress', function() {
  //   return this.get('emailAddress') === '';
  // }),
  //isDisabled: computed.empty('emailAddress'),

  isValid: match('emailAddress', /^.+@.+\..+$/),
  isDisabled: not('isValid'),

  emailAddress: '',

  actions: {

  //   saveInvitation: function() {

  //     var _that = this;
  //     var email = this.get('emailAddress');

  //     var newInvitation = this.store.createRecord('invitation', {
  //         email: email
  //     });

  //     newInvitation.save().then(function(response) {
  //         _that.set('responseMessage', "Thank you! We saved your email address with the following id: " + response.get('id'));
  //         _that.set('emailAddress', '');
  //     });
  // }

    saveInvitation() {
      const email = this.get('emailAddress');

      const newInvitation = this.store.createRecord('invitation', { email });

      newInvitation.save().then(response => {
        this.set('responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
    }
      
  },

  actualEmailAddress: computed('emailAddress', function() {
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),

  emailAddressChanged: observer('emailAddress', function() {
    console.log('observer is called', this.get('emailAddress'));
  })

});
