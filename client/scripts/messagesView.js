var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {

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
    console.log('rendered');
    $('#chats').empty();
    $('#chats').append(html);
  }

};