function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "jotsinfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.jotsinfo = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "jotsinfo"
    });
    $.__views.jotsinfo && $.addTopLevelView($.__views.jotsinfo);
    $.__views.titleLabel = Ti.UI.createLabel({
        id: "titleLabel"
    });
    $.__views.jotsinfo.add($.__views.titleLabel);
    $.__views.DateLabel = Ti.UI.createLabel({
        id: "DateLabel"
    });
    $.__views.jotsinfo.add($.__views.DateLabel);
    $.__views.contentLabel = Ti.UI.createLabel({
        id: "contentLabel"
    });
    $.__views.jotsinfo.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title || "Default Title";
    $.DateLabel.text = args.Date || "Default Date";
    $.contentLabel.text = args.content || "Default Content";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;