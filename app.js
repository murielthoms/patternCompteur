(function() {
	app = {
		default: 3600,
		totalSeconds: null,
		interval: null,

		init: function() {
			app.totalSeconds = app.default;
			app.listeners();
		},
		listeners: function(){
			$('#play').on('click', app.start);
			$('#stop').on('click', app.stop);
			$('#reset').on('click',app.reset);

		},
		start: function(){
			clearInterval(app.interval);
			app.interval = setInterval(app.decrement, 1000);
		},

		stop: function(){
			clearInterval(app.interval);
		},	

		reset: function(){
			app.totalSeconds = app.default;
			app.updateView();
			
		},

		addZero: function(nombre){
			if(nombre < 10 ) {
				nombre = '0' + nombre;
			}
			return nombre;

		},

		decrement: function(){
			app.totalSeconds --;
			app.updateView();

			if(app.totalSeconds < 0){
				clearInterval(interval);
			}
		},

		updateView: function(){
			var hours = parseInt(app.totalSeconds / 3600, 10);
			var minutes = parseInt(app.totalSeconds % 3600 / 60);
			var seconds = (app.totalSeconds % 3600 % 60);
			$('#hours').text(hours , app.addZero());
			$('#minutes').text(minutes, app.addZero());
			$('#seconds').text(seconds, app.addZero());
		},
	};
	app.init();

})();