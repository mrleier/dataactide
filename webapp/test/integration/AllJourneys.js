// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 RESULTS in the list

sap.ui.define([
	"sap/ui/test/Opa5",
	"CGI/ReconResults/test/integration/arrangements/Arrangement","CGI/ReconResults/test/integration/MasterJourney",
	"CGI/ReconResults/test/integration/NavigationJourney",
	"CGI/ReconResults/test/integration/NotFoundJourney",
	"CGI/ReconResults/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "CGI.ReconResults.view.",
		autoWait: true
	});
});
