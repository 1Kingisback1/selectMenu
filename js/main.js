let dropDownMenu = document.querySelector('.dropdown__btn').addEventListener('click', () => {
    let dropList = document.querySelector('.dropdown__list');
    dropList.classList.toggle('show');
    if(dropList.classList.contains('show') === true) {
        dropList.style = "opacity: 1";
    } else {
        dropList.style = "opacity: 0";
    }
    let elements = document.querySelectorAll('#el'),
        arrayEl = Array.from(elements),
        mapEl = arrayEl.map(t => {return t.innerText;});
        arrayEl[0].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[0];
            changerText.innerHTML = thisEl;
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[1].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[1];
            changerText.innerHTML = thisEl;
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[2].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[2];
            changerText.innerHTML = thisEl;
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        arrayEl[3].addEventListener('click', (ev) => {
            let changerText = document.querySelector('.textDropdown'),
            thisEl = mapEl[3];
            changerText.innerHTML = thisEl;
            dropList.style = "opacity: 0";
            dropList.classList.remove('show');
        });
        // console.log(arrayEl[1]);
        // console.log(mapEl[0]);
});

