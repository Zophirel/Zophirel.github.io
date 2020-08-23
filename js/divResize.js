container = document.getElementsByClassName("container")[0];

first = document.getElementById("firstBlock");
second = document.getElementById("secondBlock");
third = document.getElementById("thirdBlock");

firstText = document.getElementsByClassName('btext')[0];
secondText = document.getElementsByClassName('btext')[1];
thirdText = document.getElementsByClassName('btext')[2];

const btnCss = document.getElementsByClassName('btn');
btn = [btnCss[0], 
       btnCss[1],
       btnCss[2]];

console.log(btn[0]);

if(window.matchMedia("(min-width: 768px)").matches){
    var itemTouch = (item) => {
        if(item == first){
            first.style.flexBasis = "30vw";
            second.style.flexBasis = "15vw";
            third.style.flexBasis = "15vw";

            firstText.style.marginLeft = "60px";
            secondText.style.margin = "0";
            thirdText.style.margin = "0";
            
            btn[0].style.transition = "opacity 1s ease";
            for (let i = 0; i < btn.length; i++){
                if(i == 0)
                    btn[i].style.opacity = "1";
                else
                    btn[i].style.opacity = "0";
            }
        }
        if(item == second){
            first.style.flexBasis = "15vw";
            second.style.flexBasis = "30vw";
            third.style.flexBasis = "15vw";
            
            firstText.style.margin = "0";
            secondText.style.marginLeft = "60px";
            thirdText.style.margin = "0";

            btn[1].style.transition = "opacity 1s ease";
            for (let i = 0; i < btn.length; i++){
                if(i == 1)
                    btn[i].style.opacity = "1";
                else
                    btn[i].style.opacity = "0";
            }
        }
        if(item == third){
            first.style.flexBasis = "15vw";
            second.style.flexBasis = "15vw";
            third.style.flexBasis = "30vw";

            firstText.style.margin = "0";
            secondText.style.margin = "0";
            thirdText.style.marginLeft = "60px";

            btn[2].style.transition = "opacity 1s ease";
            for (let i = 0; i < btn.length; i++){
                if(i == 2)
                    btn[i].style.opacity = "1";
                else
                    btn[i].style.opacity = "0";
            }
        }       
    }
    var standardGrid = () => {
        first.style.flexBasis = "20vw";
        second.style.flexBasis = "20vw";
        third.style.flexBasis = "20vw";

        firstText.style.margin = "0";
        secondText.style.margin = "0";
        thirdText.style.margin = "0";

        for (let i = 0; i < btn.length; i++){
            btn[i].style.transition = "opacity 0.2s ease";
            console.log(0);
            btn[i].style.opacity = "0";
        }
    }
}else{
    const items = [first, second, third];
    for (let i = 0; i < items.length; i++){
        items[i].removeAttribute("onmouseenter");
        items[i].removeAttribute("onmouseleave");
    }
}
