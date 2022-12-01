/* 14.	Сделать кнопку, которая появляется когда мы уже пролистали экран вниз 
и по нажатию на которую человека плавно кидает наверх страницы. */

/* https://learn.javascript.ru/size-and-scroll-window*/

window.addEventListener('scroll', function () {
  let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  );
  if ((this.window.pageYOffset + document.documentElement.clientHeight + 1) >= scrollHeight) {
    document.getElementById('showScroll').style.visibility = 'initial';
  } else {
    document.getElementById('showScroll').style.visibility = 'hidden';
  }
});

document.querySelector('#showScroll').onclick = () => {
  this.window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
    });
}

/* scrollTo также имеет альтернативный синтаксис:
element.scrollTo(options)
options - объект с тремя свойствами.

element.scrollTo({
top: 100,
left: 100,
behavior: 'smooth'
});

где behavior: 'smooth' означает плавную прокрутку. Принимает значения "auto" или "smooth". 
По умолчанию "auto" - то есть, без плавной прокрутки.
Не поддерживается только в IE.
То же самое с scrollBy.

scrollIntoView также имеет альтернативный синтаксис:
element.scrollIntoView(options);
options - объект с тремя свойствами.

behavior - Анимация прокрутки. Принимает значения "auto" или "smooth". По умолчанию "auto".
block - Вертикальное выравнивание. Одно из значений: "start", "center", "end" или "nearest". По умолчанию "start".
inline - Горизонтальное выравнивание. Одно из значений: "start", "center", "end" или "nearest". По умолчанию "nearest".

elem.scrollIntoView({block: "center", behavior: "smooth"});

behavior: "smooth" не поддерживается в IE и Safari */

  // https://learn.javascript.ru/settimeout-setinterval пауза 