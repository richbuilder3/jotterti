function Controller() {
    function addJot() {
        var jot = Alloy.createModel("jots", {
            title: $.titleInput.value,
            Date: $.DateInput.value,
            content: $.contentInput.value
        });
        myJots.add(jot);
        jot.save();
        $.addjot.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addjot";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addjot = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "addjot"
    });
    $.__views.addjot && $.addTopLevelView($.__views.addjot);
    $.__views.__alloyId0 = Ti.UI.createView({
        layout: "vertical",
        id: "__alloyId0"
    });
    $.__views.addjot.add($.__views.__alloyId0);
    $.__views.titleInput = Ti.UI.createTextField({
        id: "titleInput",
        hintText: "Title..."
    });
    $.__views.__alloyId0.add($.__views.titleInput);
    $.__views.DateInput = Ti.UI.createTextField({
        id: "DateInput",
        hintText: "Date..."
    });
    $.__views.__alloyId0.add($.__views.DateInput);
    $.__views.contentInput = Ti.UI.createTextField({
        id: "contentInput",
        hintText: "Note Info..."
    });
    $.__views.__alloyId0.add($.__views.contentInput);
    $.__views.insertJotButton = Ti.UI.createButton({
        title: "Add Jot",
        id: "insertJotButton"
    });
    $.__views.__alloyId0.add($.__views.insertJotButton);
    addJot ? $.__views.insertJotButton.addEventListener("click", addJot) : __defers["$.__views.insertJotButton!click!addJot"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var myJots = Alloy.Collections.jots;
    __defers["$.__views.insertJotButton!click!addJot"] && $.__views.insertJotButton.addEventListener("click", addJot);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;