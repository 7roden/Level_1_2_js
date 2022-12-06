/* https://developer.mozilla.org/ru/docs/Web/API/File_API/Using_files_from_web_applications */

const inputForm = document.querySelector('.inputForm');

const inputFile = document.getElementById('inputFile');

const labelInput = document.getElementById('labelInput');


inputForm.onclick = () => {
    if (inputFile) {
        inputFile.click()
    }
};

inputFile.addEventListener("change", handleFiles, false);

/* Выполнение JavaScript, когда перетаскиваемый элемент попадает в цель перетаскивания: */
inputForm.addEventListener("dragenter", dragenter, false);
/* A dragged element is over the drop target */
inputForm.addEventListener("dragover", dragover, false);
/* A dragged element is dropped on the target */
inputForm.addEventListener("drop", drop, false);
/* Выполнение JavaScript, когда перетаскиваемый элемент перемещается из цели перетаскивания: */
inputForm.addEventListener("dragleave", dragLeave, false);
/* Выполните JavaScript, когда пользователь закончит перетаскивание элемента: */
inputForm.addEventListener("dragend", endDraged, false);


function dragenter(e) {
    e.stopPropagation();
    e.preventDefault();
}

function dragover(e) {
    e.stopPropagation();
    e.preventDefault();
    inputForm.style.backgroundColor = 'red';
    labelInput.style.color = 'white';
    labelInput.innerHTML = 'Покладіть файл сюди';
}

function drop(e) {
    e.stopPropagation();
    e.preventDefault();

    let dt = e.dataTransfer;
    let files = dt.files;
    handleFiles1(files);
    inputForm.style.backgroundColor = 'white';
    labelInput.style.color = '#2b4074';

}

function handleFiles() {
    const fileList = this.files; /* now you can work with the file list */
    if (fileList.length) {
        labelInput.innerHTML = 'Обрано файли:<br>';
        for (let file of fileList) {
            labelInput.innerHTML += file.name + '<br>';
        }
    } else {
        labelInput.innerHTML = 'Оберіть файл або перемістіть його сюди';
    }
}

function handleFiles1(files) {
    if (files.length) {
        labelInput.innerHTML = 'Обрано файли:<br>';
        for (let file of files) {
            labelInput.innerHTML += file.name + '<br>';
        }
    } else {
        labelInput.innerHTML = 'Оберіть файл або перемістіть його сюди';
    }
}

function dragLeave(e) {
    e.stopPropagation();
    e.preventDefault();
    inputForm.style.backgroundColor = 'white';
    labelInput.style.color = '#2b4074';
    labelInput.innerHTML = 'Оберіть файл або перемістіть його сюди';
}

function endDraged(e){
    e.stopPropagation();
    e.preventDefault();

}