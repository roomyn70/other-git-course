var myInterval = setInterval(fun, 100);

function fun() {
    var d = new Date();
    document.getElementById('timer').innerHTML = d.toLocaleTimeString();
}
