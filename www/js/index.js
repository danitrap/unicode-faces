var App = {
    initApplication: function () {
        $( '.faces' ).on( 'touchstart', App.onFaceTouched );
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
        $.getJSON( "http://commentizer.altervista.org/faces.json",
                   App.populateFaces,
                   function(jqXHR, text_status, strError) { alert(strError) } );

    },
    populateFaces: function ( data ) {
        var faces = $( ".faces" );
        faces.empty();
        $.each(data, function (index, face) {
            faces.append(
                $( "<li></li>" )
                    .addClass("face")
                    .html(face)
            );
        });
    }
};