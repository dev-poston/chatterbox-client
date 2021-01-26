var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.render();
    console.log(App.username);
  },

  render: function() {
    let html = "";
    for (let i = 0; i < App.data.results.length; i++) {
      html += MessageView.render(App.data.results[i]);
    }
    $('#chats').append(html);
  }

};