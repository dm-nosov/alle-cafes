export async function saveContent(websiteId, content) {
  const response = await fetch(`/api/ws/${websiteId}/editor-content`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(content),
  });
  // A special delay to make the save operation noticeable
  await new Promise((resolve) => setTimeout(resolve, 500));
}
