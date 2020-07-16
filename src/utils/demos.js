import axios from 'axios';
import random from 'faker/lib/random';

export const userConfig = () => {
  axios
  .get('https://e1b700ba-5024-427d-bccd-b2d58c315be7.mock.pstmn.io/thermelgy/userconfig')
  .then(res => {
          console.log(res.data)
          localStorage.setItem('user', JSON.stringify(res.data[1]))
          return res.data
      }
  ).then(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
  })
  .catch(err => console.log(err));
}

export const randomNum = (min = 0, max = 1000) => {
  return random().number({ min, max });
};
