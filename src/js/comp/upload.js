import CardManager from "./cardManager";

export default class Upload {
   constructor(element, cardManager) {
      if (typeof element === 'string') {
         element = document.querySelector(element);
      }
      this.onClick = this.onClick.bind(this);
      this.onLoad = this.onLoad.bind(this);
      // this.addCard = this.addCard.bind(this);
      this.element = element;
      // this.input = this.el.querySelector('.overlapped');
      this.cardManager = cardManager;
      this.arr = this.element.querySelectorAll('.add');
      this.element.addEventListener('click', this.onClick);
      window.onload = this.onLoad();
      // this.element.addEventListener('click', this.addCard);
      // this.element.addEventListener('change', this.onUpload);
      // this.input.click()
   }

   onClick(e) {
      // this.input.click();
      e.preventDefault();
      this.arr.forEach((element) => {
         if (e.target === element) {
            // e.target.classList.add('add');
            // if (e.target.classList.contains('opacity')){
            //    e.target.classList.remove('opacity');
            // } else {
            //    e.target.classList.add('opacity');
            // }

            // this.cardManager = new CardManager('.items')


            this.cardManager.onClick(e);
            console.log(e.target);
         }
      });

      // const arr = [...this.element.children];
      // arr.forEach((element) => {
      //    if (element === e.target) {
      // e.target.style.opacity = 1;

      // console.log(arr);
      // this.cardManager.onClick(element);
      // const li = document.createElement('li');
      // li.className = 'item';
      // li.innerHTML = `<textarea class = 'textarea'
      //  placeholder = ...></textarea>
      //  <div class = 'block'> <button> Add card</button> <span>х</span>
      //  </div>
      // `;
      // this.element.querySelector('.items').appendChild(li);
      // console.log(123456);

      // this.element.querySelectorAll('.tag').forEach((element) => {
      //    element.style.opacity = 1;
      //    console.log(e.target);
      // });
      // if (e.target === this.element.querySelector('.tag')){
      //    e.target.style.opacity = 1;
      // this.arr.forEach((element) => {
      //    if (element === e.target) {
      //       this.cardManager.onClick(e);
      //    }
      // });

      // }
   }

   onLoad() {
      Object.keys(localStorage).forEach((el) => {
         try {
            const r = JSON.parse(localStorage.getItem('key'));

            //   console.log(Object.keys(localStorage));
            //   console.log(r);

            // f.html(r);
            // this.el.arr.push(r);
            // console.log(this.el.arr);
            // this.element.innerHTML = r;
            console.log(r);
         } catch (error) {
            console.log(error);
         }
      });

      //    onUpload(e) {
      //       // e.preventDefault();
      //       console.log(e);
      //       const { target } = e;
      //       const one = target.files && target.files[0];// если нет левого значения то в правое и не зайдем из-за знака,
      //       // иначе заходим в левое - ротом правое
      //       const reader = new FileReader();
      //      reader.addEventListener('load', (e)=>{
      // console.log(e)
      //      });
      //      reader.readAsText(one)
      //    }
   }
}
