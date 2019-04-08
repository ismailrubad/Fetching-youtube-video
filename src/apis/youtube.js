import axios from 'axios';

const KEY = 'AIzaSyCD-Lns6ifoaLLOnlNscswZWR5o351xwPM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});