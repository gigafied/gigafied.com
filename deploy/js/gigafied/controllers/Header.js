minion.define("gigafied.controllers", {
	
	require : [
		"gigafied.views.Header"
	],

	Header : minion.extend("minion.Class", {
		
		_view : null,

		init : function(){
			this.__super();
			this._view = new this.__imports.Header();

			this._view.bind("navClick", this.proxy(this._onNavClick));
		},

		_onNavClick : function (e) {
			this.publish("changePage", {href: e.href, pageClass: e.pageClass});
		}

	})
})