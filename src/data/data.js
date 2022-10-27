export const data = [
  {
    question: "Explain event delegation.",
    answer:
      "Event delegation refers to the process of using event propagation (bubbling) to handle events at a higher level in the DOM than the element on which the event originated. It allows us to attach a single event listener for elements that exist now or in the future.",
    open: true,
    status: 0,
  },
  {
    question: "Explain how this works in JavaScript.",
    answer:
      "When a function is called as a method of an object, its this is set to the object the method is called on",
    open: false,
    status: 0,
  },
  {
    question:
      "Can you give an example of one of the ways that working with this has changed in ES6?",
    answer:
      "S6 allows you to use arrow functions which uses the enclosing lexical scope. This is usually convenient, but does prevent the caller from controlling context via .call or .apply—the consequences being that a library such as jQuery will not properly bind this in your event handler functions. Thus, it's important to keep this in mind when refactoring large legacy applications.",
    open: false,
    status: 0,
  },
  {
    question: "Explain how prototypal inheritance works",
    answer:
      "This is an extremely common JavaScript interview question. All JavaScript objects have a __proto__ property with the exception of objects created with Object.create(null), that is a reference to another object, which is called the object's 'prototype'. When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's __proto__, and the __proto__'s __proto__ and so on, until it finds the property defined on one of the __proto__s or until it reaches the end of the prototype chain. This behavior simulates classical inheritance, but it is really more of delegation than inheritance.",
    open: false,
    status: 0,
  },
  {
    question: "Explain how prototypal inheritance works",
    answer: `Both are ways to implement a module system, which was not natively present in JavaScript until ES2015 came along. CommonJS is synchronous while AMD (Asynchronous Module Definition) is obviously asynchronous. CommonJS is designed with server-side development in mind while AMD, with its support for asynchronous loading of modules, is more intended for browsers.

      I find AMD syntax to be quite verbose and CommonJS is closer to the style you would write import statements in other languages. Most of the time, I find AMD unnecessary, because if you served all your JavaScript into one concatenated bundle file, you wouldn't benefit from the async loading properties. Also, CommonJS syntax is closer to Node style of writing modules and there is less context-switching overhead when switching between client side and server side JavaScript development.
      
      I'm glad that with ES2015 modules, that has support for both synchronous and asynchronous loading, we can finally just stick to one approach. Although it hasn't been fully rolled out in browsers and in Node, we can always use transpilers to convert our code.`,
    open: false,
    status: 0,
  },
  {
    question: `What is a closure, and how/why would you use one?`,
    answer: `A closure is the combination of a function and the lexical environment within which that function was declared. The word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. Closures are functions that have access to the outer (enclosing) function's variables—scope chain even after the outer function has returned.`,
    open: false,
    status: 0,
  },
  {
    question: `How do you organize your code? (module pattern, classical inheritance?)`,
    answer: `In the past, I've used Backbone for my models which encourages a more OOP approach, creating Backbone models and attaching methods to them.

    The module pattern is still great, but these days, I use React/Redux which utilize a single-directional data flow based on Flux architecture. I would represent my app's models using plain objects and write utility pure functions to manipulate these objects. State is manipulated using actions and reducers like in any other Redux application.
    
    I avoid using classical inheritance where possible. When and if I do, I stick to these rules.`,
    open: false,
    status: 0,
  },
  {
    question: `What's the difference between host objects and native objects?`,
    answer: `Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, RegExp, Object, Function, etc.

    Host objects are provided by the runtime environment (browser or Node), such as window, XMLHTTPRequest, etc.`,
    open: false,
    status: 0,
  },
];
