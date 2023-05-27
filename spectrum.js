function Spectrum(){
	this.name = "spectrum";

	this.draw = function(){
		var spectrum = fourier.analyze();
		push();
		noStroke();

		for (var i = 0; i< spectrum.length; i++){
			// define deminsions
			var y = map(i, 0, spectrum.length, 0, height);
			var w = width - map(spectrum[i], 0, 255, width, 0);
			
			// set colors
			var red = spectrum[i];
			var green = map(spectrum[i], 0, 255, 255, 0);
			fill(red, green, 0);
			
			// draw
			rect(0, y, w, width / spectrum.length);
		}

		pop();
	};
}
