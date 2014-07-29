(function(){
    if (! new Array().push) return false;
    var scripts = new Array(
      'Metro-UI-CSS/js/metro-accordion.js',
      'Metro-UI-CSS/js/metro-button-set.js',
      'Metro-UI-CSS/js/metro-calendar.js',
      'Metro-UI-CSS/js/metro-carousel.js',
      'Metro-UI-CSS/js/metro-core.js',
      'Metro-UI-CSS/js/metro-countdown.js',
      'Metro-UI-CSS/js/metro-date-format.js',
      'Metro-UI-CSS/js/metro-datepicker.js',
      'Metro-UI-CSS/js/metro-dialog.js',
      'Metro-UI-CSS/js/metro-drag-tile.js',
      'Metro-UI-CSS/js/metro-dropdown.js',
      'Metro-UI-CSS/js/metro-fluentmenu.js',
      'Metro-UI-CSS/js/metro-global.js',
      'Metro-UI-CSS/js/metro-hint.js',
      'Metro-UI-CSS/js/metro-initiator.js',
      'Metro-UI-CSS/js/metro-input-control.js',
      'Metro-UI-CSS/js/metro-listview.js',
      'Metro-UI-CSS/js/metro-live-tile.js',
      'Metro-UI-CSS/js/metro-loader.js',
      'Metro-UI-CSS/js/metro-locale.js',
      'Metro-UI-CSS/js/metro-notify.js',
      'Metro-UI-CSS/js/metro-panel.js',
      'Metro-UI-CSS/js/metro-plugin-template.js',
      'Metro-UI-CSS/js/metro-progressbar.js',
      'Metro-UI-CSS/js/metro-rating.js',
      'Metro-UI-CSS/js/metro-scroll.js',
      'Metro-UI-CSS/js/metro-slider.js',
      'Metro-UI-CSS/js/metro-stepper.js',
      'Metro-UI-CSS/js/metro-streamer.js',
      'Metro-UI-CSS/js/metro-tab-control.js',
      'Metro-UI-CSS/js/metro-table.js',
      'Metro-UI-CSS/js/metro-tile-transform.js',
      'Metro-UI-CSS/js/metro-times.js',
      'Metro-UI-CSS/js/metro-touch-handler.js',
      'Metro-UI-CSS/js/metro-treeview.js',
      'Metro-UI-CSS/js/metro-wizard.js'
    );
  for (var i=0; i<scripts.length; i++) {
    document.write('<script type="text/javascript" src="' +scripts[i] +'"></script>');
  }
})();