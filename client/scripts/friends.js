var Friends = {

  initialize: function() {
    $('#chats').on('click', '.username', function(event) {
      console.log(event.currentTarget.innerHTML);
      let innerTarget = event.currentTarget.innerHTML;
      if ($('.' + innerTarget).hasClass('friend')) {
        $('.' + innerTarget).removeClass('friend');
      } else {
        $('.' + innerTarget).addClass('friend');
      }
    });
  },

};