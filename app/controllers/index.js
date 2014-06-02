// function doClick(e) {
    // alert($.label.text);
// }

var myJots = Alloy.Collections.jots;

var jot = Alloy.createModel('jots',{
	title: '1st note',
	Date: '6/2/14',
	content: 'whatever'
});






myJots.add(jot);
jot.save();

$.index.open();
