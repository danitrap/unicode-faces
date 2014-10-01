var App = {
    initApplication: function () {
        $( '.face' ).on( 'touchstart', App.onFaceTouched );
    },
    onFaceTouched: function ( ev ) {
        ev.preventDefault();
        var face = this.innerHTML;
        console.log( face + " face touched" );
        App.copyToClipboard( face );
        App.showCopied( face );
    },
    copyToClipboard: function ( face ) {
        try {
            window.plugins.clipboard.copy( face );
        }
        catch (err) {
            alert(err.message);
        }
    },
    showCopied: function (face) {
        $.mobile.loading( "show", {
            text: face + " copied to clipboard.",
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