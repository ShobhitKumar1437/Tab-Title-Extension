document.getElementById('getTitleButton').addEventListener('click',function() {
    chrome.tabs.query({active: true, currentWindow: true},function(tabs) {
        var currentTab = tabs[0];
        document.getElementById('titleDisplay').textContent = currentTab.title;
    });
});