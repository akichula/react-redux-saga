import {put, takeEvery, call, fork} from 'redux-saga/effects';

async function getData(pattern) {
   const request = await fetch(`https://jsonplaceholder.typicode.com/${pattern}`);
    return await request.json()
}

export function* loadUsers() {
    const users = yield call(getData, 'users');
    yield put({type: 'SET_USERS', payload: users})
}

export function* loadTodos() {
    const todos = yield call(getData, 'todos');
    yield put({type: 'SET_TODOS', payload: todos})
}

export function* workerSaga() {
    yield fork(loadUsers);
    yield fork(loadTodos);
}

export function* watchLoadDataSaga() {
    yield takeEvery('LOAD_DATA', workerSaga);
}

export default function*  rootSaga() {
    yield fork(watchLoadDataSaga);
}
