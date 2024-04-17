//@ui5-bundle vendorcomplain/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"vendorcomplain/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","vendorcomplain/model/models"],function(e,i,t){"use strict";return e.extend("vendorcomplain.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(t.createDeviceModel(),"device")}})});
},
	"vendorcomplain/controller/App.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("vendorcomplain.controller.App",{onInit:function(){debugger;var e=this.getOwnerComponent().createComponent({usage:"reuseapp1",async:true,manifest:true});e.then(function(e){debugger;this.byId("container1").setComponent(e);this._customerDetailContainer=e}.bind(this))},editStepTwo:function(){debugger;var e=this.getOwnerComponent().createComponent({usage:"reuseapp2",async:true,manifest:true});e.then(function(e){debugger;this.byId("container2").setComponent(e);this._customerDetailContainer=e}.bind(this))}})});
},
	"vendorcomplain/i18n/i18n.properties":'# This is the resource bundle for vendorcomplain\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=vendorcomplain\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=vendorcomplain\n\nflpTitle=vendorcomplain\n',
	"vendorcomplain/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"vendorcomplain","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.13.0","toolsId":"95113d3b-ee9c-4344-b8a7-de4d2e0b47f3"},"dataSources":{"mainService":{"uri":"odata/v4/my/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"vendorcomplainsem-display":{"semanticObject":"vendorcomplainsem","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}},"components":{"pantable":{"lazy":false},"poheader":{"lazy":false}}},"componentUsages":{"reuseapp1":{"name":"pantable","settings":{}},"reuseapp2":{"name":"poheader","settings":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"vendorcomplain.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"vendorcomplain.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteApp","pattern":":?query:","target":["TargetApp"]}],"targets":{"TargetApp":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"App","viewName":"App"}}},"rootView":{"viewName":"vendorcomplain.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"complaintapp"}}',
	"vendorcomplain/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"vendorcomplain/view/App.view.xml":'<mvc:View controllerName="vendorcomplain.controller.App"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"\n    xmlns:core="sap.ui.core"><NavContainer\n        id="wizardNavContainer"\n        height="100vh"\n    ><pages><Page\n                id="wizardContentPage"\n                showHeader="false"\n            ><content><Wizard\n                        id="CreateProductWizard"\n                        class="height1"\n                        renderMode="Page"\n                       \n                    ><WizardStep\n                            id="ProductTypeStep"\n                            title="Product Type"\n                            validated="true"\n                        ><core:ComponentContainer\n                                id="container1"\n                                propagateModel="true"\n                                height="500px"\n                            /><MessageStrip\n                                id="demo"\n                                class="sapUiSmallMarginBottom"\n                                text="The Wizard control is supposed to break down large tasks, into smaller steps, easier for the user to work with."\n                                showIcon="true"\n                            /></WizardStep><WizardStep\n                            id="ProductInfoStep"\n                            validated="true"\n                            title="Product Information"\n                            activate="editStepTwo"\n                        ><core:ComponentContainer\n                                id="container2"\n                                propagateModel="true"\n                                height="500px"\n                            /></WizardStep><WizardStep\n                            id="OptionalInfoStep"\n                            validated="true"\n                            activate="optionalStepActivation"\n                            title="Optional Information"\n                        ><Text\n                                id="ddd3"\n                                text="Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien\tcorper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien\t"\n                            /></WizardStep><WizardStep\n                            id="PricingStep"\n                            activate="pricingActivate"\n                            complete="pricingComplete"\n                            validated="true"\n                            title="Pricing"\n                        ><Text\n                                id="dddd"\n                                text="Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien\tcorper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien\t"\n                            /></WizardStep></Wizard></content><footer><OverflowToolbar id="oflow1"><Button\n                            id="sss"\n                            text="Cancel"\n                            press="handleWizardCancel"\n                        /></OverflowToolbar></footer></Page></pages></NavContainer></mvc:View>\n'
}});