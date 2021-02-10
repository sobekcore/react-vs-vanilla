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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultrices, enim vel porttitor maximus, enim libero
            efficitur ipsum, ac gravida dui nisi non libero. Proin nec lacus non tellus viverra elementum sed id erat.
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer consequat justo
            arcu, id faucibus ante auctor sit amet. Vestibulum tincidunt viverra metus eget rutrum. Morbi semper sem maximus,
            vehicula dolor mattis, cursus massa. Sed non rhoncus neque. Curabitur laoreet vel eros vitae semper. Vestibulum
            pretium mauris luctus ex facilisis, eu tempus sapien accumsan. Mauris id auctor justo. Suspendisse in puru
            faucibus, dignissim nisl at, blandit nibh. Integer iaculis est at auctor vehicula. Nam aliquet blandit ex sit
            amet venenatis. Phasellus metus diam, iaculis sed mi sodales, euismod rhoncus diam.</p>
          </section>
        </Fade>
      </article>
      <img id="dots" src="./dots.svg"/>
    </>
  );
}