import Route from '@ember/routing/route';

export default Route.extend({

  model() {
    return this.store.findAll('invitation');
  },

  actions: {
    
    deleteInvitation(invitation) {
      let confirmation = confirm('Are you sure do you want delete it?');
  
      if (confirmation) {
        invitation.destroyRecord();
      }
    }
 }

});