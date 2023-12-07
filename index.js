var runbtn = document.getElementById("run-btn");
runbtn.onclick = function(){
    var code = document.getElementById("code").value;
    var result = document.getElementById("output");
    result.innerHTML = code;
}