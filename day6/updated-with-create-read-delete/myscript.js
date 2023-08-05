function editfun(elm){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/edit",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("uid="+elm.getAttribute("data-userid"));
}
function deletefun(elm){
    let xhr = new XMLHttpRequest();
    xhr.open("POST","/delete",true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("uid="+elm.getAttribute("data-userid"));
}
