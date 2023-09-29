import axios from 'axios';

axios.defaults.baseURL =
  'https://pixabay.com/api/?q=cat&page=1&key=38733700-96318c553c84bf90463eb3752&image_type=photo&orientation=horizontal&per_page=12';

export const getItems = async (myState, setState, searchName, currentPage) => {
  // console.log(myState.images);
  try {
    setState({ isLoading: true });
    const response = await axios.get(axios.defaults.baseURL, {
      params: {
        q: searchName,
        per_page: 12,
        page: currentPage,
      },
    });
    setState({ isLoading: false });
    const images = response.data.hits;
    // console.log(response.data.total);
    // console.log(response.config.params.per_page);

    setState({
      totalPages: Number(
        Math.ceil(response.data.total / response.config.params.per_page)
      ),
    });
    if (currentPage === 1) {
      setState({ images: images });
    } else {
      setState({ images: [...myState.images, ...images] });
    }
    return images;
  } catch (error) {
    console.error(error);
  }
};
