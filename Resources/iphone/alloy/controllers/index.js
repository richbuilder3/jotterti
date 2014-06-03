function Controller() {
    function __alloyId9(e) {
        if (e && e.fromAdapter) return;
        __alloyId9.opts || {};
        var models = __alloyId8.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId7 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId5.__transform["title"] ? __alloyId5.__transform["title"] : __alloyId5.get("title"),
                Date: "undefined" != typeof __alloyId5.__transform["Date"] ? __alloyId5.__transform["Date"] : __alloyId5.get("Date"),
                content: "undefined" != typeof __alloyId5.__transform["content"] ? __alloyId5.__transform["content"] : __alloyId5.get("content")
            });
            rows.push(__alloyId7);
            showJot ? __alloyId7.addEventListener("click", showJot) : __defers["__alloyId7!click!showJot"] = true;
        }
        $.__views.__alloyId4.setData(rows);
    }
    function showJot(event) {
        var selectedJot = event.source;
        var args = {
            title: selectedJot.title,
            Date: selectedJot.Date,
            content: selectedJot.content
        };
        var jotview = Alloy.createController("jotsinfo", args).getView();
        $.navGroupWin.openWindow(jotview);
    }
    function addJot() {
        var myAddJot = Alloy.createController("addjot", {}).getView();
        $.navGroupWin.openWindow(myAddJot);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    Alloy.Collections.instance("jots");
    $.__views.__alloyId3 = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "__alloyId3"
    });
    $.__views.__alloyId4 = Ti.UI.createTableView({
        id: "__alloyId4"
    });
    $.__views.__alloyId3.add($.__views.__alloyId4);
    var __alloyId8 = Alloy.Collections["jots"] || jots;
    __alloyId8.on("fetch destroy change add remove reset", __alloyId9);
    var __alloyId12 = [];
    $.__views.add = Ti.UI.createButton({
        id: "add",
        title: "add jot"
    });
    __alloyId12.push($.__views.add);
    addJot ? $.__views.add.addEventListener("click", addJot) : __defers["$.__views.add!click!addJot"] = true;
    $.__views.__alloyId10 = Ti.UI.iOS.createToolbar({
        items: __alloyId12,
        bottom: "0",
        id: "__alloyId10"
    });
    $.__views.__alloyId3.add($.__views.__alloyId10);
    $.__views.navGroupWin = Ti.UI.iOS.createNavigationWindow({
        window: $.__views.__alloyId3,
        id: "navGroupWin"
    });
    $.__views.navGroupWin && $.addTopLevelView($.__views.navGroupWin);
    exports.destroy = function() {
        __alloyId8.off("fetch destroy change add remove reset", __alloyId9);
    };
    _.extend($, $.__views);
    var jot = Alloy.createModel("jots", {
        title: "1st note",
        Date: "6/2/14",
        content: "whatever"
    });
    var myJots = Alloy.Collections.jots;
    myJots.add(jot);
    jot.save();
    $.navGroupWin.open();
    __defers["__alloyId7!click!showJot"] && __alloyId7.addEventListener("click", showJot);
    __defers["$.__views.add!click!addJot"] && $.__views.add.addEventListener("click", addJot);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;