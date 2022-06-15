const text = document.querySelector('#text')
text.classList.add('hide')

function mouseOver(){
    text.classList.remove('hide')
}

const html =  document.querySelector('#html')
const css =  document.querySelector('#css')
const sass =  document.querySelector('#sass')
const javascript =  document.querySelector('#javascript')



function mouseHtml(){
    text.style.fontSize = "3vh"
    text.innerHTML = "HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web."
    text.classList.add('hide');
    text.style.background = '#FF651E'
}
function mouseCss(){
    text.style.fontSize = "3vh"
    text.innerHTML = "CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou em XML (incluindo várias linguagens em XML como SVG, MathML ou XHTML)."
    text.classList.add('hide')
    text.style.background = '#0096DC'
}
function mouseSass(){
    text.style.fontSize = "3vh"
    text.innerHTML = "SASS é uma linguagem de extensão do CSS. A sua ideia é adicionar recursos especiais como variáveis, mixins, funções e operações etc. Torna o processo de desenvolvimento mais simples e eficiente."
    text.classList.add('hide')
    text.style.background = '#CC6699'

    
}
function mouseJavascript(){
    text.style.fontSize = "3vh"
    text.innerHTML = "JAVASCRIPT é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."
    text.classList.add('hide')
    text.style.background = '#FFC107'
}



html.addEventListener('mouseover', mouseHtml)
html.addEventListener('mouseout', mouseOver)

css.addEventListener('mouseover', mouseCss)
css.addEventListener('mouseout', mouseOver)

sass.addEventListener('mouseover', mouseSass)
sass.addEventListener('mouseout', mouseOver)

javascript.addEventListener('mouseover', mouseJavascript)
javascript.addEventListener('mouseout', mouseOver)


