import fetch from 'node-fetch';

export async function fetchData(url) {
  const fetchError = e => Error('Error occurred while fetching data', e);

  const response = await fetch(url).catch(e => {
    throw fetchError(e);
  });

  const data = await response.text().catch(e => {
    throw fetchError(e);
  });

  if (response.status !== 200) {
    throw fetchError(response);
  }

  return data;
}
