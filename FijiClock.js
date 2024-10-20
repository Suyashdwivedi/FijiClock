// Originally from https://www.mediawiki.org/w/index.php?title=MediaWiki:Gadget-LocalLiveClock.js&action=raw&ctype=text/javascript
// Updated and customized by Suyash Dwivedi (https://meta.wikimedia.org/wiki/User:Suyash.dwivedi)

mw.loader.using(['mediawiki.util', 'mediawiki.api']).then(function () {
    var $target;

    function showTime($target) {
        var localDate = new Date();

        // Fetch Fiji timezone (Pacific/Fiji) and adjust for DST automatically
        var fijiTimezone = 'Pacific/Fiji';
        var fijiDate = new Date(localDate.toLocaleString("en-US", { timeZone: fijiTimezone }));

        var fijiHours = fijiDate.getHours() % 12 || 12; // 12-hour format
        var fijiMinutes = fijiDate.getMinutes().toString().padStart(2, "0");
        var fijiSeconds = fijiDate.getSeconds().toString().padStart(2, "0");
        var fijiAmPm = fijiDate.getHours() < 12 ? "AM" : "PM";

        var fijiTimeString = "Fiji Time - " + fijiHours + ":" + fijiMinutes + ":" + fijiSeconds + " " + fijiAmPm;

        $target.text(fijiTimeString);

        // Calculate the time remaining for the next second to keep the clock precise
        var ms = 1000 - fijiDate.getMilliseconds();

        setTimeout(function () {
            showTime($target);
        }, ms);
    }

    function liveClock() {
        mw.util.addCSS('#utcdate a { font-weight: bolder; font-size: 120%; }');

        if (!window.UTCLiveClockConfig) {
            UTCLiveClockConfig = {};
        }
        var portletId = UTCLiveClockConfig.portletId || 'p-personal';
        var nextNode = UTCLiveClockConfig.nextNodeId ? document.getElementById(UTCLiveClockConfig.nextNodeId) : undefined;
        var node = mw.util.addPortletLink(
            portletId,
            mw.util.getUrl(null, { action: 'purge' }),
            '',
            'utcdate',
            null,
            null,
            nextNode
        );
        if (!node) {
            return;
        }
        $(node).on('click', function (e) {
            new mw.Api().post({ action: 'purge', titles: mw.config.get('wgPageName') }).then(function () {
                location.reload();
            }, function () {
                mw.notify('Purge failed', { type: 'error' });
            });
            e.preventDefault();
        });

        showTime($(node).find('a:first'));
    }

    $(liveClock);
});
