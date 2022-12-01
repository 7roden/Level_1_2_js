/* Добавить на страницу три блока и сделать текст внутри них редактируемым, 
как в инпуте (но чтоб это был не нативный инпут). То, что человек введет в эти 
"инпуты" должно в них и оставаться при перезагрузке страницы (onload событие).
a.	для первого использовать localStorage
b.	для второго использовать cookies
c.	для третьего использовать sessionStorage
Загуглите в чем разница между этими способами. 
*/

window.onload = () => {
    /* a.	для первого использовать localStorage */
    let textInBlock1 = localStorage.getItem('test');
    let textInBlock2 = getCookie('test');
    let textInBlock3 = sessionStorage.getItem('test');
    if ( textInBlock1 !== null) {
        document.querySelector('.editor1').innerHTML = textInBlock1;
    }

    /* b.	для второго использовать cookies*/
    if ( textInBlock2 !== undefined) {
        document.querySelector('.editor2').innerHTML = textInBlock2;
    }

    /* c.	для третьего использовать sessionStorage */
    if ( textInBlock3 !== null) {
        document.querySelector('.editor3').innerHTML = textInBlock3;
    }
};

window.onunload = () => {
    let textInBlock1 = document.querySelector('.editor1').innerHTML;
    let textInBlock2 = document.querySelector('.editor2').innerHTML;
    let textInBlock3 = document.querySelector('.editor3').innerHTML;
    localStorage.setItem('test', textInBlock1);
    /* +1 день от текущей даты  expires=${date}  или писать куки будет удалено через 1 час document.cookie = "user=John; max-age=3600";*/
    let date = new Date(Date.now() + 86400e3);
    date = date.toUTCString();
    document.cookie = `test=${textInBlock2}; max-age=3600`;
    sessionStorage.setItem('test', textInBlock3);

};

// возвращает куки с указанным name,
// или undefined, если ничего не найдено
function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

