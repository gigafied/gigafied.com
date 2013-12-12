require.config({

    paths: {
        "$": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery",
        "text": "components/requirejs-text/text",
        "ehbs" : "components/requirejs-ember-handlebars/ehbs",
        "Ember" : "components/ember/ember",
        "EmberAnimate" : "components/ember-animate/ember-animate",
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
        },

        "EmberAnimate": {
            deps: ["Ember"],
            exports: "Ember"
        },
    },

    ehbs : {
        templatePath : "app/templates/"
    }
});