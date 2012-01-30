minion.define("gigafied.controllers", {
	
	require : [
		"gigafied.controllers.Header"
	],

	Site : minion.extend("minion.Singleton", {
		
		_headerController : null,
		_currentPage : null,
		
		init : function(){
			this.subscribe("changePage", this._handleChangePage);
			$(document).ready(this.proxy(this.onReady));			
		},

		changePage : function (pageClass, href){
			minion.require(pageClass, this.proxy(function(PageClass){
				this._currentPage = new PageClass(href);
			}));
		},

		onReady : function () {
			var body = $("body");
			// Use `attr("data-page-class")` if < jQuery 1.6
			var pageClass = body.data("pageClass");
			
			if(pageClass){
				this.changePage(this.__nsID + ".pages." + pageClass);
			}

			this._headerController = new this.__imports.Header();
		},

		_handleChangePage : function (n) {

			if(this._currentPage.__class !== n.data.pageClass){
				this.changePage(n.data.pageClass, n.data.href);
			}

		}

	})
})