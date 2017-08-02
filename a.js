
let a = (function a(){

    function text(input){  
        if(typeof input == 'string')
            return text(document.querySelector(input));
        else //it's a node element
            return input.textContent; 
    }

    //select > inside
    function select(selectorString){
    
        let element = document.querySelector(selectorString);
        
        function inside(outerSelectorString){
            if(!outerSelectorString)
                outerSelectorString = 'body';

            let outerElement = document.querySelector(outerSelectorString);
            let innerElement = outerElement.querySelector(selectorString);
            return {
                text: text(innerElement),
                element: (function returnElement(){return innerElement;})()
            }
        }

        return {
            inside: inside
        };
    }

    function create(){

        function element(elementTagName){
            let element = document.createElement(elementTagName.toLowerCase());
            document.body.appendChild(element);
            return element;
        }
        
        function html(HTMLString){
            let docFrag = document.createDocumentFragment();
            let element = document.createElement('div');
            
            docFrag.appendChild(element);
            docFrag.querySelector('div').innerHTML = HTMLString;

            document.body.appendChild(docFrag);
        }

        return{
            element: element,
            html: html
        }
    }

    function attribute(element){

        return function name(){

            return function value(){

            }
        }
    }
    return{
        select: select,
        create: create(),
        text: text,
    }
})();