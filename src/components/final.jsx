import Fade from "react-reveal/Fade";

export default function FinalPage()
{
  return(
    <>
      <Fade delay={200} duration={1700} right>
        <article id="final-page">
          <section>
          <div id="title">
            <Fade delay={1800} duration={1700} left>
              <img src="./cloud.png"/>
            </Fade><h1>Final Thoughts</h1>
          </div>
          <p>Both are really good tools, however nowadays Vanilla JavaScript might sometimes feel a little old, is has it's
          own uses for sure, like intense animated websites, or highly calculated graphics, canvas rendering etc. But a lot of
          the times React will be a slightly better choice, because you save a lot of time in doing basic stuff that is easy,
          but somewhat time consuming. In Vanilla JS you have to do a lot of stuff by yourself, which is good experience,
          and will probably teach you alot, but this time we compare both tools not in that aspect. In overall usefulness
          and conveniences i think React wins this round, and is overall more modern tool.
          </p>
          </section>
        </article>
      </Fade>
      <img id="dots" src="./dots.svg"/>
    </>
  );
}
