import Route from '@ember/routing/route';

export default Route.extend({

    model() {
        return this.store.createRecord('contact');
      }, 
          
      actions: {
    
        saveContact(newContactMessage) {
            newContactMessage.save().then(() => this.controller.set('responseMessage', true));
        },
    
        willTransition() {
    
          let model = this.controller.get('model');
    
          if (model.get('isNew')) {
            model.destroyRecord();
          }

          this.controller.set('responseMessage', false);
        }

        // deleteContact(contact) {
        //   let confirmation = confirm('Are you sure do you want delete it?');
      
        //   if (confirmation) {
        //     contact.destroyRecord();
        //   }
        // }
     }
});