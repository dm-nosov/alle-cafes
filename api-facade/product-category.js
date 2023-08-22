export async function createProductCategory(websiteId, categoryContent) {
  const response = await fetch(`/api/ws/${websiteId}/categories/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryContent),
  });
  return await response.json();
}

export async function removeProductCategory(websiteId, categoryId) {
  const response = await fetch(
    `/api/ws/${websiteId}/categories/${categoryId}/`,
    {
      method: "DELETE",
    }
  );
  return await response.json();
}
