sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'pantable/test/integration/FirstJourney',
		'pantable/test/integration/pages/vendorList',
		'pantable/test/integration/pages/vendorObjectPage'
    ],
    function(JourneyRunner, opaJourney, vendorList, vendorObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('pantable') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThevendorList: vendorList,
					onThevendorObjectPage: vendorObjectPage
                }
            },
            opaJourney.run
        );
    }
);