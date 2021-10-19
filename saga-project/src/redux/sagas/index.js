import {put, takeEvery} from 'redux-saga/effects';

async function getUsers() {
   const request = await fetch('https://jsonplaceholder.typicode.com/users');
    return await request.json()
}

export function* workerSaga() {
    const data = yield getUsers();
    yield put({type: 'SET_USERS', payload: data})
}

export function* watchClickSaga() {
    yield takeEvery("CLICK", workerSaga);
}

export default function*  rootSaga() {
    yield watchClickSaga();
}
