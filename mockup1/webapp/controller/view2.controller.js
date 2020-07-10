sap.ui.define([
	"sap/ui/core/mvc/Controller","sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("mockup1.mockup1.controller.view2", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf mockup1.mockup1.view.view2
		 */
		onInit: function () {
			var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("RouteView1");
			this.byId("link").setHref(sUrl);
		},
		onBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

			//The history contains a previous entry
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				// There is no history!
				// replace the current hash with page 1 (will not add an history entry)
				this.getOwnerComponent().getRouter().navTo("RouteView1", null, true);
			}
		}

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf mockup1.mockup1.view.view2
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf mockup1.mockup1.view.view2
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf mockup1.mockup1.view.view2
		 */
		//	onExit: function() {
		//
		//	}

	});

});