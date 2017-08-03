# Relent the DOM by taking advantages of JS!


## First

> <script src="a.js"></script>

once you include the script '>a.js' in your page a variable called 'a' is used to
reference every function related to this library


# Examples

## Get the text contents:

use a CSS selector
>text('# my_span');

use an element
>let element = (document.querySelector('# my_span'));
>text(element); 
    

## Select an Element:

return the inner text
>a.select('# some_id').inside('div# another_Id').text

return the element itself as an html node
>a.select('# some_id').inside('div# another_Id').element    

set an attribute
>a.select('# some_id').inside('div# another_Id').attr.set('color')('white')

get some attribute
>a.select('# some_id').inside('div# another_Id').attr.get('class')    

remove an attribute
>a.select('# some_id').inside('div# another_Id').attr.remove('id')

check if it has an attribute
>a.select('# some_id').inside('div# another_Id').attr.hasA('id')

    
## NOTICE

providing and empty parameter to the function inside will
select an element inside of the 'body' element of your document

>a.select('# some_id').inside().....etc


## HTML Attributes:

let element = document.querySelector(div# some_id);

set an attribute for element
>attr(element).set('color')('white');

get an attribute from element
>attr(element).get('color');

remove an attribute from element
>attr(element).remove('background-color');

check if the element has an attribute
>attr(element).hasA('id');


## Create Elements:

create h1 element with the inner text "super header" after/before the
element with the id "# some_id"

>a.create.element('h1').innerText('super header').after('# some_id')

>a.create.element('h1').innerText('super header').before('# some_id')

create a div elements contains the provided tags after/before the 
div elements with a class called "cool_class" 

>a.create.html('&lt;h2&gt;&lt;p&gt;amazing paragraph here&lt;/p&gt;&lt;/h2&gt;').after('div.cool_class')

>a.create.html('&lt;h2&gt;&lt;p&gt;amazing paragraph here&lt;/p&gt;&lt;/h2&gt;').before('div.cool_class')


## NOTICE    

empty param to after() and before() will result in inserting the 
element after the last element or before the first element respectively