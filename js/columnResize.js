grid = document.getElementsByClassName('grid-container')[0];
firstItem = grid.children[0];
secondItem = grid.children[1];
thirdItem = grid.children[2];

if(window.matchMedia("(min-width: 768px)").matches){
    var itemTouch = (item) => {
        grid.style.transition = 'all 0.5s ease';
        if(item == firstItem)
            grid.style.gridTemplateColumns = '0.25fr 0.15fr 0.15fr';
        if(item == secondItem)
            grid.style.gridTemplateColumns = '0.15fr 0.25fr 0.15fr';
        if(item == thirdItem)
            grid.style.gridTemplateColumns = '0.15fr 0.15fr 0.25fr';
    }

    var standardGrid = () => {
        grid.style.gridTemplateColumns = '0.2fr 0.2fr 0.2fr';
    }
}
else{
    const items = [firstItem, secondItem, thirdItem];
    for (let i = 0; i < items.length; i++){
        items[i].removeAttribute("onmouseenter");
        items[i].removeAttribute("onmouseleave");
    }
}
