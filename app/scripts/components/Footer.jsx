import React from 'react';
import { shouldComponentUpdate } from 'utils/helpers';

export default class Footer extends React.Component {
  shouldComponentUpdate = shouldComponentUpdate;

  render() {
    return (
      <footer className="app__footer">
        <div className="app__container">
          <div className="app__footer__social">
            <a
              href="http://www.facebook.com/amarofashion"
              title="Curta nossa página no Facebook"
              target="_blank">
              <span className="i-facebook" />
            </a>
            <a
              href="http://instagram.com/amarofashion"
              title="Siga-nos no Instagram"
              target="_blank">
              <span className="i-instagram" />
            </a>
            <a
              href="http://www.youtube.com/user/amarofashion?sub_confirmation=1"
              title="Se inscreva no nosso canal no YouTube"
              target="_blank">
              <span className="i-youtube" />
            </a>
            <a
              href="http://www.pinterest.com/amarofashion"
              title="Siga-nos no Pinterest"
              target="_blank">
              <span className="i-pinterest" />
            </a>
            <a
              href="http://twitter.com/intent/follow?source=followbutton&amp;variant=1.0&amp;screen_name=amaromoda"
              title="Siga-nos no Twitter"
              target="_blank">
              <span className="i-twitter" />
            </a>
            <a
              href="https://plus.google.com/+Amarofashion"
              title="Siga-nos no Google+"
              target="_blank">
              <span className="i-google-plus" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
