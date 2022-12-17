export async function getData(apiURL, req) {
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/${apiURL}${new URLSearchParams(req)}`
    );
  const data = response.json();
  return data;
}