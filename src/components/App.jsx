import { Provider } from 'react-redux';
import store, { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Phonebook } from './Phonebook/Phonebook';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Phonebook />
      </PersistGate>
    </Provider>
  );
};
