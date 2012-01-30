minion.define("gigafied.controllers.pages", {
	
	Page : minion.extend("minion.Class", {
		
		_view : null,

		init : function (href) {

			if(!href){
				this._initPage();
			}
			else{
				
			}
			
		},

		_initPage : function () {

			minion.require("gigafied.views.pages." + this.__class, function (ViewClass) {
				this._view = new ViewClass();
			});
		}

	})
})