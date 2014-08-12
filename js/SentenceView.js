var SentenceView = Backbone.View.extend ({
    content: $("#main"),
    className: 'quote',
    template: _.template($('#quote').html()),

    initialize: function(options) {
       this.model = options.model;
       this.collection = options.collection;
    },

    attachEvents: function() {
        this.$('.right').on('click', $.proxy(this.correct, this));
        this.$('.wrong').on('click', $.proxy(this.incorrect, this));
    },

    correct: function() {
        this.model.set('check', true);
    },

    incorrect: function() {
        this.model.set('check', false);
        this.collection.trigger('change', this.model);
    },

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.content.html(this.$el);
        this.attachEvents();
        return this;
    }

});