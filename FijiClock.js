//Originally from https://www.mediawiki.org/w/index.php?title=MediaWiki:Gadget-LocalLiveClock.js&action=raw&ctype=text/javascript
// https://hif.wikipedia.org/wiki/sadasya:Suyash.dwivedi/FijiClock.js
mw.loader.using(['mediawiki.util', 'mediawiki.api']).then( function () {
var $target;

function showTime( $target ) {
////////////////
   var fijiOffset = 6.50; // Fiji is UTC+12 or +6 hrs 30 min (6.50 hrs) form India
   var localDate = new Date();
   var fijiDate = new Date(localDate.getTime() + (fijiOffset * 60 * 60 * 1000));

   var fijiHours = fijiDate.getHours() % 12 || 12; // Display 12-hour format
   var fijiMinutes = fijiDate.getMinutes().toString().padStart(2, "0");
   var fijiSeconds = fijiDate.getSeconds().toString().padStart(2, "0");

   var fijiAmPm = fijiDate.getHours() < 12 ? "AM" : "PM";

  var fijiTimeString =  "Fiji Time - " + fijiHours + ":" + fijiMinutes + ":" + fijiSeconds + " " + fijiAmPm;
///////////////
	$target.text( fijiTimeString );


	var ms = localDate.getUTCMilliseconds();

	setTimeout( function () {
		showTime( $target );
	}, 1100 - ms );
}

function liveClock() {
	mw.util.addCSS( '#utcdate a { font-weight:bolder; font-size:120%; }' );

	if ( !window.UTCLiveClockConfig ) {
		UTCLiveClockConfig = {};
	}
	var portletId = UTCLiveClockConfig.portletId || 'p-personal';
	var nextNode = UTCLiveClockConfig.nextNodeId ? document.getElementById( UTCLiveClockConfig.nextNodeId ) : undefined;
	var node = mw.util.addPortletLink(
		portletId,
		mw.util.getUrl( null, { action: 'purge' } ),
		'',
		'utcdate',
		null,
		null,
		nextNode
	);
	if ( !node ) {
		return;
	}
	$( node ).on( 'click', function ( e ) {
		new mw.Api().post( { action: 'purge', titles: mw.config.get( 'wgPageName' ) } ).then( function () {
			location.reload();
		}, function () {
			mw.notify( 'Purge failed', { type: 'error' } );
		} );
		e.preventDefault();
	} );

	showTime( $( node ).find( 'a:first' ) );
}

$( liveClock );
} );
