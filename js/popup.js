var filter = document.getElementById("filter");
filter.onclick = popup;

function popup(){
    var url = "filter.html";
    var name = "필터";
    var option = "width = 800, height = 400, top = 200, left = 350, location = no"
    window.open(url, name, option);
}