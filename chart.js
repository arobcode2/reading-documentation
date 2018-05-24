// Your code here!
var chart = c3.generate({
	bindto: '#chart',
	data: {
		columns: data,		
		type : 'pie',
		colors: {
			sleep: '#121a38',
			eat: '#520293',
			code: '#ef0e02',
			other: '#12c105',
			relax: '#f7f304' 
		},
	},
	pie: {
		label: {
			format: function(value, ratio, id) {
				return d3.format('')(value) + ' hours';
			}
		}
	}
});

