// (case1) クリックした座標を機転にnewDivを作成

// let i = 1;

// document.getElementById('calendar').addEventListener('click', function(e) {
//     let newDiv = document.createElement('div');
//     newDiv.innerHTML = 'new event';
//     newDiv.classList.add('events');

    
//     let id = "new-event-";

//     newDiv.setAttribute("id", id + i);
//     let mouseX = e.clientX;
//     let mouseY = e.clientY;

//     newDiv.style.top = mouseY + 'px';
//     newDiv.style.left = mouseX + 'px';

//     i++;
//     document.getElementById('calendar').appendChild(newDiv);

// });

// -----------------------------------------------------------------

//  (case2) 重なるdivを浮かす

//yusukeさん修正コード
function onShadow(element) {
    if (element.classList.contains('shadow')) {
        element.classList.remove('shadow')
    } else {
        element.classList.add('shadow')        
    }
}

document.getElementById('calendar-table').addEventListener('click', function(e) {
    
    let eventDiv = document.getElementById('new-event-1');
    eventDiv.classList.remove('shadow');
});


// 自分のコード
// let divStatus = false;

// $(document).on("click", function(e) {
//     let eventDiv = document.getElementById('new-event-1');
//     if (!$(e.target).closest('#new-event-1').length) {
//         eventDiv.classList.remove('shadow');
//         divStatus = false;
//     } else {
//         if(!(divStatus)) {
//             eventDiv.classList.add('shadow');
//             divStatus = true;
//         } else {
//             eventDiv.classList.remove('shadow');
//             divStatus = false;
//         }
//     }
//     console.log(divStatus);
// });






// if (!(divStatus)) {
//     document.getElementById('new-event-1').addEventListener('click', function() {
//         let eventDiv = document.getElementById('new-event-1');
//         divStatus = true;
//         eventDiv.classList.add('shadow');
//     });
// } else {
//     document.getElementById('calendar').addEventListener('click', function() {
//         let eventDiv = document.getElementById('new-event-1');
//         divStatus = false;
//         eventDiv.classList.remove('shadow');
//     });
// }


// document.getElementById('new-event-1').addEventListener('click', function() {
//     let eventDiv = document.getElementById('new-event-1');
//     eventDiv.classList.add('shadow');
// })

// document.getElementById('new-event-1').addEventListener('dblclick',function() {
//     let eventDiv = document.getElementById('new-event-1');
//     eventDiv.classList.remove('shadow');
// })

// document.getElementById('calendar').addEventListener('click', function(e) {
//     let mouseX = e.clientX;
//     let mouseY = e.clientY;
//     console.log(`${mouseX}, ${mouseY}`);
//     document.getElementById('new-event-1').style.top = mouseY + 'px';
//     document.getElementById('new-event-1').style.left = mouseX + 'px';
//     document.getElementById('new-event-1').style.backgroundColor = 'Red';
// });

// document.getElementById('new-event-1').addEventListener('mousedown', function(e) {
//     // document.getElementById('new-event-1').addEventListener('mouseup')
//     document.getElementById('new-event-1').style.backgroundColor='Yellow';
//     let mouseX = e.clientX;
//     let mouseY = e.clientY;
//     console.log(`${mouseX}, ${mouseY}`);
//     document.getElementById('new-event-1').style.top = mouseY + 'px';
//     document.getElementById('new-event-1').style.left = mouseX + 'px';
// })
