
function Service() {
    const name = document.querySelector('#name').value;
    const name1 = name.replace(/\s+/g, '');
    const name2 = name1.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    const name3 = name2.toLowerCase();
    const name4 = name3.charAt(0).toUpperCase() + name3.slice(1);
    let summ = document.getElementById('nameChat');
    summ.value = name4;
    summ.type = "text";
    console.log(summ);
    const page = document.querySelector('#page').value;
    const img = document.getElementById('picChat');
    img.src = page;
    img.style.visibility = "visible";
    console.log(img);

    const comment = document.querySelector('#comment').value;
    const comment1 = comment.replace(/viagra/gi, "***");
    const comment2 = comment1.replace(/xxx/gi, "***");
    let text = document.getElementById('textChat');
    text.value = comment2;
    text.type = "text";
    console.log(comment2);
    const str1 = name.replace(/<\/?[a-zA-Z]+>/gi,'');
    console.log(str1);
};