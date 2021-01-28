var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  render: function() {

    for (let i = 0; i < App.data.results.length; i++) {

      let currentMsg = App.data.results[i];
      currentMsg.roomname =  _.escape(currentMsg.roomname);

      console.log(!App.roomArray.includes(currentMsg.roomname));
      console.log(!currentMsg.roomname === undefined);
      console.log(!currentMsg.roomname === null);
      console.log(currentMsg.roomname.length > 0);

      if (!App.roomArray.includes(currentMsg.roomname)
        // && !currentMsg.roomname === undefined
        // && !currentMsg.roomname === null
        && currentMsg.roomname.length > 0) {
        App.roomArray.push(currentMsg.roomname);
        $('#roomlist').append('<option value="' + currentMsg.roomname + '">');
      }
      console.log(App.roomArray);

    }
  }

};
