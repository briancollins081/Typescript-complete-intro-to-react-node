"use strict";
var logged;
var beanBag = "pot";
function sendAnalytics(data) {
    console.log(data);
    logged = true;
}
function add(n1, n2) {
    if (n1 + n2 > 0) {
        return n1 + n2;
    }
    return;
}
sendAnalytics("Data analutics HERE!");
