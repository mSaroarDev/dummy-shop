const baseURL = "https://fakestoreapi.com";

export async function userLogin(username, password) {
  const res = await fetch(baseURL + "/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  });

  const data = await res.json();

  return data;
}

export async function getProducts() {
  const res = await fetch(baseURL + "/products");
  const data = await res.json();
  return data;
}

export async function productById(id) {
  const res = await fetch(baseURL + "/products/" + id);
  const data = await res.json();
  return data;
}
