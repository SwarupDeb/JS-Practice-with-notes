const clock = document.getElementById('clock');

setInterval(function() {
    let date = new Date();
     let time = date.toLocaleTimeString();
    let dateString = date.toLocaleDateString();
    clock.innerHTML = `${time}<br>${dateString}`;
}, 1000);
