function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Notesinfo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Notesinfo = Ti.UI.createWindow({
        backgroundColor: "blue",
        id: "Notesinfo"
    });
    $.__views.Notesinfo && $.addTopLevelView($.__views.Notesinfo);
    $.__views.titlelabel = Ti.UI.createLabel({
        id: "titlelabel"
    });
    $.__views.Notesinfo.add($.__views.titlelabel);
    $.__views.DateLabel = Ti.UI.createLabel({
        id: "DateLabel"
    });
    $.__views.Notesinfo.add($.__views.DateLabel);
    $.__views.contentLabel = Ti.UI.createLabel({
        id: "contentLabel"
    });
    $.__views.Notesinfo.add($.__views.contentLabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.titleLabel.text = args.title || "Default Title";
    $.authorLabel.text = args.author || "Default date";
    $.contenLabel.text = args.author || "Default content";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;