export async function updateProduct(websiteId, productId, content) {
  const response = await fetch(`/api/ws/${websiteId}/products/${productId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  return await response.json();
}

export async function createProduct(websiteId, categoryId, content) {
  const response = await fetch(
    `/api/ws/${websiteId}/categories/${categoryId}/products/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(content),
    }
  );
  return await response.json();
}

export async function removeProduct(websiteId, categoryId, productId) {
  const response = await fetch(
    `/api/ws/${websiteId}/categories/${categoryId}/products/${productId}/`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
}
