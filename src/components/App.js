import React, { Component } from 'react';
import config from '../config/config'
const {GOOGLE_CLIENT_ID, GAPI_URI ,OAUTH2_SCOPES} = config;

class App extends Component {
  render() {
    return (
      <div className="f1 fdc">
        <header>
          <h1>Paul's Autos</h1>
          <h2>Quality you can ride in</h2>
        </header>
        <nav>
          <ul>
            <li className="active"><a href="#test">Home</a></li>
            <li><a href="#test">Profile</a></li>
            <li><a href="#test">Messages</a></li>
            <li><a href="#test">Settings</a></li>
          </ul>
        </nav>
        <main>
          <figure className="banner">
            <img alt="banner image" src="./images/banner.png"/>
          </figure>
          <h1>New Cars</h1>
          <hr className="fadeAway"/>
          <figure className="photo">
            <img alt="new image" src="./images/2.jpg"/>
            <figcaption>Sale Rs. 30,000/-</figcaption>
          </figure>
          <figure className="photo">
            <img alt="new image" src="./images/2.jpg"/>
            <figcaption>Sale Rs. 40,000/-</figcaption>
          </figure>
          <figure className="photo">
            <img alt="new image" src="./images/2.jpg"/>
            <figcaption>Sale Rs. 50,000/-</figcaption>
          </figure>
          <figure className="photo">
            <img alt="new image" src="./images/2.jpg"/>
            <figcaption>Sale Rs. 55,000/-</figcaption>
          </figure>

          <h2 className="clearFix">Blogs Topics</h2>
          <hr className="fadeAway"/>
          <div className="blog">
            <article>
              <h3>Topic 1</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <article>
              <h3>Topic 2</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <article>
              <h3>Topic 3</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <article>
              <h3>Topic 4</h3>
              <p>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <article>
              <h3>Topic 5</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <article>
              <h3>Topic 6</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
            <article>
              <h3>Topic 7</h3>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </article>
          </div>
        </main>
        <footer className="clearFix">
          <p>
            &copy;2018 Company's cars &bull; <a href="#test">1289-81752-917</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;