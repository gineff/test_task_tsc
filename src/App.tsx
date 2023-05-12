import { Provider } from 'react-redux'
import { Header } from '@containers/Header'
import { Pattern } from '@containers/Pattern'
import { Instruments } from '@containers/Instruments'
import { store } from '@store/index'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Pattern />
      <Instruments />
    </Provider>
  )
}

export { App }
