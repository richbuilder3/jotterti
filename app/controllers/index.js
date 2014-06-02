// function doClick(e) {
    // alert($.label.text);
// }

var myJots = Alloy.Collections.jots;

var jot = Alloy.createModel('jots',{
	title: '1st note',
	Date: '6/2/14',
	content: 'whatever'
});

function showJot(event){
	var selectedJot = event.source;
	var args = {
		title: selectedJot.title,
		Date: selectedJot.Date,
		content: selectedJot.content
	};
	var jotview = Alloy.createController("jotsinfo", args).getView();
	jotview.open();
}




myJots.add(jot);
jot.save();

$.index.open();
