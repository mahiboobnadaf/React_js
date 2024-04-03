# Importing and Exporting Components
The magic of components lies in their reusability: you can create components that are composed of other components. But as you nest more and more components, it often makes sense to start splitting them into different files. This lets you keep your files easy to scan and reuse components in more places.

# Exporting and importing a component 
What if you want to change the landing screen in the future and put a list of science books there? Or place all the profiles somewhere else? It makes sense to move Gallery and Profile out of the root component file. This will make them more modular and reusable in other files. You can move a component in three steps:

    1. Make a new JS file to put the components in.
    2. Export your function component from that file (using either default or named exports).
    3. Import it in the file where you’ll use the component (using the corresponding technique for importing default or named exports).

Here both Profile and Gallery have been moved out of App.js into a new file called Gallery.js. Now you can change App.js to import Gallery from Gallery.js:

# App.js
import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}

# Gallery.js
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}

Notice how this example is broken down into two component files now:

1. Gallery.js:
    Defines the Profile component which is only used within the same file and is not exported.
    Exports the Gallery component as a default export.
2. App.js:
    Imports Gallery as a default import from Gallery.js.
    Exports the root App component as a default export.

# Exporting and importing multiple components from the same file 
What if you want to show just one Profile instead of a gallery? You can export the Profile component, too. But Gallery.js already has a default export, and you can’t have two default exports. You could create a new file with a default export, or you could add a named export for Profile. "**A file can only have one default export, but it can have numerous named exports!**"