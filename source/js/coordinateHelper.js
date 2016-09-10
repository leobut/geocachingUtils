function getDdFromDms(input){
	// input must be the same as on geocaching.com
	// example: N 47° 30.159 E 008° 43.187
	var convert = function(direction, degrees, minutes, seconds){
		degrees = parseFloat(degrees);
		minutes = parseFloat(minutes);
		seconds = parseFloat(seconds); // seconds are already in decimal


		var dd = degrees + minutes/60 + seconds/60;

	    if (direction == "S" || direction == "W") {
	        dd = dd * -1;
	    } // Don't do anything for N or E
	    return dd;
	};

	var parts = input.split(/[.\s°]+/);
    var lat = convert(parts[0], parts[1], parts[2], "0."+parts[3]);
    var long = convert(parts[4], parts[5], parts[6], "0."+parts[7]);
    var result = lat + "," + long;
    var expected = "47.502650,8.719783";
    console.log(result);
    console.log(expected);

	return result;
}