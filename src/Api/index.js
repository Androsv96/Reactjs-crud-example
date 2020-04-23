export default function apiCall(url, method, data) {
  if (data) {
    return fetch(url, {
      method,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json());
  } else {
    return fetch(url, {
      method
    }).then(response => response.json());
  }
}
