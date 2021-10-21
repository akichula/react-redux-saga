import {put, takeEvery, call} from 'redux-saga/effects';

async function getData(pattern) {
   const request = await fetch(`https://jsonplaceholder.typicode.com/${pattern}`);
    return await request.json()
}

export function* workerSaga() {

    // For best result use call() func with async function
    const users = yield call(getData, 'users');
    const todos = yield call(getData, 'todos');
    yield put({type: 'SET_USERS', payload: users})
    yield put({type: 'SET_TODOS', payload: todos})
}

export function* watchClickSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export default function*  rootSaga() {
    yield watchClickSaga();
}
