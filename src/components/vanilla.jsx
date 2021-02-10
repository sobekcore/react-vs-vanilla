import Fade from "react-reveal/Fade";

export default function VanillaPage()
{
  return(
    <article id="vanilla-page">
      <Fade delay={200} duration={1700} left>
        <div id="wrapper">
          <p>Vanilla<img src="vanilla.svg"/></p>
          <section>
            <div><img src="./features/vanilla/library.png"/>
              Multiple of built in libraries which can be used to do anything.</div>
            <div><img src="./features/vanilla/lightweight.png"/>
              Vanilla JavaScript is the most lightweight framework available anywhere.</div>
            <div><img src="./features/vanilla/earth.png"/>
              The most popular JavaScript framework used on earth. There is nearly everything done with it.</div>
            <div><img src="./features/vanilla/structure.png"/>
              Creating your own structure relating to your needs and expectations.</div>
            <div><img src="./features/vanilla/transition.png"/>
              It has infinite amount of complex animations and transition to make.</div>
            <div><img src="./features/vanilla/ajax.png"/>
              Making an easy AJAX calls, and overall easy access to data.</div>
          </section>
        </div>
      </Fade>
    </article>
  );
}
