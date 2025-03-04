import axios from 'axios';

export default async function getInstagramPosts(response, setResponse) {
    const options = {
        method: 'GET',
        url: 'https://graph.instagram.com/me/media',
        params: {
            fields: 'id,caption,media_type,media_url,thumbnail_url,permalink',
            access_token: '$ACCESS_TOKEN',
        },
        headers: { 'User-Agent': 'insomnia/10.1.1' },
    };

    axios
        .request(options)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.error(error);
        });
}
