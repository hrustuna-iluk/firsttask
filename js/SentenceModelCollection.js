define([
    "jquery",
    "underscore",
    "backbone",
    "SentenceModel"
], function($, _, Backbone, SentenceModel) {
    var SentenceModelCollection = Backbone.Collection.extend ({

        model: SentenceModel,

        check: function(){
        return this.filter(function(sentence){ return sentence.get('correct'); }).length;
        }
    });
    return SentenceModelCollection;
});
