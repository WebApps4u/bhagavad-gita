chrome.app.runtime.onLaunched.addListener(function() {
  runApp();
});

chrome.app.runtime.onRestarted.addListener(function() {
  runApp();
});

function runApp() {
  chrome.app.window.create('main.html', {
  	id: "browserWinID",
    bounds: {
      'width': 1024,
      'height': 768
    },
    frame: 'chrome'
  });
}