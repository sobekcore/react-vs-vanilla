import Fade from "react-reveal/Fade";

export default function WhichPage()
{
  return(
    <>
      <article id="which-page">
        <Fade delay={200} duration={1700} left>
          <section>
            <div id="title"><h1>Which one to choose?</h1>
            <Fade delay={1800} duration={1700} right>
              <img src="./emoji.png"/>
            </Fade></div>
            <p>Which one to choose would be a great question. And the anwser is: it depends, as always. If you'd like to use
            the most lightweight and the most flexible tool, you probably would want to use Vanilla JavaScript. However
            Vanilla JS has it inconveniences, like naming and scaling convenction, as well as complexity. Sometimes the names
            of variables can go really long in JavaScirpt, like prototype.constuctor.world.player.controler... etc. It's
            sometimes really hard to track on. In React a lot of stuff is getting easier and more flexibile (sometimes).
            You have in-built component based system, where in Vanilla you'd have to build yourself one. I think that the one
            to choose will depend on your needs, both are good, and both have its usses. But most of the time either React or
            Vanilla JS would be a good choice.</p>
          </section>
        </Fade>
      </article>
      <img id="waves" src="./waves.svg"/>
    </>
  );
}