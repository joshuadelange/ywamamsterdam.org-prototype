'use strict' ;

var $ = $,
	L = L,
	d3 = d3 ;

$(document).ready(function(){

	if($('#map').length > 0) {

		var map = L.map('map').setView([51.923943445544715, 5.1416015625], 7);

		L.tileLayer('http://{s}.tile.cloudmade.com/8E10386EF81C4270B374C76464C939C2/113231/256/{z}/{x}/{y}.png', {
			attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
			zoomControl: false
		}).addTo(map);

		map.touchZoom.disable();
		map.doubleClickZoom.disable();
		map.scrollWheelZoom.disable();
		map.boxZoom.disable();

		var data = {'type': 'FeatureCollection', 'crs': { 'type': 'name',  'properties': { 'name': 'urn:ogc:def:crs:OGC:1.3:CRS84' } }, 'features': [{ 'type': 'Feature',  'properties': { 'Name': 'Gebedshuis\ Dominioncentre',  'Description': 'Ellermanstraat 30,  1099 BZ Amsterdam,  Nederland <a href=\'http:\/\/www.embassyamsterdam.nl\/contact\/contact-a-route\'>http:\/\/www.embassyamsterdam.nl\/contact\/contact-a-route<\/a>' },  'geometry': { 'type': 'MultiPoint',  'coordinates': [ [ 4.931421,  52.326743,  0.0 ] ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Gebedsketen Nijmegen',  'Description': '<br>Huis van Gebed Nijmegen<\/br> <p>gebedsketen voor de stad Nijmegen<\/p> <a href=\'http:\/\/www.24-7site.com\/index.php?&amp;language=NL&amp;page_id=5&amp;location=Nijmegen%20\' target=\'_blank\'>Website<\/a>' },  'geometry': { 'type': 'MultiPoint',  'coordinates': [ [ 5.854622,  51.842867,  0.0 ] ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Gebedshuis Amersfoort',  'Description': 'info: arjan.krijtenburg@gmail.com' },  'geometry': { 'type': 'MultiPoint',  'coordinates': [ [ 5.387827,  52.156111,  0.0 ] ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Gebedshuis Elburg',  'Description': '<BR>Gebouw \'Rehoboth\' <BR> Bloemstraat 18,  Elburg <BR><a href=\'http:\/\/www.huisvangebed-elburg.nl\/content\/2011\/11\/rooster-van-gebedsactiviteiten\'>http:\/\/www.huisvangebed-elburg.nl\/content\/2011\/11\/rooster-van-gebedsactiviteiten <\/a>' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.834491,  52.447263,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Drachten',  'Description': '<BR>Oosterstraat 35<BR> Drachten<BR> <\/br> Openingtijden,  zie<\/br> http:\/\/www.huisvangebeddrachten.nl\/index.php\/gebedsroosterdrachten' },  'geometry': { 'type': 'Point',  'coordinates': [ 6.101342,  53.107803,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Gebedswinkel',  'Description': 'Rijnstraat 77,  <br\/> 3441 Woerden <br\/>' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.886141,  52.085646,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Franeker',  'Description': '<\/br> Professor Holwardastraat 21<BR> 8801 Franeker<BR> <\/br> Open: Elke dinsdag van 13.00 tot 17.00 uur.<\/br> e-mail: cdtamminga@ziggo.nl' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.545195,  53.190646,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Ede',  'Description': 'Website: http:\/\/www.24-7ede.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.666667,  52.043611,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed Venlo',  'Description': '<br\/>Kaldenkerkerweg 29<br\/> 5913 AB Venlo' },  'geometry': { 'type': 'Point',  'coordinates': [ 6.174891,  51.363364,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed Nunspeet',  'Description': '<br\/>Secr. Mulderweg 18<br\/> 8071 VS Nunspeet <br\/> http:\/\/www.huisvangebed.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.784418,  52.381347,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed Katwijk',  'Description': '<br>Prins Hendrikkade 11a<br\/> 2225 TZ Katwijk <br> http:\/\/www.gebedkatwijk.nl\/gebedshuiskatwijk.html' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.406803,  52.205398,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed Heerde',  'Description': '<br>Zwarteweg 10<br\/> 8181 PD Heerde' },  'geometry': { 'type': 'Point',  'coordinates': [ 6.014201,  52.375113,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Daniel',  'Description': '<br\/>Zilverstraat 23<br\/> 2544 EJ Den Haag <br\/>' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.259158,  52.050894,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed \'Domino\'',  'Description': '<br\/>Willem Barentzstraat 9<br\/> 3572 PA Utrecht<br\/>' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.141204,  52.096134,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed Zandvoort',  'Description': 'Huis van gebed Zandvoort <br\/>J.G. Metzgerstraat 124 <br\/> 2041 HS  Zandvoort<br\/> http:\/\/www.gebedzandvoort.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.528255,  52.374208333333328,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed Elim',  'Description': '<br\/>Huis van gebed Elim<br\/> Tulpstraat 58  3071 Rotterdam <br\/> http:\/\/www.elimrotterdam.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.496071,  51.913322,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'De Tent - Houten',  'Description': '<br\/>Boekweitoord 48<br\/> 3991 XW Houten <br\/> http:\/\/www.houten.24-7gebed.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.15797,  52.031014,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Ermelo',  'Description': '<br\/>Stationstraat 20<br\/> 3881  Ermelo <br\/> Voor meer info: http:\/\/www.ermelo.24-7gebed.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.629619,  52.298666,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van gebed \'Samen bidden\'',  'Description': 'Groningerstraat 36  8921 TR Leeuwarden <br\/> Wil je meebidden? Kijk dan hier voor het rooster.  <br\/> http:\/\/www.24-7site.com\/index.php?&language=NL&page_id=5&location=leeuwarden' },  'geometry': { 'type': 'Point',  'coordinates': [ 5.804614000048314,  53.208162000042009,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Twente',  'Description': 'Kappelhofsweg 14A <br\/> Delden<br\/> Wil je meebidden? Kijk dan hier voor informatie en het rooster. http:\/\/www.huisvangebedtwente.nl' },  'geometry': { 'type': 'Point',  'coordinates': [ 6.664701202512005,  52.260887322734767,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'The Tabernacle of the Nations',  'Description': 'Gebedshuis \'The Tabernacle of the Nations\' <br> Amsterdam <br> Voor meer informatie kun je surfen naar: http:\/\/www.tabernacle.nl\/' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.898893,  52.374063,  0.0 ] } }, { 'type': 'Feature',  'properties': { 'Name': 'Huis van Gebed Oosterhout',  'Description': '<\/br> Hoevestraat 12\/71 <BR> 4903 RR Oosterhout <BR> <\/br> Openingtijden,  zie<\/br> http:\/\/www.huisvangebed-desjofar.nl' },  'geometry': { 'type': 'Point',  'coordinates': [ 4.860892,  51.606912,  0.0 ] } }]} ;

		L.geoJson(data, {
			// style: function (feature) {
			// 	// return {color: feature.properties.color};
			// },
			onEachFeature: function (feature, layer) {
				console.log(feature) ;
				layer.bindPopup(feature.properties.Description.replace('<br>', ''));
			}
		}).addTo(map);

	}

	var gutenbergEnabled = $('#gutenbergstats').length > 0 ;
	if(gutenbergEnabled) {

		var $wrap = $('#gutenbergstats'),
			startFixed = $wrap.offset().top,

			numOfColumns = 9,
			lists = [],
			stats = {} ;

		$.getJSON('https://spreadsheets.google.com/feeds/cells/0ApT5f0KS7hjVdEh5Z0dkVXlJWFFPYWl3b2lZYl83OVE/od6/public/basic?alt=json-in-script&callback=?', function(data){

			//first transform this data into an usable object
			$.each(data.feed.entry, function(index, value){

				var columnIndex = index % numOfColumns ;

				if(lists[columnIndex] === undefined){
					lists[columnIndex] = [] ;
				}

				lists[columnIndex].push(value.content.$t) ;

			}) ;

			$.each(lists, function(index, value){
				stats[value.shift().replace(/ /g, '_').toLowerCase()] = value ;
			}) ;

			data = [];
			$.each(stats.year, function(index, value){
				data[index] = {
					translations: parseInt(stats.bible_translations[index], 10),
					year: parseInt(value, 10)
				} ;
			}) ;

			console.log(data) ;

			var margin = {top: 50, right: 50, bottom: 50, left: 50},
				width = window.innerWidth - margin.left - margin.right,
				height = 600 - margin.top - margin.bottom;

			var x = d3.scale.linear()
				.range([0, width]);

			var y = d3.scale.linear()
				.range([height, 0]);

			var xAxis = d3.svg.axis()
				.scale(x)
				.orient('bottom');

			var yAxis = d3.svg.axis()
				.scale(y)
				.orient('left');

			var line = d3.svg.line()
				.interpolate("basis")
				.x(function(d) { return x(d.year); })
				.y(function(d) { return y(d.translations); });

			var svg = d3.select('#gutenbergcanvas').append('svg')
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom)
				.append('g')
				.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

			x.domain(d3.extent(data, function(d) { return d.year; }));
			y.domain(d3.extent(data, function(d) { return d.translations; }));

			svg.append('g')
				.attr('class', 'x axis')
				.attr('transform', 'translate(0,' + height + ')')
				.call(xAxis);

			svg.append('g')
				.attr('class', 'y axis')
				.call(yAxis)
				.append('text')
				.attr('transform', 'rotate(-90)')
				.attr('y', 6)
				.attr('dy', '.71em')
				.attr('class', 'translations')
				.style('text-anchor', 'end')
				.text('Number of bible translations');

			svg.append('path')
				.datum(data)
				.attr('class', 'line translations')
				.attr('d', line);

		});

		$(window).scroll(function(){

			var scrollPosition = $(document).scrollTop() ;

			if(gutenbergEnabled) {

				// console.log(startFixed, stopFixed, scrollPosition) ;

				if(scrollPosition > startFixed) {
					$wrap.css({
						'position': 'fixed',
						'top': 0,
						'left': 0,
						'bottom': 0
					}) ;
					$wrap.next('section').css({
						'marginTop': 0
					}) ;
				}
				else {
					$wrap.attr('style', '') ;
					$wrap.next('section').css({
						'marginTop': -950
					}) ;
				}

			}
			/*
			var headerHeight = 720,
				scrollTop = $(document).scrollTop(),
				opacity = (700 / scrollTop) / 10,
				marginTop = 20 - scrollTop,
				reverseOpacity = 0.95 - opacity ;

			if(reverseOpacity === -Infinity) {
			  reverseOpacity = 0;
			}

			if(marginTop > 0){
			  $('.top').css('marginTop', 20 - scrollTop + 'px') ;
			}
			else {
			  $('.top').css('marginTop', 0 + 'px') ;
			}

			if(opacity > 0) {

			  $('.top').css('backgroundColor', 'rgba(247, 247, 247, ' + reverseOpacity + ')') ;
			  $('.top').css('borderBottomColor', 'rgba(226, 226, 226, ' + reverseOpacity + ')') ;

			  if(opacity > 0.45) {
				$('.top nav ul li a').removeClass('with-white-bg') ;
			  }
			  else {
				$('.top nav ul li a').addClass('with-white-bg') ;
			  }

			}
			*/

		}) ;
	
	}

	$('video').bind('playing', function(){
		$(this).show() ;
		$(this).parent().find('img').remove() ;
	});

	$('.slideshow').click(function(ev){

		var $this = $(this),
			center = window.innerWidth / 2,
			imageWidth = $this.find('img').css('width') ;

		if(ev.pageX > center) {
			//go backward
			$this.find('.image-wrapper').animate({marginLeft: '-=' + imageWidth}) ;
		}
		else {
			//go forward
			$this.find('.image-wrapper').animate({marginLeft: '+=' + imageWidth}) ;
		}

	}) ;

	$('.timeline a.marker').click(function(){

		var $this = $(this),
			$timeline = $this.closest('.timeline'),
			id = $this.data('jump-to'),
			slideIndex = $timeline.find('#' + id).index(),
			slideWidth = parseInt($timeline.find('.slide:first-of-type').css('width'), 10),
			cursorLeft = parseInt($this.css('left'), 10),
			nextMargin = (slideIndex * slideWidth) * -1 ;

		$timeline.find('.cursor').animate({left: cursorLeft}) ;
		$timeline.find('.slides').animate({marginLeft: nextMargin}) ;

	}) ;

	$('.timeline .slide').click(function(ev){

		var $this = $(this) ;

		if($this.get(0).tagName !== 'A') {

			var center = window.innerWidth / 2,
				$slide = $(this).closest('.slide'),
				slideWidth = parseInt($slide.css('width'), 10),
				$slides = $this.closest('.slides'),
				numOfSlides = $slides.find('.slide').length,
				currentMargin = parseInt($slides.css('marginLeft'), 10),
				nextMargin = currentMargin,
				maxMargin = (numOfSlides * slideWidth) * -1,

			//cursor stuff
			id = $slide.attr('id'),
			$timeline = $(this).closest('.timeline'),
			$marker = $timeline.find('[data-jump-to="' + id + '"]'),
			$nextMarker = $marker ;

			if(ev.pageX > center) {
				//go forward
				$nextMarker = $marker.next() ;
				nextMargin = currentMargin - slideWidth ;
			}
			else {
				//go backward
				$nextMarker = $marker.prev() ;
				nextMargin = currentMargin + slideWidth ;
			}

			var cursorLeft = $nextMarker.css('left') ;

			$timeline.find('.cursor').animate({left: cursorLeft}) ;

			if(nextMargin <= 0 && nextMargin > maxMargin) {
				$this.closest('.slides').animate({marginLeft: nextMargin}) ;
			}

		}

	}) ;

}) ;