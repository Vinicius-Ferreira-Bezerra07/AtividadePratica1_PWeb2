//                      Variaveis
let input = document.querySelector('.currentInput')
let res = document.querySelector('.answerScreen')
let buttons = document.querySelectorAll('button')
let erase = document.querySelector('#erase')
let clean = document.querySelector('#clear')
let evalue = document.querySelector('#evaluate')

let resCurrent = []
// ----------------------------------------------------------------------------
//                  Botão de Limpar
clean.addEventListener("click", () => {

    resCurrent = ['']
    res.innerHTML = 0
    input.className = 'currentInput'
    res.className = 'answerScreen'
    res.style.color = "rgba(150, 150, 150, 0.87)"
})
// --------------------------------------------------------------------------
//                  Logica dos Botões
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        //          Botões em geral
        if (!btn.id.match('erase')) {
            resCurrent.push(btn.value)
            input.innerHTML = resCurrent.join('')

            if (btn.classList.contains('num_btn')) {
                res.innerHTML = eval(resCurrent.join(''))
            }
        }

        //          Botão de apagar
        if (btn.id.match('erase')) {
            resCurrent.pop()
            input.innerHTML = resCurrent.join('')
            res.innerHTML = eval(resCurrent.join(''))
        }

        //          Botão de igualdade
        if (btn.id.match('evaluate')) {
            input.className = 'answerScreen'
            res.className = 'currentInput'
            res.style.color = "white"
        }

        if (typeof eval(resCurrent.join('')) == 'undefined') {
            res.innerHTML = 0
        }
    })
})
console.log("Teste Apartir daqui...");