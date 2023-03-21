import { setupStore } from 'src/app/store';
import reducer, {
  currentJoke,
  fetchByCategory,
  fetchByText,
  fetchRandomJoke,
} from '../features/joke';

describe('jokeSlice', () => {
  const initialState = {
    joke: {
      id: null,
      value: '',
      url: '',
      categories: [],
      created_at: '',
      icon_url: '',
      updated_at: '',
      status: '',
      msg: '',
    },
    categories: [],
  };

  const store = setupStore(initialState);

  test('returns the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual({
      id: null,
      value: '',
      url: '',
      categories: [],
      created_at: '',
      icon_url: '',
      updated_at: '',
      status: '',
      msg: '',
    });
  });

  test('gets Random joke', async () => {
    const action = { type: fetchRandomJoke.fulfilled.type };
    const state = reducer(initialState, action);
    expect(state.status).toEqual('success');
  });

  test('gets joke with text >3 && <120', async () => {
    await store.dispatch(fetchByText('home'));
    const state = store.getState();
    const joke = currentJoke(state);
    expect(joke.value).not.toEqual('');
    expect(joke.msg).toEqual('Successfuly found a joke with your desired text!');
    expect(joke.status).toEqual('success');
  });

  test('doesnt get a joke with text >3 && <120', async () => {
    await store.dispatch(fetchByText('adasdasdasdasda'));
    const state = store.getState();
    const joke = currentJoke(state);
    expect(joke.value).not.toEqual('');
    expect(joke.msg).toEqual('There is no joke containing these words. 😕');
    expect(joke.status).toEqual('warning');
  });

  test('doesnt get a joke with text <3', async () => {
    await store.dispatch(fetchByText(''));
    const state = store.getState();
    const joke = currentJoke(state);
    expect(joke.value).toEqual('');
    expect(joke.msg).toEqual(
      'Wrong input. The text must be at least 3 characters long and no longer than 120 characters.',
    );
    expect(joke.status).toEqual('error');
  });

  test('gets joke in category', async () => {
    await store.dispatch(fetchByCategory('movie'));
    const state = store.getState();
    const joke = currentJoke(state);
    expect(joke.value).not.toEqual('');
    expect(joke.msg).toEqual('Successfuly found a joke in movie category!');
    expect(joke.status).toEqual('success');
  });
});
