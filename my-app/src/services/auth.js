export async function signUp(name, email, password) {
  const data = { name, email, password };
  const response = await fetch("http://localhost:4000/user/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export async function signIn(email, password) {
  const data = { email, password };
  const response = await fetch("http://localhost:4000/user/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
