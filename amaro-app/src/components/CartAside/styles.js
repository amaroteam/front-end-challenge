import styled from 'styled-components';

export const Container = styled.div`
  aside {
    display: block;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
  }
  p {
    margin-bottom: 1rem;
  }
  a {
    background-color: rgba(0, 0, 0, 0);
  }
  a:hover {
    color: #000;
    text-decoration: underline;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-family: Gotham, sans-serif;
    font-weight: 600;
    line-height: 1.2;
  }
  h4 {
    font-size: 1.8rem;
  }
  .btn {
    display: inline-block;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 1rem 2rem;
    font-size: 1.6rem;
    line-height: 1.5;
    border-radius: 0;
    -webkit-transition: color 0.15s ease-in-out,
      background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  @media (prefers-reduced-motion: reduce) {
    .btn {
      -webkit-transition: none;
      transition: none;
    }
  }
  .btn:hover {
    color: #212529;
    text-decoration: none;
  }
  .btn:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.25);
  }
  .btn:disabled {
    opacity: 0.65;
  }
  .btn-outline-primary {
    color: #000;
    border-color: #000;
  }
  .btn-outline-primary:hover {
    color: #fff;
    background-color: #000;
    border-color: #000;
  }
  .btn-outline-primary:focus {
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
  }
  .btn-outline-primary:disabled {
    color: #000;
    background-color: rgba(0, 0, 0, 0);
  }
  [class^='i-'] {
    display: inline-block;
    font-family: amaro-font !important;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-style: normal;
    -webkit-font-feature-settings: normal;
    font-feature-settings: normal;
    font-variant: normal;
    font-weight: 400;
    line-height: 1;
    speak: none;
    text-transform: none;
  }
  .i-close:before {
    content: '\f05a';
  }
  .i-commenting-o:before {
    content: '\f066';
  }
  .i-envelope-o:before {
    content: '\f07a';
  }
  .i-phone:before {
    content: '\f0ee';
  }
  .i-question-circle-o:before {
    content: '\f102';
  }
  .i-shopping-bag:before {
    content: '\f11b';
  }
  a,
  a:active,
  a:focus,
  a:hover {
    color: #000;
    text-decoration: none;
  }
  i {
    font-style: italic;
  }
  .btn {
    font-family: Gotham, Helvetica Neue, Helvetica, Arial, sans-serif;
  }
  .btn:active,
  .btn:focus,
  .btn:hover {
    box-shadow: none !important;
    outline: 0 !important;
  }
  .btn-icon {
    align-items: center;
    display: inline-flex;
    line-height: 1;
  }
  .btn-icon span {
    display: inline-flex;
    padding-top: 0.2rem;
    text-transform: uppercase;
  }
  .btn-icon i + span {
    margin-left: 0.5rem;
  }
  .app__help-menu {
    background-color: #fff;
    box-shadow: -0.2rem 0.2rem 1.4rem rgba(0, 0, 0, 0.2);
    font-size: 1.4rem;
    pointer-events: none;
    position: fixed;
    right: 0;
    top: 5rem;
    -webkit-transform: scaleY(0);
    -ms-transform: scaleY(0);
    transform: scaleY(0);
    -webkit-transform-origin: top center;
    -ms-transform-origin: top center;
    transform-origin: top center;
    -webkit-transition: -webkit-transform 0.2s;
    transition: -webkit-transform 0.2s;
    transition: transform 0.2s;
    transition: transform 0.2s, -webkit-transform 0.2s;
    width: 16rem;
    z-index: 2500;
  }
  .app__help-menu a {
    display: block;
    padding: 1rem;
  }
  .app__help-menu a:hover {
    background-color: #f4f4f4;
  }
  .app__help-menu [class^='i-'] {
    margin-right: 1rem;
  }
  .app__cart__header {
    align-items: center;
    border-bottom: 0.1rem solid #ccc;
    display: flex;
    height: 5rem;
    justify-content: space-between;
    padding-left: 1.5rem;
    padding-right: 1rem;
    position: relative;
  }
  .app__cart__header > * {
    line-height: 1;
  }
  .app__cart__header a {
    font-size: 1.8rem;
    height: 2rem;
  }
  .app__cart__header a:first-child {
    font-size: 1.4rem;
    height: 1.4rem;
  }
  .app__cart__header h4 {
    flex: 1 1;
    font-weight: 400;
    margin-bottom: 0;
    text-align: center;
    text-transform: uppercase;
  }
  .app__cart {
    background-color: #fff;
    bottom: 0;
    box-shadow: -0.2rem 0 0.2rem rgba(0, 0, 0, 0.1);
    position: fixed;
    right: -100%;
    top: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-transition: right 0.3s cubic-bezier(0.1, 0.62, 0.39, 0.67);
    transition: right 0.3s cubic-bezier(0.1, 0.62, 0.39, 0.67);
    width: 30rem;
    will-change: right;
    z-index: 1500;
  }
  @media only screen and (min-width: 1024px) {
    .app__cart {
      width: 35rem;
    }
  }
  .app__cart__wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  .app__cart__main {
    display: flex;
    flex: 1 1;
    flex-direction: column;
    overflow: auto;
  }
  .app__cart__empty {
    align-items: center;
    display: flex;
    justify-content: center;
    text-align: center;
    flex: 1 1;
    flex-direction: column;
    padding: 3rem 0;
    text-transform: uppercase;
  }
  .app__cart__empty [class^='i-'] {
    color: #ccc;
    font-size: 5rem;
  }
  .app__cart__empty p {
    margin: 3rem 0;
  }
  .app__cart--visible {
    right: 0;
  }
`;
