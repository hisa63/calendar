// document.getElementById('calendar').addEventListener('click', function(e) {
//     let mouseX = e.clientX;
//     let mouseY = e.clientY;
    
//     const newdiv = document.createElement('div');
//     newdiv.innerHTML = 'new event';

//     let i = 1;
//     let id = "new-event-";

//     newdiv.classList.add(id + i);
//     i++;
//     newdiv.style.top = mouseY;
//     newdiv.style.left = mouseX;
//     document.getElementById('calendar').appendChild(newdiv);
// });




document.getElementById('calendar').addEventListener('click', function(e) {
    const newdiv = document.createElement('div');
    newdiv.innerHTML = 'new event';

    let i = 1;
    let id = "new-event-";

    newdiv.setAttribute("id", id + i);
    i++;
    document.getElementById('calendar').appendChild(newdiv);
});