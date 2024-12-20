// Função para renderizar as notícias filtradas
function renderNoticias(filtradas) {
    noticiasContainer.innerHTML = ''; // Limpa os resultados antes de renderizar
    if (filtradas.length === 0) {
        noResultsMessage.style.display = 'block'; // Exibe a mensagem de "Nenhum resultado"
    } else {
        noResultsMessage.style.display = 'none'; // Esconde a mensagem de "Nenhum resultado"
        filtradas.forEach(noticia => {
            const noticiaElement = document.createElement('div');
            noticiaElement.classList.add('noticia-container');
            noticiaElement.innerHTML = `
                <div class="tag">${noticia.tag}</div> <br> <br>
                <a id="noticia-container" href="${noticia.link}" target="_blank">
                    <p>${noticia.content}</p>
                </a>
                <div class="noticia-footer">
                    <div class="categoria">${noticia.category}</div>
                    <div class="tempo">${noticia.date}</div>
                </div>
            `;
            noticiasContainer.appendChild(noticiaElement);
        });
    }
}

// Função para filtrar notícias com base no conteúdo da div `.noticia-container`
function filtrarNoticias() {
    const query = searchInput.value.toLowerCase();

    if (query === '') {
        // Mostra todas as notícias se a pesquisa estiver vazia
        renderNoticias(noticias);
    } else {
        // Filtra as notícias que contêm a pesquisa em qualquer campo
        const filtradas = noticias.filter(noticia => {
            const allContent = `
                ${noticia.tag} 
                ${noticia.content} 
                ${noticia.category} 
                ${noticia.date}
            `.toLowerCase();
            return allContent.includes(query);
        });

        renderNoticias(filtradas); // Renderiza os resultados filtrados
    }
}

// Escuta mudanças no input de pesquisa
searchInput.addEventListener('input', filtrarNoticias);
