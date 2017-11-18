import { take, call, put } from 'redux-saga/effects'

async function readFile(file) {
  const reader = new FileReader()

  await new Promise(resolve => {
    reader.addEventListener('load', resolve, false)
    reader.readAsDataURL(file)
  })
  
  return reader.result
}

function* uploadFile(file) {
  const result = yield call(readFile, file)

  yield put({type: 'DROP_FILE_SUCCESS', file: result})
}

function* project031Saga() {
  while(true) {
    const {files} = yield take('DROP_FILE_REQUEST')
    yield call(uploadFile, files[0])
  }
}

export default project031Saga
