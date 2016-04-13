
var ractive = new Ractive({
	// The `el` option can be a node, an ID, or a CSS selector.
	el: '#progress-bar',

	// We could pass in a string, but for the sake of convenience
	// we're passing the ID of the <script> tag above.
	template: '#template',

	// Here, we're passing in some initial data
	data: { 
		name: 'Scott',
		progressBar: [
			{id: 'pb-1', name: 'Progress bar 1', value: 25, over: false},
			{id: 'pb-2', name: 'Progress bar 2', value: 50, over: false},
			{id: 'pb-3', name: 'Progress bar 3', value: 75, over: false}
		]
	}
});

ractive.on( 'changeValue', function ( event, val ) {
	
	for (var i=0; i<ractive.get('progressBar').length; i++) {

		if (ractive.get('progressBar')[i].id == ractive.get('selectedProgressBar')) {

			var currentValue = ractive.get('progressBar')[i].value;
			var newValue = ractive.get('progressBar')[i].value + val;
			
			if (newValue < 0){
				newValue = 0; 
			}

			ractive.set('progressBar[' + i + '].over', (newValue > 100 ? true : false));
			ractive.set('progressBar[' + i + '].value', newValue);
			
		}
	}
});