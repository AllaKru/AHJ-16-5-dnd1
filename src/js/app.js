// TODO: write code here

// eslint-disable-next-line import/no-named-as-default
import CardManager from './comp/cardManager';
import Upload from './comp/upload';

console.log('app.js bundled');

window.upload = new Upload('.file-container',
  // (el) => {
  //    new CardManager(`.${el.className}`);
  //    console.log(new CardManager(`.${el.className}`).element);
  // });
);
// window.upload = new Upload('.file-container', new CardManager('.items'));

// console.log(Array.from(document.querySelectorAll('.items')), new Upload('.file-container'));
