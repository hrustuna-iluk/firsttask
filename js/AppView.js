var questions = [
    "some quote",
    "some quote2",
    "some quote3",
    "some quote4",
    "some quote5",
    "some quote6",
    "some quote7",
    "some quote8",
    "some quote9",
    "some quote10"
];

var AppView = Backbone.View.extend({

    initialize: function() {
        this.nextQuestion();
        this.attachEvents();
    },

    attachEvents: function() {
        collection.on('change', this.nextQuestion);
    },

    nextQuestion: function() {
        if (!collection.models.length) {
            //TODO alert(amount of right answers)
        }

        this.currentModel = collection.models.shift();
        this.currentView = new SentenceView({
            model: this.currentModel,
            collection: collection
        }).render();
    }
});

var collection = new SentenceModelCollection();

questions.forEach(function(question) {
    var model = new SentenceModel({
        title: question
    });
    collection.add(model);
});

var app = new AppView();

console.log(collection);
