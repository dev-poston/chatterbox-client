var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  roomArray: [],

  roomName: undefined,

  friends: [],
  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();

    App.startSpinner();
    App.fetch(App.stopSpinner);
    Friends.initialize();
    App.autoRefresh();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      App.data = data;
      console.log(data);
      MessagesView.render();
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  autoRefresh: function() {
    setInterval(() => {
      App.fetch();
    }, 2000);
  },

  hamburgerMenuActivation: function () {
    let hamburgerContent = document.getElementById('hamburgerLinks');
    if (hamburgerContent.style.display === 'block') {
      hamburgerContent.style.display = 'none';
    } else {
      hamburgerContent.style.display = 'block';
    }
  },

  insertScript: function (target) {
    if (target === 'title') {
      msgScript = '<script>$("title").text("INSERT TITLE TEXT HERE");</script>';
    } else if (target === 'background') {
      msgScript = '<script>$("body").css("background-color", "INSERT COLOR HERE");</script>';
    }
    $('#message').val(msgScript);
  }

};