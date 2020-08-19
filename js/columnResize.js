grid = document.getElementsByClassName('grid-container');
firstItem = grid[0].children[0];
secondItem = grid[0].children[1];
thirdItem = grid[0].children[2];

const itemTouch = (item) => {
    grid[0].style.transition = 'grid-template-columns 0.5s ease';
    if(item == firstItem)
        grid[0].style.gridTemplateColumns = '0.25fr 0.15fr 0.15fr';
    if(item == secondItem)
        grid[0].style.gridTemplateColumns = '0.15fr 0.25fr 0.15fr';
    if(item == thirdItem)
        grid[0].style.gridTemplateColumns = '0.15fr 0.15fr 0.25fr';
}

const standardGrid = () => {
    grid[0].style.gridTemplateColumns = '0.2fr 0.2fr 0.2fr';
}
