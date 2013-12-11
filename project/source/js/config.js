require.config({

    paths: {
        "$": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery",
        "text": "components/requirejs-text/text",
        "ehbs" : "components/requirejs-ember-handlebars/ehbs",
        "Ember" : "components/ember/ember",
        "Handlebars": "components/handlebars/handlebars",
        "templates": "../templates"
    },

    waitSeconds: 15,

    shim: {

        "$": {
            exports: "jQuery"
        },

        "Handlebars": {
            exports: "Handlebars"
        },

        "Ember": {
            deps: ["$", "Handlebars"],
            exports: "Ember"
        }
    },

    ehbs : {
        templatePath : "app/templates/"
    }
});