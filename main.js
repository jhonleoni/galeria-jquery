$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp()
    })

    $('form').on('submit', function(e) {
      e.preventDefault()
      const enderecoImagemNova = $('#endereco-imagem-nova').val()
      const novoItem = $('<li style="display: none"></li>')
      $(`<img src="${enderecoImagemNova}" />`).appendTo(novoItem)
      $(`
        <div class="overlay-imagem-link">
            <a href="${enderecoImagemNova}" target="_blank" title="Ver imagem em tamanho real" a>
                Ver imagem em tamanho real
            </a>
        </div>
        `).appendTo(novoItem)
        $(novoItem).appendTo('ul')
        $(novoItem).fadeIn()
        $('#endereco-imagem-nova').val('')

    })
})
