var container = document.getElementsByClassName("container")[0];
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

console.log(window.matchMedia("(min-width: 768px)").matches);

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
        items[i].setAttribute("onclick", "tap(this)");
    }
    desc = document.getElementById("descBlock");
    var container = document.getElementsByClassName("container")[0];
    var p = desc.children[1];
    p.innerHTML = p.innerHTML.replace('<br>', '');

    btn[0].style.opacity = "1";
    subcontainer = document.createElement("div");
    subcontainer.classList.add("subcontainer");
    console.log(subcontainer);
    document.body.appendChild(subcontainer);
    subcontainer.appendChild(second);
    subcontainer.appendChild(third);

    subcontainer.style.height = "max-content";
    container.style.height = "max-content";
    var tap = (item) => {
        nf = container.children[0];
        ns = subcontainer.children[0];
        nt = subcontainer.children[1];

        console.log(nf, ns, nt);
        if(item == first){
            console.log(subcontainer);
            console.log(container);
        }
        if(item == second){
         
                first.style.width = "35vw";
                item.style.top = "0.7vh";
                third.style.right = "47vw";
                first.style.top = "38.3vh";
                item.style.width = "70vw";
            
            item.removeAttribute('id');
            item.setAttribute('id', 'firstBlock');
            first.removeAttribute('id')
            first.setAttribute('id', 'thirdBlock');
            third.removeAttribute('id');
            third.setAttribute('id', 'secondBlock');
            container.replaceChild(ns, nf);
            subcontainer.appendChild(nf);
            console.log(nf, ns, nt);
            first = ns;
            second = nt;
            third = nf;
            first.removeAttribute('style');
            second.removeAttribute('style');
            third.removeAttribute('style');
        }
        if(item == third){

        }
    } 
}