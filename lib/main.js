require('sdk/page-mod').PageMod({
  include: ["*"],
  attachTo: ["existing", "top"],
  contentStyleFile: require('sdk/self').data.url('injected.css'),
  onAttach: function(worker) {
    console.log('attached');
  }
});

