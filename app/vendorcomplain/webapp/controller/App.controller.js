sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("vendorcomplain.controller.App", {
            onInit: function () {
                debugger
                // this._handleNavigationToStep(1);
                var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
                    usage: "reuseapp1", async: true, manifest: true
                });
                ocustomerDetailContainer.then(
                    function (ocustomerDetail) {
                        debugger
                        this.byId("container1").setComponent(ocustomerDetail);
                        this._customerDetailContainer = ocustomerDetail;
                    }.bind(this)
                );

            },
            editStepTwo:function(){
                debugger
                // this._handleNavigationToStep(1);
                var ocustomerDetailContainer = this.getOwnerComponent().createComponent({
                    usage: "reuseapp2", async: true, manifest: true
                });
                ocustomerDetailContainer.then(
                    function (ocustomerDetail) {
                        debugger
                        this.byId("container2").setComponent(ocustomerDetail);
                        this._customerDetailContainer = ocustomerDetail;
                    }.bind(this)
                );
                
            }
        });
    });
