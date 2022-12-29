const accessTokenKey = "access_token";
export function getAccessToken() {
  return localStorage.getItem(accessTokenKey);
}
export async function login(email, password) {
  const response = await fetch("http://localhost:3001/api/v1/users/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (response.ok) {
    const { token } = await response.json();
    localStorage.setItem(accessTokenKey, token);
  }
  return response.ok;
}
export function isLoggedIn() {
  return !!localStorage.getItem(accessTokenKey);
}
