var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {

    // Stop the browser from submitting the form
    event.preventDefault();

    let msg = document.getElementById('message').value;

    let message = {
      username: App.username,
      text: msg,
      roomname: 'the room',
    };

    let successCallback = function () {
      console.log("This message has been successfully submitted.");
      App.fetch();
    };

    Parse.create(message, successCallback);


    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};