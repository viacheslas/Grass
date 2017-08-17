;(function () {
    let doc = window.document;
    let header = doc.getElementById('header');
    let btn = doc.getElementById('btn');
    let add = doc.getElementById('add');
    // let field = doc.getElementById('field');
    console.dir(header);

    let changeBg = function () {
        header.style.backgroundColor = 'red';
        console.log(this);
    };
    // console.log(this);


    btn.addEventListener('click', changeBg);
    add.addEventListener('click', function () {
        // let block = doc.createElement('h1');
        // block.innerHTML = "<span>the title</span>";
        // header.appendChild(block)
        // header.innerHTML = "<h1>title</h1>"
        let testObj ={
            age: 22,
            occup: 'manager'
        };

        localStorage.setItem('KeyString', JSON.stringify(testObj));
        // sessionStorage.setItem('KeyString', 'DataString');
    });
    // field.addEventListener('focus', changeBg)
    //

})();


