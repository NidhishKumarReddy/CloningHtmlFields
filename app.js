let body = document.querySelector('body');
let section = document.querySelector('.section');
let add = document.querySelector('#add');
let remove = document.querySelector('#remove');

let cnt = 1;
add.addEventListener('click', function () {
    cnt++;
    let newSection = document.createElement('div');
    let newName = document.createElement('input');
    let newPass = document.createElement('input');
    newSection.setAttribute('class', 'section');
    newName.setAttribute('type', 'text');
    newName.setAttribute('name', 'name' + cnt);
    newName.setAttribute('id', 'name' + cnt);
    newName.setAttribute('placeholder', 'name');
    newPass.setAttribute('type', 'password');
    newPass.setAttribute('name', 'pass' + cnt);
    newPass.setAttribute('id', 'pass' + cnt);
    newPass.setAttribute('placeholder', 'password');
    newSection.append(newName);
    newSection.append(newPass);
    body.append(newSection);
});

remove.addEventListener('click', function () {
    if (cnt > 1) {
        cnt--;
        let sec = document.querySelectorAll('.section')[cnt];
        sec.remove();
    }
});