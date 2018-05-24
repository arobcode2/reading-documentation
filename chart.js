// Your code here!
var chart = c3.generate({
	bindto: '#chart',
	data: {
		columns: data,		
		type : 'pie'
	}
});

