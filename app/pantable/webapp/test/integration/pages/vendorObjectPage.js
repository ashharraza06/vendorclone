sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'pantable',
            componentId: 'vendorObjectPage',
            contextPath: '/vendor'
        },
        CustomPageDefinitions
    );
});