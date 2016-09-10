var coordinateElement = $("a.edit-cache-coordinates > strong > span");
var currentText = coordinateElement.text();
// TODO: Find a service suitable for open source that supports https
var elevationServiceUrl = "http://www.datasciencetoolkit.org/coordinates2statistics/37.769456%2c-122.429128?statistics=elevation";

//jQuery.getJSON(elevationServiceUrl, function(data){
	//coordinateElement.text(currentText + " (" + data.statistics.elevation.value + " " + data.statistics.elevation.units + ")")
//});

coordinateElement.text(currentText + " (elevation would be seen here)")

