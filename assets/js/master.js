const inp = document.querySelector('#inp')
const btn = document.querySelectorAll('div>button')
const result = document.querySelector('#equ')
function btnnum(x) {
    inp.value += x
    inp.classList.remove('border-red-600')
    inp.classList.add('border-green-700')
}
function equal() {
    if (inp.value == '') {
        alert('The Input Is Empty!!!')
    }
    else {
        inp.value = eval(inp.value)
    }

}
function del() {
    inp.value = ''
}
function backspace() {
    inp.value = inp.value.substring(0, inp.value.length - 1)
}