var MessagesView = {

  initialize: function() {

  },

  render: function() {

    if (App.roomName === undefined) {
      let html = '';

      for (let i = 0; i < App.data.results.length; i++) {
        let currentMsg = App.data.results[i];
        currentMsg.username = _.escape(currentMsg.username);
        currentMsg.text = _.escape(currentMsg.text);
        currentMsg.roomname = _.escape(currentMsg.roomname);
        currentMsg.createdAt = _.escape(currentMsg.createdAt);
        currentMsg.updatedAt = _.escape(currentMsg.updatedAt);
        if (currentMsg.username === undefined
          || currentMsg.text === undefined
          || currentMsg.roomname === undefined
          || currentMsg.createdAt === undefined
          || currentMsg.updatedAt === undefined) {
          continue;
        }
        html += MessageView.render(currentMsg);
      }
      $('#chats').empty();
      $('#chats').append(html);
    } else {
      let html = '';
      for (let i = 0; i < App.data.results.length; i++) {
        let currentMsg = App.data.results[i];
        currentMsg.username = _.escape(currentMsg.username);
        currentMsg.text = _.escape(currentMsg.text);
        currentMsg.roomname = _.escape(currentMsg.roomname);
        currentMsg.createdAt = _.escape(currentMsg.createdAt);
        currentMsg.updatedAt = _.escape(currentMsg.updatedAt);
        if (currentMsg.username !== undefined
          && currentMsg.text !== undefined
          && currentMsg.roomname === App.roomName
          && currentMsg.createdAt !== undefined
          && currentMsg.updatedAt !== undefined) {
          html += MessageView.render(currentMsg);
        }
      }
      $('#chats').empty();
      $('#chats').append(html);
    }
    const chatsDomElement = document.querySelector('#chats');
    const userNameList = chatsDomElement.querySelectorAll('.username');
    console.log(App.friends.length);
    console.log(App.friends);
    for (var j = 0; j < userNameList.length; j++) {
      for (var i = 0; i < App.friends.length; i++) {
        console.log(userNameList[j].textContent === App.friends[i]);
        if (userNameList[j].textContent === App.friends[i]) {
          $(userNameList[j]).addClass('friend');
        }
      }
    }
  }

};