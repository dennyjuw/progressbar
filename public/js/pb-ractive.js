
var ractive = new Ractive({
	// The `el` option can be a node, an ID, or a CSS selector.
	el: '#progress-bar',

	// We could pass in a string, but for the sake of convenience
	// we're passing the ID of the <script> tag above.
	template: '#template',

	// Here, we're passing in some initial data
	data: { 
		name: 'world',
		progress1: 25,
		progress2: 50,
		progress3: 75,
		progressBar: [
			{id: 'pb-1', name: 'Progress bar 1'},
			{id: 'pb-2', name: 'Progress bar 2'},
			{id: 'pb-3', name: 'Progress bar 3'}
		]
	}
});