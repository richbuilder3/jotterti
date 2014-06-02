function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jotinfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.jotinfo = Ti.UI.createWindow({
        id: "jotinfo"
    });
    $.__views.jotinfo && $.addTopLevelView($.__views.jotinfo);
    $.__views.titlelabel = Ti.UI.createLabel({
        id: "titlelabel"
    });
    $.__views.jotinfo.add($.__views.titlelabel);
    $.__views.DateLabel = Ti.UI.createLabel({
        id: "DateLabel"
    });
    $.__views.jotinfo.add($.__views.DateLabel);
    $.__views.contentLabel = Ti.UI.createLabel({
        id: "contentLabel"
    });
    $.__views.jotinfo.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;