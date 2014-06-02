function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = __alloyId6.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["title"] ? __alloyId3.__transform["title"] : __alloyId3.get("title"),
                Date: "undefined" != typeof __alloyId3.__transform["Date"] ? __alloyId3.__transform["Date"] : __alloyId3.get("Date"),
                content: "undefined" != typeof __alloyId3.__transform["content"] ? __alloyId3.__transform["content"] : __alloyId3.get("content")
            });
            rows.push(__alloyId5);
            showJot ? __alloyId5.addEventListener("click", showJot) : __defers["__alloyId5!click!showJot"] = true;
        }
        $.__views.__alloyId2.setData(rows);
    }
    function showJot(event) {
        var selectedJot = event.source;
        var args = {
            title: selectedJot.title,
            Date: selectedJot.Date,
            content: selectedJot.content
        };
        var jotview = Alloy.createController("jotsinfo", args).getView();
        jotview.open();
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
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.index.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["jots"] || jots;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var myJots = Alloy.Collections.jots;
    var jot = Alloy.createModel("jots", {
        title: "1st note",
        Date: "6/2/14",
        content: "whatever"
    });
    myJots.add(jot);
    jot.save();
    $.index.open();
    __defers["__alloyId5!click!showJot"] && __alloyId5.addEventListener("click", showJot);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;