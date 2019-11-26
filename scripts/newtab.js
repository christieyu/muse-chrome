console.log("outside newtab.js");

chrome.storage.sync.get(['username'], function(result) {
    $("#newtabusername").text('Hello, ' + result.username + '!');
});

chrome.storage.sync.get(['themebackground1'], function(result) {
	let root = document.documentElement;
    root.style.setProperty('--main-bg-color', result.themebackground1);
    console.log("background theme 1 set: " + result.themebackground1);
});

chrome.storage.sync.get(['themebackground2'], function(result) {
	let root = document.documentElement;
    root.style.setProperty('--second-bg-color', result.themebackground2);
    console.log("background theme 2 set: " + result.themebackground2);
});

chrome.storage.sync.get(['themeborder'], function(result) {
	let root = document.documentElement;
    root.style.setProperty('--border-color', result.themeborder);
    console.log("border color set: " + result.themeborder);
});

chrome.storage.sync.get(['themefont'], function(result) {
	let root = document.documentElement;
    root.style.setProperty('--main-font', result.themefont);
    console.log("font set: " + result.themefont);
});

chrome.storage.sync.get(['themefontcolor'], function(result) {
	let root = document.documentElement;
    root.style.setProperty('--main-font-color', result.themefontcolor);
    console.log("font color set: " + result.themefontcolor);
});

chrome.storage.sync.get(['link1', 'text1'], function(result) {
    if (result.link1 !== "" && result.text1 !== "") {
        var link1 = result.link1;
        link1 = link1.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link1: " + link1);
        var text1 = result.text1;
        console.log("text1: " + text1);
        $("#bookmarks").append('<a href="https://' + link1 + '">' + text1 + '</a><br>')
    }
});

chrome.storage.sync.get(['link2', 'text2'], function(result) {
    if (result.link2 !== "" && result.text2 !== "") {
        var link2 = result.link2;
        link2 = link2.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link2: " + link2);
        var text2 = result.text2;
        console.log("text2: " + text2);
        $("#bookmarks").append('<a href="https://' + link2 + '">' + text2 + '</a><br>')
    }
});

chrome.storage.sync.get(['link3', 'text3'], function(result) {
    if (result.link3 !== "" && result.text3 !== "") {
        var link3 = result.link3;
        link3 = link3.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link3: " + link3);
        var text3 = result.text3;
        console.log("text3: " + text3);
        $("#bookmarks").append('<a href="https://' + link3 + '">' + text3 + '</a><br>')
    }
});

chrome.storage.sync.get(['link4', 'text4'], function(result) {
    if (result.link4 !== "" && result.text4 !== "") {
        var link4 = result.link4;
        link4 = link4.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link4: " + link4);
        var text4 = result.text4;
        console.log("text4: " + text4);
        $("#bookmarks").append('<a href="https://' + link4 + '">' + text4 + '</a><br>')
    }
});

chrome.storage.sync.get(['link5', 'text5'], function(result) {
    if (result.link5 !== "" && result.text5 !== "") {
        var link5 = result.link5;
        link5 = link5.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link5: " + link5);
        var text5 = result.text5;
        console.log("text5: " + text5);
        $("#bookmarks").append('<a href="https://' + link5 + '">' + text5 + '</a><br>')
    }
});

chrome.storage.sync.get(['link6', 'text6'], function(result) {
    if (result.link6 !== "" && result.text6 !== "") {
        var link6 = result.link6;
        link6 = link6.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link6: " + link6);
        var text6 = result.text6;
        console.log("text6: " + text6);
        $("#bookmarks").append('<a href="https://' + link6 + '">' + text6 + '</a><br>')
    }
});

chrome.storage.sync.get(['link7', 'text7'], function(result) {
    if (result.link7 !== "" && result.text7 !== "") {
        var link7 = result.link7;
        link7 = link7.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link7: " + link7);
        var text7 = result.text7;
        console.log("text7: " + text7);
        $("#bookmarks").append('<a href="https://' + link7 + '">' + text7 + '</a><br>')
    }
});


chrome.storage.sync.get(['link8', 'text8'], function(result) {
    if (result.link8 !== "" && result.text8 !== "") {
        var link8 = result.link8;
        link8 = link8.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link8: " + link8);
        var text8 = result.text8;
        console.log("text8: " + text8);
        $("#bookmarks").append('<a href="https://' + link8 + '">' + text8 + '</a><br>')
    }
});

chrome.storage.sync.get(['link9', 'text9'], function(result) {
    if (result.link9 !== "" && result.text9 !== "") {
        var link9 = result.link9;
        link9 = link9.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link9: " + link9);
        var text9 = result.text9;
        console.log("text9: " + text9);
        $("#bookmarks").append('<a href="https://' + link9 + '">' + text9 + '</a><br>')
    }
});

chrome.storage.sync.get(['link10', 'text10'], function(result) {
    if (result.link10 !== "" && result.text10 !== "") {
        var link10 = result.link10;
        link10 = link10.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]; // from https://stackoverflow.com/questions/41942690/removing-http-or-http-and-www/41942787
        console.log("link10: " + link10);
        var text10 = result.text10;
        console.log("text10: " + text10);
        $("#bookmarks").append('<a href="https://' + link10 + '">' + text10 + '</a><br>')
    }
});

chrome.storage.sync.get(['notes'], function(result) {
    $("#notes").text(result.notes);
});