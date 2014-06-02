exports.definition = {
	config: {
		columns: {
		    "title": "string",
		    "Date": "text",
		    "content": "text"
		},
		adapter: {
			type: "sql",
			collection_name: "jots"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};