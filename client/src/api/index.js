export async function getData(apiURL, req) {
  console.log(new URLSearchParams(req))
  const response = await fetch(
    `${process.env.REACT_APP_SERVER_URL}/api/${apiURL}${new URLSearchParams(req)}`
    );
  const data = response.json();
  return data;
}