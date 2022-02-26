// TODO: write code here

// eslint-disable-next-line import/no-named-as-default
import CardManager from './comp/cardManager';
import Upload from './comp/upload';

console.log('app.js bundled');

window.upload = new Upload('.file-container', new CardManager('.items'));
// const y = new Upload('.overlap')
// window.upload = new Upload('.file-container');
// window.card = new CardManager('.items');
// window.addEventListener('upload', ()=>{
//    localStorage.getItem('key')
// })