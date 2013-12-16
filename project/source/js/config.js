require.config({

    paths: {
        "$": "components/jquery/jquery",
        "text" : "components/requirejs-text/text",
        "ehbs" : "components/requirejs-ember-handlebars/ehbs",
        "EmberGlobal" : "components/ember/ember",
        "Ember" : "components/ember-amd/ember-amd",
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

        "EmberGlobal": {
            deps: ["$", "Handlebars"],
            exports: "Ember"
        },

        "Ember": {
            deps: ["EmberGlobal"]
        },

        "EmberAnimate": {
            deps: ["EmberGlobal"]
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