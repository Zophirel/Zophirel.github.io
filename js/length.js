const getLength = (test) => {
    var textWidth = (test.offsetWidth + 1) + "px";
    var underline = document.getElementById("underline");
    underline.style.width = textWidth;
    for(let i = 0; i < 3; i++){
        if(test.parentNode.children[i] != test)
            test.parentNode.children[i].style.color = "#afaeb5";
        else
            test.style.color = "black";
    }
    if(test.parentNode.children[0] == test)
        underline.style.left = -17 + "em";
    if(test.parentNode.children[1] == test)
        underline.style.left = 0.7 + "em";
    if(test.parentNode.children[2] == test)
        underline.style.left = 17.7 + "em"; 
}
