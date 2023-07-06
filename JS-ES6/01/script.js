function addMessage( elementId, message ) {
    var browserList = document.getElementById(elementId),
        newItem = document.createElement('li');

    newItem.textContent = message;
    browserList.appendChild(newItem);
}

addMessage('browser', 'page loaded, bitch');
addMessage('user', 'Ready user one'); 


document.body.addEventListener('click', function clickedIt() {
    addMessage('user', 'Clicked user one');
});

document.body.addEventListener('keypress', function keyboard(event) {
    var oldLeft = getComputedStyle(document.body).left,
        newLeft;

    oldLeft = parseInt(oldLeft, 10); // 50px -> 50

    // event.keyCoder 
    if (event.key == 'a') {
        newLeft = oldLeft - 10; // 40
        console.log('aaaaaaaaa');
    } else if (event.key == 'd') {
        newLeft = oldLeft + 10; // 60
    }

    document.body.style.left = newLeft + 'px';

});
