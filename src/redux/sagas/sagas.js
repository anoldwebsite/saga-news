/*
  We are telling Saga middleware to wait for action 'GET_NEWS'
   to get dispatched. Once the Saga notice an action 
   'GET_NEWS' being dispatched, it fires function fetchNews 
   which is an asynchronous function to the API of CNN news.
    Once, we get the news, we change it to json format.
    Next, we dispatch an action object to the store with type
    "NEWS_RECEIVED" and the news article in json format 
    as payload, which we assign to property json 
    i.e. json: news.articles. 
*/
/*
Generators are functions with a star (asterisk) attached to
 them and were part of Javascript ecosystem since Es6. In a 
 generator function, the function execution can be delayed. 
 They don’t run to completion after they are called like 
 normal functions do but instead can stop midway and continue
  and stop again and continue again. These are normally built
with yield expressions, where each yield is a stopping point.
 In Redux saga, yield is a built in function which allows 
 to use generator functions sequentially.
 */
import {put, takeLatest, all, call} from 'redux-saga/effects';

function* fetchNews(){
    try {
        const news = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
            .then(response => response.json());

        yield put(
            {
                type: 'NEWS_RECEIVED',
                json: news.articles
            }
        );
    } catch (error) {
        console.log(error)
    }
}

function* actionWatcher(){
    yield takeLatest('GET_NEWS', fetchNews);
};

export default function* rootSaga(){
    yield all(
        [
            call(actionWatcher)
        ]
    );
};



/*
 *  * takeEvery, a Saga effect, calls a generator function whenever a dispatched action matches
 *  the specified pattern or type.
 * 
 * takeLatest is also a Saga effect that allows only one fetchData task to run at any moment. 
 * 
 * If you use the "takeEvery", it allows multiple fetchData instances to be started 
 * concurrently. At a given moment, we can start a new fetchData task while there are 
 * still one or more previous fetchData tasks which have not yet terminated.
but If you use the "takeLatest", it allows only one fetchData task to run at any moment.
 If a previous task is still running when another fetchData task is started, 
 and the previous task will be automatically cancelled.
 */
