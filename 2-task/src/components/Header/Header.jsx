import styles from './Header.module.css'
import HeaderMenu from './HeaderMenu'
import logo from '../../assets/logo.svg'
import purpleball from '../../assets/purpleball.svg'
import redball from '../../assets/redball.svg'
import redballsmall from '../../assets/redballsmall.svg'
import { Telephone, Contacts } from '../utils'

const Header = () => {
  return (
    <>
      <img src={purpleball} className={'purple'} />
      <img src={redball} className={'redball'} />
      <img src={redballsmall} className={'redballsmall'} />
      <div className="light"></div>
      <div className="redLight"></div>
      <div className="slowLight"></div>
      <div className="maskBig"></div>

      <div className={styles.header}>
        <div className={styles.logoContent}>
          <a href="/">
            <img src={logo} alt="Logo" className={styles.logo} />
          </a>
          <div className={styles.logoText}>
            крупный интегратор CRM <br /> в Росcии и ещё 8 странах
          </div>
        </div>
        <HeaderMenu />
        <Telephone phone="+7 555 555-55-55" />
        <Contacts />
      </div>
    </>
  )
}

export default Header
