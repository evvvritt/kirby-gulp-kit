(function() {
  var app;

  app = {};

  app.module = function() {
    return $(function() {
      return console.log('loaded');
    });
  };

  app.init = function() {
    return app.module();
  };

  $(function() {
    return app.init();
  });

}).call(this);
