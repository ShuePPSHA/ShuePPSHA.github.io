function changeStyle (element) {
    element.classList.toggle("edited");
}



function deleteElement(id){
    const element = document.getElementById(id);
    element.remove();
}

 function myFunction(){
    const firstButton = document.querySelector('.btn');
    const secondButton = document.querySelector('.scndbtn');

    secondButton.addEventListener('click', () => {
        const text = document.getElementById("nt").textContent; 
        function addElement () {
            const extraInner = document.createElement('div');
            const date = new Date
            const id = date.toISOString();
            extraInner.className = "limit__inner";
            extraInner.id = id;
            const mainContainer = document.querySelector('.limit');
            mainContainer.appendChild(extraInner);
            extraInner.innerHTML = `<span class="close" onclick="deleteElement('${id}')"></span><form action=""><textarea class="notice" name="" id="" cols="30" rows="10" >('${text}')</textarea></form>`;
        }
        addElement()
    })

    firstButton.addEventListener('click', () => {
        const squares = document.querySelectorAll('.limit__inner');

        squares.forEach(square => {
            changeStyle(square);
        });
    })


}
myFunction()



