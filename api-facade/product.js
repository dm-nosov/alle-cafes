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
