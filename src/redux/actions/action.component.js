/* This action creator returns an object with only 
type of action and no payload */
export const getNews = () => (
    {
        type: 'GET_NEWS'
    }
);
/*Note that we dispatch the action GET_NEWS from here but
the action NEWS_RECEIVED is dispatched from the sagas
 in the saga.js as that saga is reponsible for fetching news
 from the API of CNN.*/