const selectFontSize = document.getElementById('selectFontSize');
const selectBgColor = document.getElementById('selectBgColor');
const resetButton = document.getElementById('resetButton');
const mainElement = document.querySelector('main');

const setValues = (fontSize, bgColor) => {
    selectFontSize.value = fontSize;
    selectBgColor.value = bgColor;
    mainElement.style.fontSize = fontSize;
    mainElement.style.backgroundColor = bgColor;
};
//load local storage values
const initialSetup = () => {
    const fontSize = localStorage.getItem('fontSize');
    const bgColor = localStorage.getItem('bgColor');
    if (bgColor && fontSize) {
        setValues(fontSize, bgColor);
    }
    if (!bgColor && !fontSize) {
        setValues('16px', 'aqua');
    }
    if (bgColor && !fontSize) {
        setValues('16px', bgColor);
    }
    if (!bgColor && fontSize) {
        setValues(fontSize, 'aqua');
    }
};
//changeFontsize
const changeFontSize = (event) => {
    const selectedFontSize = event.target.value;
    mainElement.style.fontSize = selectedFontSize;
    localStorage.setItem('fontSize', selectedFontSize);
};
//changeBgColor
const changeBgColor = (event) => {
    const selectedColor = event.target.value;
    mainElement.style.backgroundColor = selectedColor;
    localStorage.setItem('bgColor', selectedColor);
};

//clearLocalStorage
const clearLocalStorage = () => {
    localStorage.removeItem('bgColor');
    localStorage.removeItem('fontSize');
    setValues('16px', 'aqua');
};

//add event listener
selectFontSize.addEventListener('change', changeFontSize);
selectBgColor.addEventListener('change', changeBgColor);
resetButton.addEventListener('click', clearLocalStorage);
initialSetup();
