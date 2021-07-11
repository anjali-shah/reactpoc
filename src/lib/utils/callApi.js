import axios from 'axios';

async function callApi(method, url, data) {
  let queryResult;
  console.log('------', method);
  let header;
  try {
      header = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
    const fullurl = 'https://jsonplaceholder.typicode.com/posts?userId=1';
    queryResult = await axios({
      method,
      url: fullurl,
      ...data,
      headers: header,
    }).then((response) => {
      console.log('object',  queryResult);
      return response;
    });
  } catch (error) {
    return { status: 'error', message: 'This is a error message' };
  }
  return queryResult;
}

export default callApi;

