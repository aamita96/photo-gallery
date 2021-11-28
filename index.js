const items = document.querySelectorAll('.item');
const backDrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal .close');


items.forEach(item => {
    item.addEventListener('click', () => {
        backDrop.classList.add('active');
        modal.classList.add('active');

        const clonedItem = item.cloneNode(true);
        clonedItem.firstElementChild.style = "width:100%;max-width:500px;margin-top:5%"
        modal.appendChild(clonedItem);

        // Close modal class

        modalClose.addEventListener('click', (e) => {
            modal.classList.remove('active');
            backDrop.classList.remove('active');
            modal.removeChild(clonedItem)
            // console.dir(modal);
            e.stopImmediatePropagation();
            /* 
            This modal is getting consoled multiple times which may cause performance issue.
             */
        });
    });
});