Template.Chat.events({
    'submit form': function(e) {
        // prevent submitting the form
        e.preventDefault();

        // get message and username
        var message = $(e.currentTarget).find('[name=message]').val();
        var username = $(e.currentTarget).find('[name=username]').val();

        // TODO: Insert into Messages collection
        // Related docs: http://docs.meteor.com/#/full/insert
        // Notes: create it first! [both/collections.js]

    }
});

Template.Chat.helpers({
    messages: function() {
        // TODO: Return all Messages using the Mongo Collection created in collections.js
        // Related docs: http://docs.meteor.com/#/full/find
    }
});
