function App() {

    function getData() {
        return [
            "some quote1",
            "some quote2",
            "some quote3",
            "some quote4",
            "some quote5",
            "some quote6",
            "some quote7",
            "some quote8",
            "some quote9",
            "some quote10",
            "End of quize!"
        ];
    }

    //public
    this.init = function() {
        var collection = new SentenceModelCollection();
        var questions = getData();

        questions.forEach(function(question) {
            var model = new SentenceModel({
                title: question
            });
            collection.add(model);
        });

        new SentenceView({
            collection: collection
        }).render();

    }
}

new App().init();




