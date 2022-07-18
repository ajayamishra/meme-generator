import { ReactComponent as Logo } from 'assets/svgs/logo.svg'

import './styles/_top-bar.scss'

const TopNavBar = () => {
  return (
    <div className='top-navbar-container'>
      <div className='left-container'>
        <div className="logo-container">
          <Logo />
        </div>
      </div>
      <div className='right-container'>
        <div className='right-menu-item'>Share</div>
        <div className='right-menu-item'>Upload</div>
        <div className='right-menu-item'>Settings</div>
      </div>
    </div>
  )
}

export default TopNavBar