import styles from './Header.module.css'
import { NavLink } from 'react-router-dom'
const HeaderMenu = () => {
  return (
    <>
      <div className={styles.menu}>
        <div className={styles.menuItem}>
          <NavLink to="/" className={styles.menuLink}>
            Услуги
          </NavLink>
        </div>
        <div className={styles.menuItem}>
          <NavLink to="/" className={styles.menuLink}>
            Виджеты
          </NavLink>
        </div>
        <div className={styles.menuItem}>
          <NavLink to="/" className={styles.menuLink}>
            Интеграции
          </NavLink>
        </div>
        <div className={styles.menuItem}>
          <NavLink to="/" className={styles.menuLink}>
            Кейсы
          </NavLink>
        </div>
        <div className={styles.menuItem}>
          <NavLink to="/" className={styles.menuLink}>
            Сертификаты
          </NavLink>
        </div>
      </div>
    </>
  )
}

export default HeaderMenu
