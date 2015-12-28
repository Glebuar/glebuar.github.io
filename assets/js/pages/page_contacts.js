var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 50.510868,
				lng: 30.615451
			  });
			  
			  var marker = map.addMarker({
				lat: 50.510868,
				lng: 30.615451,
	            title: 'Company, Inc.'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
		        lat : 50.510868,
		        lng : 30.615451
		      });
		    });
		}        

    };
}();