let counter = 1;
function callback() {
    const el = document.querySelectorAll("h4")[1]
    el.innerHTML = counter;
    counter  = counter + 1;
}
setInterval(callback,1000);