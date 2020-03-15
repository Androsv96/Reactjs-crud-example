export default function apiCall(url, method, data) {
  return fetch(url, {
    method
  }).then(response => response.json());
}
