import { ReactComponent as Logo } from 'assets/svgs/logo.svg'
import SvgImage from 'visual-components/svgImage'

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
        <div className='right-menu-item'>
          <SvgImage imageName='share' width={14} height={14} color='white' />
          <span>Share</span>
        </div>
        <div className='right-menu-item'>
          <SvgImage imageName='export' width={12} height={12} color='white' />
          <span>Export</span>
        </div>
        <div className='right-menu-item'>
          <SvgImage imageName='settings' width={12} height={12} color='white' />
          <span>Settings</span>
        </div>
      </div>
    </div>
  )
}

export default TopNavBar