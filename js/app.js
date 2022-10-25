const addButton = document.getElementById('addButton');
const itemInput = document.getElementById('itemInput');
const ul = document.getElementById('todoList');
const clr = document.getElementById('clearButton');

clr.addEventListener('click', () => {
    localStorage.clear();
})


addButton.addEventListener('click', () => {
    let li = document.createElement('li');
    const lable = document.createElement('lable');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    li.classList.add('completed');
    li.classList.add('well');
    btn1.classList.add('btn', 'btn-success');
    btn2.classList.add('btn', 'btn-danger');
    lable.innerHTML = itemInput.value;
    btn1.innerHTML = "Complete";
    btn2.innerHTML = "Delete";
    li.append(lable);
    li.append(btn1, btn2);
    ul.append(li);
    itemInput.value = "";
    // ****************************** اضافه کردن localStorage ***************************************
    let ar = [];
    if (localStorage.getItem('lis') == null) {
        ar.push({ text: lable.innerText, status: btn1.innerText })
        localStorage.setItem('lis', JSON.stringify(ar));
    }
    else {
        ar = JSON.parse(localStorage.getItem('lis'));
        ar.push({ text: lable.innerText, status: btn1.innerText })
        localStorage.setItem('lis', JSON.stringify(ar));
    }
    /******************************************************************************* */


    btn1.addEventListener('click', () => {
        let ar = [];

        ar = JSON.parse(localStorage.getItem('lis'));
        btn1.innerHTML = "Incomplete";
        lable.classList.add('uncompleted');
        const index = ar.map(e => e.text).indexOf(lable.innerText);
        if (index > -1) { // only splice array when item is found
            ar[index].status = "Incomplete"; // 2nd parameter means remove one item only
            console.log(ar)
        }
        localStorage.setItem('lis', JSON.stringify(ar));
    })



    btn2.addEventListener('click', () => {
        let ar = [];
        ar = JSON.parse(localStorage.getItem('lis'));
        const index = ar.map(e => e.text).indexOf(lable.innerText);
        if (index > -1) { // only splice array when item is found
            ar.splice(index, 1); // 2nd parameter means remove one item only
        }
        localStorage.setItem('lis', JSON.stringify(ar));
        li.remove();
    })



})



window.addEventListener('load', () => {
    let ar = [];
    ar = JSON.parse(localStorage.getItem('lis'));
    ar.forEach(element => {
        let li = document.createElement('li');
        const lable = document.createElement('lable');
        const btn1 = document.createElement('button');
        const btn2 = document.createElement('button');
        li.classList.add('completed');
        li.classList.add('well');
        btn1.classList.add('btn', 'btn-success');
        btn2.classList.add('btn', 'btn-danger');
        lable.innerHTML = element.text;
        btn1.innerHTML = element.status;
        if (element.status == "Incomplete") {
            lable.classList.add('uncompleted');
        }
        btn2.innerHTML = "Delete";
        li.append(lable);
        li.append(btn1, btn2);
        ul.append(li);



        btn1.addEventListener('click', () => {
            let ar = [];

            ar = JSON.parse(localStorage.getItem('lis'));
            btn1.innerHTML = "Incomplete";
            lable.classList.add('uncompleted');
            const index = ar.map(e => e.text).indexOf(lable.innerText);
            if (index > -1) { // only splice array when item is found
                ar[index].status = "Incomplete"; // 2nd parameter means remove one item only
                console.log(ar)
            }
            localStorage.setItem('lis', JSON.stringify(ar));
        })



        btn2.addEventListener('click', () => {
            let ar = [];
            ar = JSON.parse(localStorage.getItem('lis'));
            const index = ar.map(e => e.text).indexOf(lable.innerText);
            if (index > -1) { // only splice array when item is found
                ar.splice(index, 1); // 2nd parameter means remove one item only
            }
            localStorage.setItem('lis', JSON.stringify(ar));
            li.remove();
        })
    });
})


itemInput.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        addtodo();
        addlocal();
    }
})


function addtodo() {
    let li = document.createElement('li');
    const lable = document.createElement('lable');
    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    li.classList.add('completed');
    li.classList.add('well');
    btn1.classList.add('btn', 'btn-success');
    btn2.classList.add('btn', 'btn-danger');
    lable.innerHTML = itemInput.value;
    btn1.innerHTML = "Complete";
    btn2.innerHTML = "Delete";
    li.append(lable);
    li.append(btn1, btn2);
    ul.append(li);
    itemInput.value = "";


}

function addlocal() {
    // ****************************** اضافه کردن localStorage ***************************************
    let ar = [];
    if (localStorage.getItem('lis') == null) {
        ar.push({ text: lable.innerText, status: btn1.innerText })
        localStorage.setItem('lis', JSON.stringify(ar));
    }
    else {
        ar = JSON.parse(localStorage.getItem('lis'));
        ar.push({ text: lable.innerText, status: btn1.innerText })
        localStorage.setItem('lis', JSON.stringify(ar));
    }
    /******************************************************************************* */
}