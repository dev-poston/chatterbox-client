var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // MessagesView.render();
    console.log(App.username);
  },

  render: function() {
    let html = '';

    for (let i = 0; i < App.data.results.length; i++) {
      let currentMsg = App.data.results[i];
      if (currentMsg.username === undefined
        || currentMsg.text === undefined
        || currentMsg.roomname === undefined
        || currentMsg.createdAt === undefined
        || currentMsg.updatedAt === undefined) {
        continue;
      }
      html += MessageView.render(currentMsg);
    }

    $('#chats').append(html);
  }

};

