import Fade from "react-reveal/Fade";

export default function ReactPage()
{
  return(
    <>
      <article id="react-page">
        <Fade delay={200} duration={1700} left>
          <div id="wrapper">
            <p>React<img src="react-border.svg"/></p>
            <section>
              <div><img src="./features/react/open-source.png"/>
                React is an open-source JavaScript library under MIT license.</div>
              <div><img src="./features/react/components.png"/>
                Highly declarative component-based, and high-performance platform.</div>
              <div><img src="./features/react/ui.png"/>
                It is used for interactive and responsive user interfaces of websites and web apps.</div>
              <div><img src="./features/react/star.png"/>
                More than 163k stars, and more than 5 milion users on GitHub.</div>
              <div><img src="./features/react/react.png"/>
                It uses JSX, which is JavaScript on steroids, able to nest HTML.</div>
              <div><img src="./features/react/debugging.png"/>
                Easy debugging and testing, with fast displaying results.</div>
            </section>
          </div>
        </Fade>
      </article>
      <img id="transition" src="transition.svg"/>
    </>
  );
}
