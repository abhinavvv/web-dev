console.log("Hello world!!");

const form = document.querySelector('form');
var x = 0;
form.addEventListener('submit', (event) => {
    x++;
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name');
    const content = formData.get('content');

    console.log(formData.getAll('name'));
    console.log(content);
    console.log(event);
    console.log(x);
});