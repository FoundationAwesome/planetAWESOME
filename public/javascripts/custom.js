// document.onload = function() {

mason = function () {
	var elem = document.querySelector('.masonry');
		var msnry = new Masonry( elem, {
	    // options
	    itemSelector: '.box',
	    //columnWidth: 300,
	    isFitWidth: !0,
	  })
	imagesLoaded( elem, function( instance ) {
	  console.log('all images are loaded');
	  var msnry = new Masonry( elem, {
	    // options
	    itemSelector: '.box',
	    //columnWidth: 300,
	    isFitWidth: !0,


	    // isAnimated: 1,
	    // animationOptions: {
	    //     queue: !1,
	    //     duration: 500
	    // },
	    // gutterWidth: 0,
	    // isRTL: !1,
	    // isFitWidth: !1,
	    // containerStyle: {
	    //     position: "relative"
	    // }
	  })
	})
}

mason()


// }

// element argument can be a selector string
//   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });