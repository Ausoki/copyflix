// Configuração da API do TMDB para o projeto Copyflix.
// Em produção, o ideal é manter essas chaves em um backend, mas
// para estudo/local tudo bem usar diretamente no front.

window.CopyflixConfig = {
  // URL base da API v3 do TMDB
  // (deixamos no /3/ genérico para poder usar vários endpoints: trending, movie/popular, tv/popular, etc)
  baseUrl: "https://api.themoviedb.org/3/",

  // Chave pública de API (v3 auth) - para chamadas somente de leitura
  apiKey: "3397ebd7286392e73314a9073a477fac",

  // Base de imagens. Você pode trocar o tamanho (w500, w780, original, etc)
  imageBaseUrl: "https://image.tmdb.org/t/p/w500",
};

