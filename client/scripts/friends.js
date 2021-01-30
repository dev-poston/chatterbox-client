var Friends = {

  initialize: function() {
    $('#chats').on('click', '.username', function(event) {
      let innerTarget = event.currentTarget.innerHTML;

      if (App.friends.includes(innerTarget)) {
        App.friends.splice(App.friends.indexOf(innerTarget), 1);
      } else {
        App.friends.push(innerTarget);
      }
      App.fetch();
    });
  },

};