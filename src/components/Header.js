import logo from '../images/logo.svg'

const Header = () => {
  return (
    <div className='header'>
      <div className='header__nav-container'>
        <img src={logo} className='header__logo' alt='Логотип' />
        
      </div>
    </div>
  )
}

export default Header