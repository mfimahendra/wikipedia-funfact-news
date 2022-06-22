setInterval(headerTime, 1000);

function headerTime() {
    const date = new Date();
    $("#header").html(date.toLocaleTimeString());
}