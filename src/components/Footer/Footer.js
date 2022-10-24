import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer__about'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <span className='footer__separator' />
      <div className='footer__container'>
        <p className='footer__year'>&copy; 2022</p>
        <ul className='footer__nav-box'>
          <li className='footer__nav-item'>
            <a href='/' className='footer__nav-link'>Яндекс.Практикум</a>
          </li>
          <li className='footer__nav-item'>
            <a href='/' className='footer__nav-link'>Github</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer