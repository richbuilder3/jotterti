exports.definition = {
    config: {
        columns: {
            title: "string",
            Date: "text",
            content: "text"
        },
        adapter: {
            type: "sql",
            collection_name: "jots"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("jots", exports.definition, []);

collection = Alloy.C("jots", exports.definition, model);

exports.Model = model;

exports.Collection = collection;