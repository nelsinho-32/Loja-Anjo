const url = 'file:///C:/Users/nelsi/OneDrive/Documentos/projeto%20loja%20de%20roupa%20pquena/loja_anjo_camisas.html'
const camisas = document.querySelector('#camisas')

function openInNewTab(url) {
     const win = window.open(url, 'blank')
   win.focus()
}

camisas.addEventListener('click', () => {
    openInNewTab(url)
})



