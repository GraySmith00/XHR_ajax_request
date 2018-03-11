var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    // xhr ready state status of 4 means the request is completed
    if (XHR.readyState == 4) {
        if (XHR.status == 200) {
            console.log(XHR.responseText);
        } else {
            console.log("There was an error");
        }
    }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
