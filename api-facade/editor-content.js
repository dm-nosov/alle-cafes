export async function saveContent(websiteId, content) {
  const response = await fetch(`/api/ws/${websiteId}/editor-content`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
}
