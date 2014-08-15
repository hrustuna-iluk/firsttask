require.config({
    paths: {
        jquery: 'frameworks/jquery',
        underscore: 'frameworks/underscore',
        backbone: 'frameworks/backbone',
        less: 'frameworks/less'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        }
    }
});

require([
    'app',
    'less'
], function(App){
    new App().init();
});