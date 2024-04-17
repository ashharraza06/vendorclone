sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'poheader/test/integration/FirstJourney',
		'poheader/test/integration/pages/poheaderList',
		'poheader/test/integration/pages/poheaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, poheaderList, poheaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('poheader') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepoheaderList: poheaderList,
					onThepoheaderObjectPage: poheaderObjectPage
                }
            },
            opaJourney.run
        );
    }
);