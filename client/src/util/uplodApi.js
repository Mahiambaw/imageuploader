export async function imageUploader(file) {
  const response = await fetch("http://localhost:3001/api/v1/images", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ image: "C:\fakepath\bottle-gddc56fbc3_1920.png" }),
  });
  console.log(response);
  return response.ok;
}
