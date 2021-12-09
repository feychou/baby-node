import axios from 'axios';

axios.get('http://google.com')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
 });
