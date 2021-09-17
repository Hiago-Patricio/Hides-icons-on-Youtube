function hideTitleAndButtons() {
    let title = document.getElementsByClassName('ytp-title')[0];
    title.hidden = !title.hidden;
    
    let buttons = document.getElementsByClassName('ytp-chrome-bottom')[0];
    buttons.hidden = !buttons.hidden;
}

chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        function: hideTitleAndButtons
    })
});

