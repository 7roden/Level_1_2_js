/* 15.	Сделать два блока, один внутри другого. Навешать на каждый из них 
слушатель клика, который вызывает алерт. Сделать так чтоб при нажатии на 
маленький вызывался всего один алерт. */

  /* https://learn.javascript.ru/bubbling-and-capturing */

  let blockOutsideClick = () => {
    alert('This is blockOutside');
  };

  
  let blockInsideClick = () => {
    alert('This is blockInside');
  };

  document.querySelector('.div').onclick = (event) => {
    let element = event.target.id;
    if (element == 'blockInside') {
        blockInsideClick();
    } else {
        blockOutsideClick();
    }

  }

