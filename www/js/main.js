
requirejs.config({
  //  baseUrl: 'js',
     paths: {
         _: '../bower_components/underscore/underscore-min'
     },
     shim: {
         _: { exports: '_' }
     }
});

var app = {
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        requirejs(['game']);
    }
};

app.initialize();
