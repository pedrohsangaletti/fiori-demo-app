/*global QUnit*/

sap.ui.define([
	"st/businesspartners/controller/SuppliersTest.controller"
], function (Controller) {
	"use strict";

	QUnit.module("SuppliersTest Controller");

	QUnit.test("I should test the SuppliersTest controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
