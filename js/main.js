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
		name: 'Minneapolis',
		pop: 400070
	}
];


function createTable() {
	//create a table
	$('#mydiv').append('<table id=\'cityTable\'>');

	//add column headers
	$('#cityTable').append('<tr><th>City<th>Population');

	//iterate through the city data array to print each name and population
	for(var i = 0; i < cityData.length; i++) {
		$('#cityTable').append('<tr><td>' + cityData[i].name + '<td>' + cityData[i].pop)
	};
}

//function to add a new column defining city size to the table
function addColumns(cityPop){
    
    //iterate through each element in cityPop
    $('tr').each(function(i){

    	//column header is printed on first iteration
    	if (i == 0){

    		$(this).append('<th>City Size</th>');

    	//determine the size of the city and print it 
    	} else {

    		var citySize;

    		if (cityPop[i-1].pop < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].pop < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//function to add color and text alert to the table
function addEvents(){

	//when mousing over the table, change the text to a random color
	$('#cityTable').mouseover(function(){
		
		var color = "rgb(";

		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			};
		};
		$(this).css('color', color);

	});

	//if clicking on table, use an alert box
	function clickme(){

		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
}; 



//send a request to the server for the data
function jQueryAjax() {

	$.ajax('../data/MegaCities.geojson', {dataType: 'json', success: callback});

};

//handle the returned data
function callback(response) {

	var returnedData = response;
	console.log(returnedData);
};


function initialize()  {

	createTable();
	addColumns(cityData);
	addEvents();
	jQueryAjax();
	debugAjax();

}


//initilize the functions when the document is ready
$(document).ready(initialize);

//cannot access the callback data outside of the callback function
console.log(returnedData);


//handles the data received from the server by appending it to the div
function debugCallback(response){
	
	$('#mydiv').append('GeoJSON data: ' + JSON.stringify(response));
};

//sends a request to the server for the json data
function debugAjax(){
	
	$.ajax("../data/MegaCities.geojson", {dataType: "json", success: debugCallback});

};

