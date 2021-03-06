var App = {
    initApplication: function () {
        $( '.faces' ).on( 'touchstart', '.face', App.onFaceTouched );
        App.downloadFaces();
    },
    onFaceTouched: function ( ev ) {
        ev.preventDefault();
        var face = ev.target.innerHTML;
        console.log( face + " face touched" );
        App.copyToClipboard( face );
        App.showCopied( face );
    },
    copyToClipboard: function ( face ) {
        try {
            window.plugins.clipboard.copy( face );
        }
        catch (err) {
            console.log(err.message);
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
        }, 1000 );
    },
    downloadFaces: function () {
        $.ajax({
            url: "http://commentizer.altervista.org/faces.json", // http://commentizer.altervista.org/
            cache: false,
            dataType: "json",
            success: App.populateFaces
        });

    },
    populateFaces: function ( data ) {
        var faces = $( ".faces" );
        faces.empty();
        $.each( data, function ( index, face ) {
            faces.append(
                $( "<li></li>" )
                    .addClass( "face" )
                    .html( face )
            );
        });
    }
};