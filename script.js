document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    // Pegando os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Validando os campos
    if (!nome || !email || !mensagem) {
        alert('Todos os campos são obrigatórios!');
        return;
    }

    // Exibindo os dados (pode ser enviado para um servidor real)
    alert(`Mensagem enviada por: ${nome}\nEmail: ${email}\nMensagem: ${mensagem}`);

    // Limpando o formulário
    document.getElementById('formContato').reset();
});
