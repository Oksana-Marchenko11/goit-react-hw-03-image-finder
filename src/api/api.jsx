import axios from 'axios';
import { App } from 'components/App';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=38733700-96318c553c84bf90463eb3752&image_type=photo&orientation=horizontal&per_page=12';

export const getItems = async (setState, searchName) => {
  try {
    const response = await axios.get(axios.defaults.baseURL, {
      params: {
        q: searchName,
        per_page: 12,
        page: 1,
      },
    });
    const images = response.data.hits;
    console.log(images);
    setState({ images: images });

    return images;
  } catch (error) {
    console.error(error);
  }
};
