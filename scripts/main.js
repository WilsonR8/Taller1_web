var counter = 1;
setInterval(function () {
    document.getElementById('radiobtn' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 5000);


const lutsbtn = document.querySelectorAll('.lutbtn1');
const lutimgs = document.querySelector('.lutimg');

function selectlut(elem,i){
    function lutinput () {
            
        switch (i) {
            case 0:
                lutimgs.classList.remove('lutimg--2')
                lutimgs.classList.remove('lutimg--3')
                lutimgs.classList.remove('lutimg--4')
                lutimgs.classList.add('lutimg--1');
                break;
            case 1:
                lutimgs.classList.remove('lutimg--1')
                lutimgs.classList.remove('lutimg--4')
                lutimgs.classList.remove('lutimg--3')
                lutimgs.classList.add('lutimg--2')
                break;
        
            case 2:
                lutimgs.classList.remove('lutimg--1')
                lutimgs.classList.remove('lutimg--2')
                lutimgs.classList.remove('lutimg--4')
                lutimgs.classList.add('lutimg--3')
                break;

            case 3:
                lutimgs.classList.remove('lutimg--1')
                lutimgs.classList.remove('lutimg--2')
                lutimgs.classList.remove('lutimg--3')
                lutimgs.classList.add('lutimg--4')
                break;
            
    }

    }
    elem.addEventListener('click',lutinput);
}
    
lutsbtn.forEach(selectlut);