sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("MenuItem.controller.View1", {
		onInit: function() {
			this.byId("openMenu").attachBrowserEvent("tab keyup", function(oEvent) {
				this._bKeyboard = oEvent.type === "keyup";
			}, this);
		},
		//vasanth 1 2
		
		//again 1
		
		//shashi 1 2
		
		//again 1
		
		handlePressOpenMenu: function(oEvent) {
			var oButton = oEvent.getSource();
			if (!this._menu) {
				this._menu = new sap.ui.unified.Menu();
				this._menu.addItem(new sap.ui.unified.MenuItem({text: "Hello", enabled: false}));
				this._menu.addItem(new sap.ui.unified.MenuItem({text: "Hello1", enabled: true}));
			}

			var eDock = sap.ui.core.Popup.Dock;
			this._menu.open(this._bKeyboard, oButton, eDock.BeginTop, eDock.BeginBottom, oButton);
		}
	});
});
