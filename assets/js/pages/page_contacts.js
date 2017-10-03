var ContactPage = function () {

    return {
        
    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				scrollwheel: false,				
				lat: 50.471988,
				lng: 30.483731
			  });
			  
			  var marker = map.addMarker({
				lat: 50.471988,
				lng: 30.483731,
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
		        lat : 50.471988,
		        lng : 30.483731
		      });
		    });
		}        

    };
}();
