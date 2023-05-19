# Question

## What are some of the best features / benefits in using React ?

the benfits / features using React are :
<br>

1. Component-based architecture
   One of the key ReactJS advantages is its modular design. React.js uses a component-based architecture that allows developers to create reusable components for the user interface. This makes it easier to maintain and scale applications.

2. Simplified the code React JS has features a free syntax extension called JSX. This make your HTML within library much easier. Its writing shortcuts allow you to make the source code simpler and cleaner, converting your HTML mockups into ReactElement trees. JSX not only helps avert code injections, but it makes your whole application run faster.

3. Performance Enhancement. ReactJS improves performance due to virtual DOM. The DOM is a cross-platform and programming API which deals with HTML, XML or XHTML. Most of the developers faced the problem when the DOM was updated, which slowed down the performance of the application. ReactJS solved this problem by introducing virtual DOM. The React Virtual DOM exists entirely in memory and is a representation of the web browser's DOM. Due to this, when we write a React component, we did not write directly to the DOM. Instead, we are writing virtual components that react will turn into the DOM, leading to smoother and faster performance.

4. SEO friendly. Traditional JavaScript frameworks have an issue in dealing with SEO. The search engines generally having trouble in reading JavaScript-heavy applications. Many web developers have often complained about this problem. ReactJS overcomes this problem that helps developers to be easily navigated on various search engines. It is because React.js applications can run on the server, and the virtual DOM will be rendering and returning to the browser as a regular web page.

5. Easy to learn and use. It comes with a good supply of documentation, tutorials, and training resources. Any developer who comes from a JavaScript background can easily understand and start creating web apps using React.

<br>

## Explain Props and State up to your understanding ?

1. What is props?
   Props stands for properties and used for passing data from one component to another. Uni directional flow and props data is read only

2. What is state?
   State is where you store property values that belongs to the component. When the state changes, the component re-renders and
   useState allows us to track state in a function component

<br>

## Can web browser read JSX?

Browser can't read JSX
because JSX is not valid JavaScript, browsers can’t read it directly; they do not know what to do with it, so we need a transpiler to translate it to React.createElement() calls

<br>

## What is the difference between real DOM and virtual DOM?

#### Real DOM
- It is an abstraction of a page's HTML.
- It can manipulate on-screen elements.
- Any change updates the entire DOM tree.
- Updating is slow and inefficient.

#### Virtual DOM
- It is an abstraction of an HTML DOM.
- It can manipulate on-screen elements.
- Any change only updates the relevant node in the tree.
- Updating is fast and efficient.