export async function getData(apiURL) {
  const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/${apiURL}`);
  const date = response.json();
  return date;
}