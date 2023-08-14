export async function updateWebsiteSettings(websiteId, content) {
  const response = await fetch(`/api/ws/${websiteId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  return await response.json();
}

export async function createWebsite(content) {
  const response = await fetch(`/api/ws/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  return await response.json();
}

export async function removeWebsite(websiteId) {
  const response = await fetch(`/api/ws/${websiteId}/`, {
    method: "DELETE",
  });
  return await response.json();
}
