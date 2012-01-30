minion.define("gigafied.views", {
	
	Header : minion.extend("gigafied.views.Widget", {
		
		_aTags : null,

		init : function () {
			this.__super($("#container > header"));

			this._aTags = this.find("nav>ul>li>a");

			this._aTags.bind("click", this.proxy(this._onNavClick));
		},

		_onNavClick : function (e) {
			e.preventDefault();
			var targ = $(e.target);

			this.trigger({
				type: "navClick", 
				href: targ.attr("href"),
				pageClass : targ.data("pageClass")
			});
		}

	})
})