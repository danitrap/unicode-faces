var App = {
    initApplication: function () {
        $( '.face' ).on( 'touchstart', App.onFaceTouched );
    },
    onFaceTouched: function ( ev ) {
        ev.preventDefault();
        console.log( this.innerHTML + " face touched" );
        App.copyToClipboard( this.innerHTML );
        App.showCopied();
    },
    copyToClipboard: function ( face ) {
        try {
            cordova.plugins.clipboard.copy( face );
        }
        catch (err) {
            alert(err.message);
        }
    },
    showCopied: function () {
        $.mobile.loading( "show", {
            text: "Face copied to clipboard.",
            textVisible: true,
            theme: "b",
            textonly: true,
            html: ""
        });

        setTimeout( function () {
            $.mobile.loading( "hide" );
        }, 1000);
    }
};