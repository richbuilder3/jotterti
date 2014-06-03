// function doClick(e) {
    // alert($.label.text);
// }



var jot = Alloy.createModel('jots',{
	title: '1st note',
	Date: '6/2/14',
	content: 'whatever'
});

var myJots = Alloy.Collections.jots;

function showJot(event){
	var selectedJot = event.source;
	var args = {
		title: selectedJot.title,
		Date: selectedJot.Date,
		content: selectedJot.content
	};
	var jotview = Alloy.createController("jotsinfo", args).getView();
	{$.navGroupWin.openWindow(jotview);}
}

function addJot(){ 
	var myAddJot =
 Alloy.createController("addjot", {}).getView(); if (OS_IOS)
 {$.navGroupWin.openWindow(myAddJot);} if (OS_ANDROID) {myAddJot.open();
 }}


myJots.add(jot);
jot.save();

$.navGroupWin.open();
// $.index.open();
