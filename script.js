function loadData() {
    // create a new re
    const xhr = new XMLHttpRequest();

    // what to do when response arrives
    xhr.onload = function () {
        const container = document.getElementById('demo');
        container.innerHTML = xhr.responseText;
    };

    // prepare request 
    xhr.open('GET', './data.txt');

    // send request
    xhr.send();
}