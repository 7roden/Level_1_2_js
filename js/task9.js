/* Превратить инпут в textarea, в которую можно вводить ссылки, каждую с новой строчки. 
При нажатии на кнопку на странице появится столько картинок, 
сколько ссылок ввели в textarea (картинки берутся по ссылкам).*/

document.getElementById('button').onclick = () => {
    let textArea = document.forms['inputForm']['filenames'].value;
    let fileNames = textArea.split('\n');
    document.getElementById('divImage').innerHTML = '';
    for (let fileName of fileNames) {
        if(fileName == '') {continue};
        document.getElementById('divImage').innerHTML += `<img src=${fileName} + alt="1"><br>`;
    }
};