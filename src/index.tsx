import ReactDOM from 'react-dom/client'
import 'assets/styles/root.scss'
import App from 'components/app'

const root = ReactDOM.createRoot(
  document.getElementById('app-root') as HTMLElement
)

root.render(<App />)

