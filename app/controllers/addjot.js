
var myJots = Alloy.Collections.jots;

function addJot() {
	var jot = Alloy.createModel('jots',{
		title : $.titleInput.value,
		Date : $.DateInput.value,
		content : $.contentInput.value
	});
	myJots.add(jot);
	jot.save();
	$.addjot.close();
}