function createListing() {
    var newEl = document.createElement('li');
    var newText = document.createTextNode(document.getElementById('listAdd').value);
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('ul')[0];
    position.appendChild(newEl);
    document.getElementById("listAdd").value = "";
}