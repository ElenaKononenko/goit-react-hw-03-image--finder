import axios from 'axios';

const getFetch = ({ searchQuery, perPage = 3, page = 1 }) => {
  axios.defaults.baseURL = 'https://pixabay.com/api';
  let key = `19779483-2216087af4667397a75e88e7b`;
  let url = `/?q=${searchQuery}&page=${page}&per_page=${perPage}&image_type=photo&orientation=horizontal&key=${key}`;

  return axios.get(url).then(({ data }) => {
    return data.hits;
  });
};
export default { getFetch };
