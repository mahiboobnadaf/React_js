First create Vite or reactNext

i will be using Vite for all projects 

Steps to create a Vite project:
1. Open vs terminal and type ` npm create vite@latest `
2. Give name for your project
3. Select framework as React 
4. Select variant as JavaScript couse i will be using JavaScript for this

Now your project is created , 
5. change the directory to the project folder, cd /project_name
6. Install all npm packages , npm install or npm install

To, run your project :
    npm run dev


Change yours files in src folder of project 

Images are stored in project > src > assets 

main.jsx will render app.jsx 

# Writing markup with jsx
JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file. Although there are other ways to write components, most React developers prefer the conciseness of JSX, and most codebases use it.

JSX: Putting markup into JavaScript 
The Web has been built on HTML, CSS, and JavaScript. For many years, web developers kept content in HTML, design in CSS, and logic in JavaScript—often in separate files! Content was marked up inside HTML while the page’s logic lived separately in JavaScript. But as the Web became more interactive, logic increasingly determined content. JavaScript was in charge of the HTML! This is why in React, rendering logic and markup live together in the same place—components.

Keeping a button’s rendering logic and markup together ensures that they stay in sync with each other on every edit. Conversely, details that are unrelated, such as the button’s markup and a sidebar’s markup, are isolated from each other, making it safer to change either of them on their own.

Each React component is a JavaScript function that may contain some markup that React renders into the browser. React components use a syntax extension called JSX to represent that markup. JSX looks a lot like HTML, but it is a bit stricter and can display dynamic information. The best way to understand this is to convert some HTML markup to JSX markup.

example: 
    export default function TodoList() {
    return (
        // This doesn't quite work! because there are some rules for jsx
        <h1>Hedy Lamarr's Todos</h1>
        <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        class="photo"
        >
        <ul>
        <li>Invent new traffic lights
        <li>Rehearse a movie scene
        <li>Improve the spectrum technology
        </ul>
    );
    }
The Rules of JSX 
1. Return a single root element 
    To return multiple elements from a component, wrap them with a single parent tag.

    For example, you can use a <div> all contents </div> 

    if you dont want to use extra <div> then wrap them into <> all tags </>.  <> </> is called FRAGMENTS.
2. Close all the tags 
    JSX requires tags to be explicitly closed: self-closing tags like <img> must become <img />, and wrapping tags like <li>oranges must be written as <li>oranges</li>.

3. camelCase all most of the things! 
    JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects. In your own components, you will often want to read those attributes into variables. But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words like class.

    This is why, in React, many HTML and SVG attributes are written in camelCase. For example, instead of stroke-width you use strokeWidth. Since class is a reserved word, in React you write className instead, named after the corresponding DOM property:

    <img 
    src="https://i.imgur.com/yXOvdOSs.jpg" 
    alt="Hedy Lamarr" 
->  className="photo"       
    />