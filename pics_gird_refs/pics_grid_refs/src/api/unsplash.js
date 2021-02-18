import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID R2b5Rrf93SbCBUDvQCkqCG1UaPFc5u4RErQO4aMiCK8',
  },
});
