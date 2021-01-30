var FormView = {

  $form: $('form'),
  $enterRoom: $('.enterroom'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
    FormView.$enterRoom.on('click', FormView.filter);
  },

  handleSubmit: function(event) {

    event.preventDefault();

    let msg = document.getElementById('message').value;
    let room = document.getElementById('therooms').value;

    let message = {
      username: App.username,
      text: msg,
      roomname: room,
    };

    let successCallback = function () {
      console.log("This message has been successfully submitted.");
      App.fetch();
    };

    Parse.create(message, successCallback);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  filter: function(event) {
    let currentRoom = document.getElementById('therooms').value;
    App.roomName = currentRoom;
  }

};