const $ = document.querySelector.bind(document)

$('#form').addEventListener('submit', e => {
    e.preventDefault()
    const name = document.querySelector('#idName')
    const email = document.querySelector('#idEmail')
    const nasc = document.querySelector('#idNasc').value

    console.log(nasc)

    function getAge(nasc) {
        const today = new Date()
        const birthDate = new Date(nasc)
        let age = today.getFullYear() - birthDate.getFullYear()
        const m = today.getMonth() - birthDate.getMonth()

        if(m<0||(m===0&&today.getDate()<birthDate.getDate())){
            m--
        }
        return age
    }

    $('#form').style.display = 'none'
    const result = document.querySelector('#result')

    result.style.display = "block"

    result.innerHTML = `
    <h2>${name.value}</h2>
    <p>E-mail: <i>${email.value}</i></p>
    <p>Data de nascimento: <b>${nasc}</b></p>
    <p>Idade: <b>${getAge(nasc)}</b> anos.</p>
    <a href='index.html' id="back">Voltar<a/>
    `
})