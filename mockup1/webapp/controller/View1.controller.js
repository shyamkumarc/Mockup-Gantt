sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/gantt/misc/Format",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
], function (Controller, JSONModel, Format, MessageToast, Fragment) {
	"use strict";

	return Controller.extend("mockup1.mockup1.controller.View1", {
		onInit: function () {
			var oModel = new JSONModel("model/Clothing.json");
			this.getView().setModel(oModel);
			var visible = new JSONModel({
				State: true
			});
			this.getView().setModel(visible, "visible");
			var data = {
				"root": {
					"children": [{
						"id": "line1",
						"text": "Level 1",
						"task": [{
							"id": "rectangle1",
							"startTime": "20181101090000",
							"endTime": "20181127090000"
						}],
						"children": [{
							"id": "line2",
							"text": "Level 2",
							"subtask": [{
								"id": "chevron1",
								"startTime": "20181101090000",
								"endTime": "20181113090000"
							}, {
								"id": "chevron2",
								"startTime": "20181115090000",
								"endTime": "20181127090000"
							}]
						}]
					}, {
						"id": "line3",
						"text": "Level 1",
						"task": [{
							"id": "rectangle1",
							"startTime": "20181101090000",
							"endTime": "20181127090000"
						}],
						"children": [{
							"id": "line4",
							"text": "Level 2",
							"subtask": [{
								"id": "chevron1",
								"startTime": "20181101090000",
								"endTime": "20181113090000"
							}, {
								"id": "chevron2",
								"startTime": "20181115090000",
								"endTime": "20181127090000"
							}]
						}]
					}, {
						"id": "line4",
						"text": "Level 1",
						"task": [{
							"id": "rectangle1",
							"startTime": "20181101090000",
							"endTime": "20181127090000"
						}],
						"children": [{
							"id": "line5",
							"text": "Level 2",
							"subtask": [{
								"id": "chevron1",
								"startTime": "20181101090000",
								"endTime": "20181113090000"
							}, {
								"id": "chevron2",
								"startTime": "20181115090000",
								"endTime": "20181127090000"
							}]
						}]
					}]
				}
			};

			var cardData = {
				"pages": [{
					"pageId": "bankPage",
					"header": "Company info",
					"title": "SAP Bank",
					"icon": "sap-icon://building",
					"description": "The bank of SAP",
					"groups": [{
						"heading": "Office",
						"elements": [{
							"label": "Phone",
							"value": "+001 6101 34869-0",
							"elementType": "phone"
						}, {
							"label": "Address",
							"value": "550 Larkin Street, 4F, Mountain View, CA, 94102 San Francisco USA",
							"elementType": "text"
						}]
					}, {
						"heading": "Contacts",
						"elements": [{
							"label": "Name",
							"value": "Johnny Cash",
							"elementType": "pageLink",
							"pageLinkId": "contactPage"
						}, {
							"label": "Name",
							"value": "James Bonus",
							"elementType": "pageLink",
							"pageLinkId": "contactPage"
						}, {
							"label": "Name",
							"value": "Maria Leasing",
							"elementType": "pageLink",
							"pageLinkId": "contactPage"
						}, {
							"label": "Name",
							"value": "Claudia Credit",
							"elementType": "pageLink",
							"pageLinkId": "contactPage"
						}]
					}]
				}, {
					"pageId": "contactPage"
				}]
			};
			var employeeData = {
				"Johnny Cash": {
					"pageId": "contactPage",
					"header": "Employee Info",
					"title": "Johnny Cash",
					"icon": "sap-icon://person-placeholder",
					"description": "Department Manager",
					"groups": [{
						"heading": "Contact Info",
						"elements": [{
							"label": "Address",
							"value": "550 Larkin Street, 4F, Mountain View, CA, 94102 San Francisco USA",
							"elementType": "text"
						}, {
							"label": "Email",
							"value": "johnny.cash@sapbank.com",
							"emailSubject": "Give me cash",
							"elementType": "email"
						}, {
							"label": "Phone",
							"value": "+359 888 888 888",
							"elementType": "phone"
						}]
					}, {
						"heading": "Additional Info",
						"elements": [{
							"label": "Major",
							"value": "Cash operations",
							"elementType": "text"
						}]
					}]
				},
				"James Bonus": {
					"pageId": "contactPage",
					"header": "Employee Info",
					"title": "James Bonus",
					"icon": "sap-icon://person-placeholder",
					"description": "Department Manager",
					"groups": [{
						"heading": "Contact Info",
						"elements": [{
							"label": "Address",
							"value": "550 Larkin Street, 4F, Mountain View, CA, 94102 San Francisco USA",
							"elementType": "text"
						}, {
							"label": "Email",
							"value": "james.bonus@sapbank.com",
							"emailSubject": "Bonus interest",
							"elementType": "email"
						}, {
							"label": "Phone",
							"value": "+359 777 777 777",
							"elementType": "phone"
						}]
					}, {
						"heading": "Additional Info",
						"elements": [{
							"label": "Major",
							"value": "Bonuses for loyal customers",
							"elementType": "text"
						}]
					}]
				},
				"Maria Leasing": {
					"pageId": "contactPage",
					"header": "Employee Info",
					"title": "Maria Leasing",
					"icon": "sap-icon://person-placeholder",
					"description": "Department Manager",
					"groups": [{
						"heading": "Contact Info",
						"elements": [{
							"label": "Address",
							"value": "550 Larkin Street, 4F, Mountain View, CA, 94102 San Francisco USA",
							"elementType": "text"
						}, {
							"label": "Email",
							"value": "maria.leasing@sapbank.com",
							"emailSubject": "Leasing",
							"elementType": "email"
						}, {
							"label": "Phone",
							"value": "+359 555 555 555",
							"elementType": "phone"
						}]
					}, {
						"heading": "Additional Info",
						"elements": [{
							"label": "Major",
							"value": "Financial leasing",
							"elementType": "text"
						}]
					}]
				},
				"Claudia Credit": {
					"pageId": "contactPage",
					"header": "Employee Info",
					"title": "Claudia Credit",
					"icon": "sap-icon://person-placeholder",
					"description": "Department Manager",
					"groups": [{
						"heading": "Contact Info",
						"elements": [{
							"label": "Address",
							"value": "550 Larkin Street, 4F, Mountain View, CA, 94102 San Francisco USA",
							"elementType": "text"
						}, {
							"label": "Email",
							"value": "claudia.credit@sapbank.com",
							"emailSubject": "Credit",
							"elementType": "email"
						}, {
							"label": "Phone",
							"value": "+359 666 666 666",
							"elementType": "phone"
						}]
					}, {
						"heading": "Additional Info",
						"elements": [{
							"label": "Major",
							"value": "Real estate & investment credits",
							"elementType": "text"
						}]
					}]
				}
			};

			// load JSON sample data
			var oCardData = new JSONModel(cardData),
				oEmployeeData = new JSONModel(employeeData);

			var oModelG = new JSONModel(data);
			this.getView().setModel(oModelG, "modelG");
			this.byId("gantt").setModel(oModelG);
			this.byId("gantt2").setModel(oModelG);
			this.getView()
				.setModel(oCardData, "CardModel")
				.setModel(oEmployeeData, "EmployeeModel");
		},

		onCollapseAll: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapseAll();
		},
		onPressTable: function () {
			// var oTreeTable = this.byId("TreeTableBasic");
			// oTreeTable.collapseAll();
			// this.byId("DynamicSideContent").getShowSideContent();
			this.byId("DynamicSideContent").setShowSideContent(!this.byId("DynamicSideContent").getShowSideContent());
			this.getView().getModel("visible").setProperty("/State", !this.getView().getModel("visible").getProperty("/State"));
		},
		onCollapseSelection: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.collapse(oTreeTable.getSelectedIndices());
		},

		onExpandFirstLevel: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expandToLevel(1);
		},

		onExpandSelection: function () {
			var oTreeTable = this.byId("TreeTableBasic");
			oTreeTable.expand(oTreeTable.getSelectedIndices());
		},
		fnTimeConverter: function (sTimestamp) {
			return Format.abapTimestampToDate(sTimestamp);
		},
		onPressTreeTable: function (oEvent) {
			// var oView = this.getView();
			var oModel = this.getView().getModel("CardModel");

			if (!this._oQuickView) {
				Fragment.load({
					name: "mockup1.mockup1.view.fragments.tableclick",
					controller: this
				}).then(function (oQuickView) {
					this._oQuickView = oQuickView;
					this.getView().addDependent(this._oQuickView);
					this._oQuickView.setModel(oModel);
					this._oQuickView.openBy(oEvent.getParameters("cellControl").cellControl);
				}.bind(this));
			} else {
				this._oQuickView.setModel(oModel);
				this._oQuickView.openBy(oEvent.getParameters("cellControl").cellControl);
			}
		},
		onPressTreeTable2: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("RouteView2");

		}
	});
});