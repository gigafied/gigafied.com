module.exports = {
	
	source_dir : "source", // `source_dir` is the directory where all your source files are.
	output_dir: "deploy", // `output_dir` is the directory you want to compile your static site to.

	template_engine : "swig", // the npm package name of the template engine, only engines supported by consolidate.js will work
	template_dir : "source/templates", // Only relevant if using swig : The directory where all your templates are.

	/*
		Literal regexes here. Statix won't include anything, unless it matches an `include_pattern` and also does 
		not match an `exclude_pattern`. Checks against the full path, i.e. /Users/your.name/some/dir/site/blah.html
	*/

	include_patterns : [
		/^(.*)$/
	],

	exclude_patterns : [
		/^(.*)(base\.html{1})$/,
		/^(.*)(\/templates{1})(.*)$/
	],

	/*
		An array of the pages to be rendered with the template engine.
	
		`output` is where your page will eventually live, in the static version of the site. I.e. "{output_dir}/{page.output}"
		
		`source` is where your template lives. I.e. "{source_dir}{page.source}"
		
		`data` is an object of variables you want to pass through to the template when it gets rendered.
	*/

	pages : [
		{
			output : "index.html",
			source : "templates/index.html",
			data : {
				inactive: true
			}
		},		

		{
			output : "about.html",
			source : "templates/about.html",
			data : {
				pageClass : "about"
			}
		},

		{
			output : "work.html",
			source : "templates/work.html",
			data : {
				pageClass : "work"
			}
		},

		{
			output : "contact.html",
			source : "templates/contact.html",
			data : {
				pageClass : "contact"
			}
		}
	],

	/*
		`global_data` is an object that gets passed to all pages. Note, if you set `global_data.someProp` to something
		and also have `page.data.someProp`, the latter will take precedence.
	*/

	global_data: {

	},

	/*
		Like `global_data`, but `build_data` only gets passed to the renderer when you build, not when viewing locally through the webserver.
		`build_data` properties take precedence over `global_data` properties.
	*/

	build_data : {
		
	},

	// Misc. things to pass to express for the local web server, currently the only value used is port.
	express : {
		port: "8000"
	},

	/*
		If you need to process some things before you're ready to generate the pages (either through the web server or compilation),
		you can use this `ready` method. Common use case, you need to grab a bunch of data from a database, and are using asynch i/o
		Statix, does nothing until the `callback` passed to this method is called, so once you are done with everything you need to do,
		simply call `callback();`
	*/

	ready : function (callback) {
		callback();	
	},

	/*
		Statix gives you a hook to do whatever you want before the build actually happens. You can use this method to minify js/css,
		compile scss stylesheets, etc. Just be sure to invoke the `done()` function when you are ready for Statix to do it's thing.
	*/

	preBuild : function (done) {
		done();
	},

	/*
		Just like `preBuild()` but this method gets called after Statix has generated the static site. You can use this to
		cleanup some files, git commit/push, or whatever you feel like. Just be sure to invoke the `done()` function afterwards.
	*/
	postBuild : function (done) {
		done();
	}

};
