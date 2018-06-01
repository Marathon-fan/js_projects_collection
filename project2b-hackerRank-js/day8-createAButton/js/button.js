//Please select any file from left to start editing.
function increaseByOne() {
    var b = document.getElementById('btn');
    var n = parseInt(b.innerHTML);
    n++;
    b.innerHTML=n.toString();    
}