//                      Variaveis
let input = document.querySelector('.currentInput')
let displayRes = document.querySelector('.answerScreen')
let buttons = document.querySelectorAll('button')
let erase = document.querySelector('#erase')
let clear = document.querySelector('#clear')
let evalue = document.querySelector('#evaluate')
let tagLastPressedClass, tagEvalue = false, tagPoint = true

let displaySup = []
// ----------------------------------------------------------------------------
//                  Botão de Limpar
clear.addEventListener("click", () => {

    displaySup = ['']
    displayRes.innerHTML = 0
    input.className = 'currentInput'
    displayRes.className = 'answerScreen'
    displayRes.style.color = "rgba(150, 150, 150, 0.87)"
})
// --------------------------------------------------------------------------
//                  Logica dos Botões
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        //          Botões com exeção do apagar
        if (!btn.id.match('erase') && !btn.id.match('evaluate')) {
            // Avaliação se essa operação esta ocorrendo apos uma igualdade
            if (tagEvalue) {
                input.innerHTML = displaySup
                tagEvalue = false
            }

            //  Reset de Clases dos visores
            input.className = 'currentInput'
            // input.style.color = "white"
            displayRes.className = 'answerScreen'
            displayRes.style.color = "rgba(150, 150, 150, 0.87)"


            //      Verificação da classe do botão pressionado.
            if (btn.className == 'num_btn') {
                //  Verifica se o botão digitado é um '.'
                if (btn.value == '.') {
                    if (tagPoint) {
                        displaySup.push(btn.value)
                        input.innerHTML = displaySup.join('')

                        if (btn.classList.contains('num_btn')) {
                            displayRes.innerHTML = eval(displaySup.join(''))
                        }
                        tagPoint = false
                    }
                } else {
                    // Escreve o numero se não for um ponto
                    displaySup.push(btn.value)
                    input.innerHTML = displaySup.join('')

                    if (btn.classList.contains('num_btn')) {
                        displayRes.innerHTML = eval(displaySup.join(''))
                    }
                }
            } else {
                //      Verificação da classe do botão pressionado anteriormente
                if (tagLastPressedClass == 'num_btn') {

                    displaySup.push(btn.value)
                    input.innerHTML = displaySup.join('')

                    // Reseta a tag de controle do ponto
                    tagPoint = true
                } else {
                    //  Apaga a operação anterior
                    displaySup.pop()
                    // input.innerHTML = displaySup.join('')

                    //  Escreve a operação nova
                    displaySup.push(btn.value)
                    input.innerHTML = displaySup.join('')
                }
            }
            tagLastPressedClass = btn.className
        }

        //          Botão de apagar
        if (btn.id.match('erase')) {
            displaySup.pop()
            input.innerHTML = displaySup.join('')
            displayRes.innerHTML = eval(displaySup.join(''))
        }

        //          Botão de igualdade
        if (btn.id.match('evaluate')) {
            tagEvalue = true

            input.className = 'answerScreen'
            displayRes.className = 'currentInput'
            displayRes.style.color = "white"

            displaySup = ['']
            displaySup.push(displayRes.textContent)

        }

        if (typeof eval(displaySup.join('')) == 'undefined') {
            displayRes.innerHTML = 0
        }
    })
})