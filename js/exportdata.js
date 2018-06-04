
$(function(){


	$("#btnExport").click(function (e) {
		console.log('work')
    window.open('data:application/vnd.ms-excel,' + $('#dvData').html());
    e.preventDefault();
})
})

