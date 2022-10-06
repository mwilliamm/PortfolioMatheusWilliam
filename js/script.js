/*ENVIO DO FORMULARIO*/

var handleSubmit = (event) => {
    event.preventDefault();

    var Name = document.querySelector('input[name=name]').value;
    var Email = document.querySelector('input[name=email]').value;
    var Message = document.querySelector('textarea[name=message]').value; 

    fetch('https://api.sheetmonkey.io/form/eUWvbBLY14Gq4NpPcQkobT', {

        method: 'post',
        headers: {
            'Accept':'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ Name, Email, Message }),
    }).then(() => alert('Sua mensagem foi envida com sucesso!!')); 

    document.getElementById('name').value=''; 
    document.getElementById('email').value='';
    document.getElementById('message').value='';
}

document.querySelector('form').addEventListener('submit', handleSubmit);



