const baseUrl = "http://127.0.0.1:8000/api/";

export const getAllProducts = async () => {
   return fetch(`${baseUrl}/products/`)
    .then(res => res.json())
}