const MyReducer = (state = {}, action) => {
    switch(action.type) {
        case 'GET_NEWS':
            return {
                ...state,
                loading: true
            }
        case 'NEWS_RECEIVED':
            return{
                ...state,
                news: action.json,
                loading: false //Already got news, so no spinner
            }
        default:
            return state;
    }
};
export default MyReducer;
/*
Reducers are kind of state updaters. 
When action has been dispatched is of type GET_NEWS, we create
a new property loading in the boject store={} that we got from
the props. After creating the new property, store={loading: true}, 
we dispatch this new object to update the state. But before this
we have the middleware Redux saga in the way which issues API
calls and fetch the news for our app from the server. Once, the
Redux sagas fetch the news, the action 'NEWS_RECEIVED' is fired
where we insert a new property news and set it to action.json; 
we also set the loading to false and send this new object.
*/