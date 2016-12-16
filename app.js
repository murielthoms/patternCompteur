(function() {
	"use strict";
	var app = {
		defaultSeconds: 3600,
		totalSeconds: null,
		interval: null,
		
		

		init: function() {
			this.totalSeconds = this.defaultSeconds;
			this.listeners();
		},
		listeners: function(){
			$('#play').on('click', this.start.bind(this));
			$('#stop').on('click', this.stop.bind(this));
			$('#reset').on('click',this.reset.bind(this));
			$('#reinitialize').on('click',this.reinitialize.bind(this));

		},
		start: function(){
			this.stop();
			this.interval = setInterval(this.decrement.bind(this), 1000);

			
		},

		stop: function(){
			clearInterval(this.interval);
		},	

		reset: function(){
			this.totalSeconds = this.defaultSeconds;
			this.updateView();
			
		},

		addZero: function(nombre){
			if(nombre < 10 ) {
				nombre = '0' + nombre;
			}
			return nombre;

		},

		decrement: function(){
			this.totalSeconds --;
			this.updateView();
			this.progress();
			if(this.totalSeconds < 0){
				this.stop();

			}
		},

		updateView: function(){
			var hours = parseInt(this.totalSeconds / 3600, 10);
			var minutes = parseInt(this.totalSeconds % 3600 / 60, 10);
			var seconds = (this.totalSeconds % 3600 % 60);
			$('#hours').text(hours);
			$('#minutes').text(this.addZero(minutes));
			$('#seconds').text(this.addZero(seconds));
		},

		reinitialize: function(){

			this.stop();
			this.defaultSeconds = this.totalSeconds;
			var h = parseInt($('#inputHours').val(),10) || 0;
			var m = parseInt($('#inputMinutes').val(),10) || 0;
			var s = parseInt($('#inputSecondes').val(),10) || 0;
			this.totalSeconds = h * 3600 + m * 60 + s;
			this.updateView();
			this.start();
			this.progress()

		},
		

		progress:function(){

			var width = parseInt(this.totalSeconds * 100/this.defaultSeconds, 10);
			$("#bordure").css("width", width + "%");
			$("#chargement").text(width + "%");
			$("#chargement").css(width + "%");
			if (this.totalSeconds === 0){
				this.stop();
				
			}
			

		}, 
	};
	app.init();

})();






































