document.getElementById('calendar').addEventListener('click', function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    
    const newdiv = document.createElement('div');
    newdiv.innerHTML = 'new event';

    let i = 1;
    let id = "new-event-";

    newdiv.classList.add(id + i);
    i++;
    document.getElementById('calendar').appendChild(newdiv);
});

document.getElementsByClassName('new-event-1').addEventListener('click', function() {
    let event = document.getElementsByClassName('new-event-1');

    event[0].style.backgroundColor=red;
});