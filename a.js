
let a = (function a(){

    function select(selectorString){
        let element = document.querySelector(selectorString);
        return element;
    }

    return{
        select: select
    }
})();