var SentenceView = Backbone.View.extend ({
    content: $("#main"),
    className: 'quote',
    template: _.template($('#quote').html()),

    initialize: function(options) {
       this.collection = options.collection;
       this.model = this.collection.at(0);
    },

    //protected methods
    _attachEvents: function() {
        this.$('.right').on('click', $.proxy(this._correct, this));
        this.$('.wrong').on('click', $.proxy(this._incorrect, this));
        this.collection.off().on('change', $.proxy(this._nextQuestion, this));
    },

    _correct: function() {
        if (!this.model) {
            this._endQuiz();
            return;
        }
        this.model.set('check', true);
    },

    _incorrect: function() {
        if (!this.model) {
            this._endQuiz();
            return;
        }
        this.model.set('check', false);
        this.collection.trigger('change', this.model);
    },

    _nextQuestion: function(model) {
        var index = this.collection.indexOf(model);
        this.model = this.collection.at(index + 1);

        if (!this.model) {
            this._endQuiz();
            return;
        }
        this.render();
    },

    _endQuiz: function() {
        alert('End quiz!');
    },
    //public methods
    render: function() {
        var rightAmount = this.collection.check();
        this.$el.html(this.template({
            question: this.model.toJSON(),
            rightAmount: rightAmount,
            wrongAmount: this.collection.models.length - rightAmount,
            totalAmount: this.collection.models.length
        }));
        this.content.html(this.$el);
        this._attachEvents();
        return this;
    }

});