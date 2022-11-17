import telegram from '../../assets/telegram.svg'
import viber from '../../assets/viber.svg'
import whatsapp from '../../assets/whatsapp.svg'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerRow}>
          <div className={styles.footerColumn}>
            <div className={styles.footerColumnTitle}>
              <h3>О компании</h3>
              <div className={styles.footerMenu}>
                <a href="#">Партнёрская программа</a>
                <a href="#">Вакансии</a>
              </div>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerColumnTitle}>
              <h3>Меню</h3>
              <div className={styles.largeMenu}>
                <div className={styles.footerMenu + ' ' + styles.rightColumn}>
                  <a href="#">Расчёт стоимости</a>
                  <a href="#">Услуги</a>
                  <a href="#">Виджеты</a>
                  <a href="#">Интеграции</a>
                  <a href="#">Наши клиенты</a>
                </div>
                <div className={styles.footerMenu}>
                  <a href="#">Кейсы</a>
                  <a href="#">Благодарственные письма</a>
                  <a href="#">Сертификаты</a>
                  <a href="#">Блог на Youtube</a>
                  <a href="#">Вопрос / Ответ</a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <div className={styles.footerColumnTitle}>
              <h3 className={styles.footerTit}>Контакты</h3>
              <div className={styles.footerMenu + ' ' + styles.lastColumn}>
                <div className={styles.telephone}>
                  <a href="tel:+75555555555">+7 555 555-55-55</a>
                </div>

                <div className={styles.contFooter}>
                  <a href="#" className={styles.telegram}>
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a href="#" className={styles.viber}>
                    <img src={viber} alt="viber" />
                  </a>
                  <a href="#" className={styles.whatsapp}>
                    <img src={whatsapp} alt="whatsapp" />
                  </a>
                </div>

                <div className={styles.address}>
                  <a href="#">Москва, Путевой проезд 3с1, к 902</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerCopyright}>
          <div>
            <span>©WELBEX 2022. Все права защищены.</span>
            <a href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
