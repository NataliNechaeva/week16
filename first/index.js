let mas = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"] // массив картинок
let to = Math.round((Math.random() * 5 + 0));  // Счетчик, указывающий на порядковый номер массива

function Service() {
    const name = document.querySelector('#name').value;
    const name1 = name.replace(/\s+/g, '');
    const name2 = name1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const name3 = name2.toLowerCase();
    const name4 = name3.charAt(0).toUpperCase() + name3.slice(1);
    let summ = document.getElementById('nameChat');
    //summ.value = name4;
    summ.type = "text";
    console.log(summ);
    const page = document.querySelector('#page').value;
    const img = document.getElementById('picChat');

    if (page == "") {
        img.src = mas[to]; 
        console.log(to);
    }
    else {
        img.src = page;
    }
    img.style.visibility = "visible";
    const comment = document.querySelector('#comment').value;
    const comment1 = comment.replace(/viagra/gi, "***");
    const comment2 = comment1.replace(/xxx/gi, "***");
    let text = document.getElementById('textChat');
    text.value = comment2;
    text.type = "text";
    console.log(comment2);
    const str1 = name.replace(/<\/?[a-zA-Z]+>/gi,'');
    console.log(str1);

    let now = new Date();
    console.log(now.getDay()); 
    document.getElementById('dateMessage').innerHTML = now.getDate() + "." + (now.getMonth()+1) + "." + now.getFullYear()+"  "+ now.getHours() +":"+ now.getMinutes() +":"+ now.getSeconds() ;
    
    const show = document.getElementById('showed');
    console.log(show.checked);
    if (show.checked) {
        summ.value = name4;
    }
    else {
        summ.value = "username";
    }
};


