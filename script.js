const newsContainer = document.getElementById("newsContainer");
const searchBar = document.getElementById("searchBar");
const loadMoreBtn = document.getElementById("loadMoreBtn");
const changeColorBtn = document.getElementById("changeColorBtn");

// Lista de notícias reais
const newsList = [
    { title: "OpenAI lança nova IA avançada!", description: "A OpenAI acaba de lançar um novo modelo de IA revolucionário.", link: "https://openai.com" },
    { title: "Bitcoin bate recorde histórico!", description: "O mercado de criptomoedas está em alta com novas valorizações do Bitcoin.", link: "https://www.coindesk.com" },
    { title: "Tesla anuncia novo carro elétrico!", description: "A Tesla revelou um novo modelo elétrico com autonomia estendida.", link: "https://www.tesla.com" },
    { title: "NASA descobre exoplaneta habitável!", description: "Astrônomos encontraram um novo planeta em zona habitável.", link: "https://www.nasa.gov" },
    { title: "Copa do Mundo: Brasil avança para final!", description: "A Seleção Brasileira venceu a semifinal e está na final da Copa.", link: "https://www.fifa.com" }
];

let displayedNews = 3; // Número inicial de notícias exibidas

// Função para carregar notícias
function loadNews() {
    newsContainer.innerHTML = "";

    newsList.slice(0, displayedNews).forEach(news => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");
        newsCard.innerHTML = `
            <h2>${news.title}</h2>
            <p>${news.description}</p>
            <a href="${news.link}" target="_blank">Ler mais</a>
        `;
        newsContainer.appendChild(newsCard);
    });

    if (displayedNews >= newsList.length) {
        loadMoreBtn.style.display = "none";
    }
}

// Evento de busca
searchBar.addEventListener("input", () => {
    const searchTerm = searchBar.value.toLowerCase();
    newsContainer.innerHTML = "";
    newsList.filter(news => news.title.toLowerCase().includes(searchTerm)).forEach(news => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("news-card");
        newsCard.innerHTML = `<h2>${news.title}</h2><p>${news.description}</p><a href="${news.link}" target="_blank">Ler mais</a>`;
        newsContainer.appendChild(newsCard);
    });
});

// Botão de "Ver Mais"
loadMoreBtn.addEventListener("click", () => {
    displayedNews += 2;
    loadNews();
});

// Troca de cores do fundo
changeColorBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    changeColorBtn.textContent = document.body.classList.contains("light-mode") ? "🌙 Modo Escuro" : "☀️ Modo Claro";
});

// Carrega as primeiras notícias ao iniciar
loadNews();
