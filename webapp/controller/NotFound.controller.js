sap.ui.define([
	"CGI/ReconResults/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("CGI.ReconResults.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
