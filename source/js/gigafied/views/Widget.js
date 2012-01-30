// Requires jQuery
minion.define("gigafied.views", {

	Widget: minion.extend("minion.Class", {
		
		methodsDefined: false,
		domObj : null,

		init : function(domObj){
			this.domObj = domObj;

			var proto = this.constructor.prototype;
			if(!proto.methodsDefined){
				for(var prop in this.domObj){
					if(!proto[prop]){
						if(typeof this.domObj[prop] === "function"){
							proto[prop] = this.getDOMFunc(prop);
						}
						
						else{
							proto[prop] = this.domObj[prop];
						}
					}
				}
				proto.methodsDefined = true;
			}
		},		
		
		getDOMFunc : function(method){
			return function(){
				if(arguments[0] && arguments[0] instanceof (minion.get("gigafied.views.Widget"))){
					arguments[0] = arguments[0].domObj;
				}

				return this.domObj[method].apply(this.domObj, Array.prototype.slice.call(arguments));
			}
		}
	})
});
