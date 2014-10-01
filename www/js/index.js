var App = {
    initApplication: function () {
        $('.face').click(App.onFaceTouch);
    },
    onFaceTouch: function (ev) {
        ev.preventDefault();
        console.log(this.innerHTML + " face touched");
        App.copyToClipboard(this.innerHTML);
        App.showCopied();
    },
    copyToClipboard: function (face) {
        cordova.plugins.clipboard.copy(face);
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

$(document).one('deviceready', App.initApplication);
$(document).ready(App.initApplication);