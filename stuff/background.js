/* Event: Runs when extension is installed */
chrome.runtime.onInstalled.addListener(function() {

  // Set which URL the extension can run on
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'bitcoinhero.me' }
        }),
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});
