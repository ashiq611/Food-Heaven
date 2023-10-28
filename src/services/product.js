const baseUrl = "http://127.0.0.1:8000/api";


export const getAllProducts = async () => {
   const res = await fetch(`${baseUrl}/products/`)
     return await res.json();
   
}


export const getAllProductById = async (id) => {
  const res = await fetch(`${baseUrl}/products/${id}/`);
  return await res.json();
}


export const removeProduct = async (id) => {
  let token = localStorage.getItem('token') //backend knows which admin dlt
  return await fetch(`${baseUrl}/products/${id}/`, {
    method: "DELETE",
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  
};