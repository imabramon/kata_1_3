let openedClassName = "collapsible-content--opened";
let collapsibleContentControlSeletor = ".collapsible-content__more-button";

let collapsibleContentList = document.querySelectorAll(".collapsible-content");

collapsibleContentList.forEach(function(element){
    let control = element.querySelector(collapsibleContentControlSeletor);
    let classList = element.classList;
    control.addEventListener("click", function(){
        if(classList.contains(openedClassName)){
            classList.remove(openedClassName);
        }else{
            classList.add(openedClassName);
        }
    });
});