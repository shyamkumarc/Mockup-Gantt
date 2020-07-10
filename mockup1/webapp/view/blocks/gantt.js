sap.ui.define(['sap/uxap/BlockBase'], function (BlockBase) {
	"use strict";

	var gantt = BlockBase.extend("mockup1.mockup1.view.blocks.gantt", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "mockup1.mockup1.view.blocks.gantt",
					type: "XML"
				},
				Expanded: {
					viewName: "mockup1.mockup1.view.blocks.gantt",
					type: "XML"
				}
			}
		}
	});
	return gantt;
});
