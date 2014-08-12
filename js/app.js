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

var collection = new SentenceModelCollection();

questions.forEach(function(question) {
    var model = new SentenceModel({
        title: question
    });
    collection.add(model);
});

new SentenceView({
    collection: collection
}).render();

