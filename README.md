# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

#### Importing Fonts via url in the link tag

Having access to different kinds of fonts is a useful flexibiity for rendering different texts on a webpage. Initially I had always used the default fonts provided by css. Fortunately, while solving this challenge I learned how to apply google font using the <link> tag. It's quit simple actaully, here's an example:

'''html
<link rel="stylesheet" href="inlcude google font url here">
'''
then you can select the font in css as follows:

````css
body {
  font-family: "name of google font here"
}
````

#### How to Create Accordions

This is my first time building a web interface with accordions **drum roll**. In fact, the challenge is all about building a functional accordion. Accordion's have a toggle feature that lets you show and hide information. They are the optimal choice for sections of the webiste such as FAQs. As with most things in web development, there isn't a single way to build accordions. I used a combination of <button> and <div> tags to create my accordion. The <button> represented the heading that contained the question while <div> element included a <p> tag that held the answer that was hidden, that could be displayed by clicking the button. Building an accordion demands an interplay of html, css and javaScript.

The html is for the structure, the css is for customization and animation, while javaScript is for functionality (more on the JavaScript below).

Here's a quick peep of the html:

````html
<button class="accordion">What is Frontend Mentor, and how will it help me? </button>
    <div class="panel">
      <p>Frontend Mentor offers realistic coding challenges to help developers improve their 
        frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
        all levels and ideal for portfolio building.</p>
    </div>
````

#### How to use SVG as background image

There are a number of ways to use SVG as a background image for your website. The popular method is using the <img> tag where you spply the SVG's url as the src.

A more direct method - which I discovered today- is using the <svg> tag itself where you input the XML code that was used to build the svg. This is useful if the svg is in your local storage and you'd rather not provide the path.

#### how to apply svg to pseudo :before and :after

The pseudo :before and :after  offer access to the beginning and the end of an element in terms of customization, through the content property. The content property has an option for urls, where you can include pngs or svgs.
for example:

````css
element::after {
  content: url("goodsvg.svg")

}
````

#### I learned about HTMLCollections and NodeLists

HTMl collections and NodeLists are both collections of DOM elements that can be accessed by index numbers.

A NodeList can be created by methods such as ==querySelectorAll==, ==childNodes== and ==attributes==. An HTMLCollection can be created by elements such as ==getElementsByClassName==, ==getElementsByTagName==, and ==children==.

Both of them enable manipulation of DOM elements via interation although the forEach() function does not work on HTMLCollection.

I discovered that HTMLCollections are live while NodeLists are static and changes in documents will immeditaley be reflected in the HTMLCollections unlike the NodeList. Since FAQs are subject to change I opted for HTMLCollections.

#### learned how to use addEventListener in javascript

As I was researching the best way to make my accordion accessible and functional. I found out a particular event handler in JavaScript called addEventlistener that lets you customize how your website responds to users or browsers dynamics. The web is interactive as such it is filled with events such as when a user clicks a button on the website.

The addEventListener has the following syntax:

**target.addEventListener(type, listner, useCapture)**

Key terms are explained as follows:

**Target:** common targets are element, or its children, Documents and window, but the taget may be any object that support events.

**type:** a case sensitive string representing the event type to listen for, for example: "click"

**listener:** This is usally a function that is applied to the type of event.

**useCapture:** This is optional and useful for settin the propagation phase.

The example below will higlight the button when clicked -after I have gotten the DOM elements from HTMLCollections:

````jS
acc[i].addEventListener("click", function() {
        this.classList.toggle("active");}
````

### Continued development

I'm still getting used to the idea of mobile first approach. However, I recognise the bulk of web usage comes from mobile phone users. In my next projects I plan to research more on the mobile first approach.

You cannot talk desgining websites for mobile phones without @media query.

I plan on experimenting more with @media query, and probably opitmizing for smart watches too :D.

### Useful resources

- [AddEventListener JavaScript: What It Is and How To Use It](https://coderpad.io/blog/development/addeventlistener-javascript/) - This helped me understand adEventListener in Javascript.

- [How TO - Collapsibles/Accordion](https://www.w3schools.com/howto/howto_js_accordion.asp) - This is an amazing article which helped me understand how to make accessible and functional accordions. I'd recommend it to anyone trying to find.

## Author

- Frontend Mentor - [@torCanHack](https://www.frontendmentor.io/profile/torCanHack)
- Twitter - [@pairofbrains](https://www.twitter.com/pairofbrains)
