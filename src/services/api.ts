import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

async function getOptions() {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return options;
}

function errorResponse(error) {
  const { response } = error;
  let message = error;
  if (response) {
    const { data } = response;
    message = data.message;
  }
  return new Error(message);
}

export async function get(url, headers = {}) {
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const response = await api.get(url, options);
    return response;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function post(url, params = {}, headers = {}) {
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const response = await api.post(url, params, options);
    return response;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function put(url, params = {}, headers = {}){
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const { data } = await api.put(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}

export async function patch(url, params = {}, headers = {}) {
  try {
    const getToken = await getOptions();
    const options = { ...getToken, ...headers };
    const { data } = await api.patch(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
}
