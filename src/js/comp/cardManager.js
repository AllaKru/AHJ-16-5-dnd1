export default class CardManager {
  constructor(element, el) {
    if (typeof element === "string") {
      element = document.querySelectorAll(element);
    }

    this.onClick = this.onClick.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onCard = this.onCard.bind(this);
    // this.onLoad = this.onLoad.bind(this);
    this.element = element;
    this.el = el;
    this.change = undefined;
    this.element.forEach((el) => {
      this.el = el;
      //  this.el = e.target.closest(`.${this.el.className}`);
      this.el.addEventListener("input", this.onAdd);
      // this.el.addEventListener('click', this.onClick);
      // // this.el =  e.target.closest(`.${element.className}`)
      // // this.el.addEventListener('click', this.onClick);
      // console.log(this.el, el);
    });
    // this.element.addEventListener('click', this.onClick);
    // this.el = e.target.closest(`.${this.el.className}`);
    // this.el.addEventListener('click', this.onClick);
    console.log(this.el);
  }

  onClick(e) {
    //  e.preventDefault();
    const li = document.createElement("li");
    li.className = "item";
    li.innerHTML = `<textarea class = 'textarea' 
             placeholder = ...></textarea>
             <div class = 'block'> <button class = 'button'> Add card</button> <span>х</span>
             </div>
            `;
    // if (e.target.closest(`.${this.el.className}`) === this.el) {
    //    this.el.insertBefore(li, e.target);
    //    e.target.classList.add('add2');
    //    this.el.querySelector('.button').addEventListener('click', this.onCard);
    //    console.log(this.el);
    // }

    this.el = e.target.closest(`.${this.el.className}`);
    this.el.insertBefore(li, e.target);
    e.target.classList.add("add2");
    e.target.classList.add("add2");
    console.log(this.el);
    this.el.querySelector(".button").addEventListener("click", this.onCard);

    // this.el.insertBefore(li, e.target);
    // this.el.querySelector('.button').addEventListener('click', this.onCard);

    // this.el = e.target.closest(`.${element.className}`);
    // e.target.closest(`.${this.el.className}`).insertBefore(li, e.target);
    // });

    // e.target.closest(`.${this.el.className}`).appendChild(li);
    // e.target.style.display = 'none';

    // li.querySelector('.button').addEventListener('click', ()=>{
    //    console.log(this.el)

    // this.onAdd(e);
    // querySelector(e.target.className)
  }

  onAdd(e) {
    // e.preventDefault();
    //! !!!!!!!!!!!!!!!
    // this.el = e.target.closest(`.${this.el.className}`);
    // if (this.el.querySelector('.textarea').value) {
    //    this.el.querySelector('.textarea').value = '';
    //    console.log(7777)
    // }

    localStorage.setItem(
      "key",
      document.querySelector(".file-container").innerHTML
    );
    // if (e.target.querySelector('button')){

    // }
    console.log(this.el.querySelector(".textarea").value);
    // e.target.addEventListener('click', () => {
    //    console.log(e.target)
    //    e.target.closest('.block').remove();
    // });
  }

  onCard(e) {
    // e.preventDefault();
    //! !!!!!!!!!!!
    this.el = e.target.closest(`.${this.el.className}`);
    if (!e.target || this.el.querySelector(".textarea").value === "") {
      const time = setTimeout(() => {
        console.log(this.el.querySelector(".textarea").value);
        // this.el.querySelector('.textarea').value = 'Please write something...';

        // this.change = false;
      }, 100);
      this.el.querySelector(".block").classList.add("done");
      // const time2 = setTimeout(() => {
      //    console.log(this.el.querySelector('.textarea').value);
      //    this.el.querySelector('.textarea').value = '';
      // }, 15000);
      this.el.querySelector(".textarea").addEventListener("click", () => {
        this.el.querySelector(".block").classList.toggle("done");
        this.el.querySelector(".textarea").value = "";
        // this.change = true;
      });
      return;
      // доделать
    }
    const div = document.createElement("li");
    div.className = "item_card";
    div.innerHTML = `<div class = 'card' 
               >${this.el.querySelector(".textarea").value}</div>             
               `;
    this.el.insertBefore(div, this.el.querySelector(".add"));
    this.el.querySelector(".add").classList.remove("add2");
    // // e.target.closest('.block').remove();
    this.el.querySelector(".item").remove();
    console.log(this.el);
  }
}
