sap.ui.define([
	"sap/ui/test/Opa5",
	"CGI/ReconResults/test/integration/arrangements/Arrangement",
	"CGI/ReconResults/test/integration/NavigationJourneyPhone",
	"CGI/ReconResults/test/integration/NotFoundJourneyPhone",
	"CGI/ReconResults/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "CGI.ReconResults.view.",
		autoWait: true
	});
});
