import axios from 'axios';

const getFetch = ({ searchQuery = '', perPage = 3, page = 1 }) => {
  let key = `19779483-2216087af4667397a75e88e7b`;
  let baseUrl = `https://pixabay.com/api/`;
  let params = `?key=${key}&q=${searchQuery}&per_page=${perPage}&page=${page}`;
  let url = baseUrl + params;

  return axios.get(url).then(({ data }) => {
    return data.hits;
  });
};
export default { getFetch };
