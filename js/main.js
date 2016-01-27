/* Calla Little, 2016 */

//create list of objects to hold city data
var cityData = [
	{
		name: 'Telluride',
		pop: 2319
	},

	{
		name: 'Campton',
		pop: 429
	},

	{
		name: 'Bessemer',
		pop: 1835
	},

	{
		name: 'Minneapolis'
		pop: 400070
	}
];

//create a table
$('#mydiv').append('<table id=\'cityTable\'>');

//add column headers
$('#cityTable').append('<tr><th>City<th>Population');
