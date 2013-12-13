require.config({

    paths: {
        "$": "components/jquery/jquery",
        "text" : "components/requirejs-text/text",
        "ehbs" : "components/requirejs-ember-handlebars/ehbs",
        "Ember" : "components/ember/ember",
        "EmberAnimate" : "components/ember-animate/ember-animate",
        "Handlebars": "components/handlebars/handlebars",
        "RAF" : "components/raf.js/raf",
        "Tween": "components/tweenjs/src/Tween"
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

        "Tween" : {
            deps : ["RAF"],
            exports : "TWEEN"
        }
    },

    ehbs : {
        templatePath : "app/templates/"
    }
});