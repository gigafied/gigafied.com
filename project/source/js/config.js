require.config({
    paths: {
        "$": "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery",
        "text": "components/requirejs-text/text",
        "Ember" : "components/ember/ember",
        "HBS": "components/handlebars/handlebars",
        "templates": "../templates"
    },

    waitSeconds: 15,

    shim: {

        "$": {
            exports: "jQuery"
        },

        "HBS": {
            exports: "Handlebars"
        },

        "Ember": {
            deps: ["$", "HBS"],
            exports: "Ember"
        }
    }
});