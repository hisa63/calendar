document.getElementById('calendar').addEventListener('click', function(e) {
    let mouseX = e.clientX;
    let mouseY = e.clientY;
    // window.alert(mouseX + ":" + mouseY);
    
    const newdiv = document.createElement('div');
    newdiv.innerHTML = 'new event';
    document.getElementById('calendar').appendChild(newdiv);
});
