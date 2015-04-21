Template.Chat.events({
    'submit form': function(e) {
        e.preventDefault();
        var input = $(e.currentTarget).find('[name=message]');
        var message = input.val();
        if (!message.trim()) return null;
        Messages.insert({
            user: Meteor.user(),
            message: message,
            createdAt: new Date()
        });
        input.val('');
    }
});

Template.Chat.helpers({
    messages: function() {
        return Messages.find({});
    }
});
