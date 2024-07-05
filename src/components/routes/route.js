const BASE_URL = "https://jsonplaceholder.typicode.com";

const route = async (path) => {
  const url = `${BASE_URL}/${path}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erro ao carregar dados do artigo");
  }
  return await response.json();
};

export default route;
