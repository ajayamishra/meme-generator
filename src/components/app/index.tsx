import Content from 'components/layout/content'
import TopNavBar from 'components/navigation/top-bar'

import 'assets/styles/root.scss'

function App() {
  return (
    <div className="app-container">
      <TopNavBar />
      <Content />
    </div>
  )
}

export default App