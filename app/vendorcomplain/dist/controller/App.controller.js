sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("vendorcomplain.controller.App",{onInit:function(){debugger;var e=this.getOwnerComponent().createComponent({usage:"reuseapp1",async:true,manifest:true});e.then(function(e){debugger;this.byId("container1").setComponent(e);this._customerDetailContainer=e}.bind(this))},editStepTwo:function(){debugger;var e=this.getOwnerComponent().createComponent({usage:"reuseapp2",async:true,manifest:true});e.then(function(e){debugger;this.byId("container2").setComponent(e);this._customerDetailContainer=e}.bind(this))}})});