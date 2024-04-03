# React Components

Traditionally when creating web pages, web developers marked up their content and then added interaction by sprinkling on some JavaScript. This worked great when interaction was a nice-to-have on the web. Now it is expected for many sites and all apps.

React puts interactivity first while still using the same technology:
#  A React component is a JavaScript function that you can sprinkle with markup.

example:
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  )
}

# Using a component 
    function Profile() {
    return (
        <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
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

# What the browser sees 
    Notice the difference in casing:

    <section> is lowercase, so React knows we refer to an HTML tag.
    <Profile /> starts with a capital P, so React knows that we want to use our component called Profile.
    And Profile contains even more HTML: <img />. In the end, this is what the browser sees:

    <section>
    <h1>Amazing scientists</h1>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
    </section>

# Recap
You’ve just gotten your first taste of React! Let’s recap some key points.

    * React lets you create components, reusable UI elements for your app.

    * In a React app, every piece of UI is a component.

    * React components are regular JavaScript functions except:

        1. Their names always begin with a capital letter.
        2. They return JSX markup.