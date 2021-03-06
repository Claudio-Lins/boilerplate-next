///////////////////////////////////////////////////////////////////////////////////////

export function getURLAPIBoilerplate(path = "") {
  return `${
    process.env.API_URL_APIBOILERPLATE || "https://boilerplate-api-mongo.herokuapp.com"
  }${path}`;
}
export async function fetchAPIBoilerplate(path) {
  const requestUrl = getURLAPIBoilerplate(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////

export function getURLAPIRedeDois(path = "") {
  return `${
    process.env.API_URL_STRAPI || "https://cryptic-retreat-90035.herokuapp.com"
  }${path}`;
}
export async function fetchAPIRedeDois(path) {
  const requestUrl = getURLAPIRedeDois(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////

export function getURLAPILocal(path = "") {
  return `${process.env.API_URL_LOCAL || "http://localhosts:1337"}${path}`;
}
export async function fetchAPILocal(path) {
  const requestUrl = getURLAPILocal(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

///////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////

export function getURLAPISintonizat(path = "") {
  return `${"http://sintonizat-api.algoritmodigital.pt"}${path}`;
}
export async function fetchAPISintonizat(path) {
  const requestUrl = getURLAPISintonizat(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

///////////////////////////////////////////////////////////////////////////////////////
