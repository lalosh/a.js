
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
                element: (function returnElement(){return innerElement;})(),
                attr : attr(innerElement),
            }
        }

        return {
            inside: inside
        };
    }



    function create(){

        let wantedElement;

        function element(elementTagName){
            let element = document.createElement(elementTagName.toLowerCase());
             wantedElement = element;
             return {innerText: innerText};

        }

        function innerText(someText){
            let textNode = document.createTextNode(someText);
            wantedElement.appendChild(textNode);

            return {
                before: before,
                after: after
            };
        }
        function html(HTMLString){
            let docFrag = document.createDocumentFragment();
            let element = document.createElement('div');
            
            docFrag.appendChild(element);
            docFrag.querySelector('div').innerHTML = HTMLString;
            wantedElement = docFrag.querySelector('div');
            return {
                before: before,
                after: after
            };
        }

        function before(selectorString){
            let query = document.querySelector(selectorString);
            query.insertAdjacentHTML('beforebegin', wantedElement.outerHTML);
        }

        function after(selectorString){
            let query = document.querySelector(selectorString);
            query.insertAdjacentHTML('afterend', wantedElement.outerHTML);
        }

        return{
            element: element,
            html: html,
        }
    }

    function attr(element){

        function set(name){
            return function(value){
                element.setAttribute(name, value);
            }
        }

        function get(name){
            return element.getAttribute(name);
        }

        function remove(name){
            element.removeAttribute(name);
        }

        function hasA(name){
            return element.hasAttribute(name);
        }
        return {
            set: set,
            get: get,
            remove: remove,
            hasA: hasA,
        }
    }
    return{
        select: select,
        create: create(),
        text: text,
        attr: attr,
    }
})();