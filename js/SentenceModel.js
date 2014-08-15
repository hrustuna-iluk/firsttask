define([
    "jquery",
    "underscore",
    "backbone"
], function($, _, Backbone) {
    var SentenceModel = Backbone.Model.extend ({
        defaults:{
            title : "",
            correct : false
        }
    });
    return SentenceModel;
});
