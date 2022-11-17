import styles from './MainContent.module.css'

const MainContent = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.leftContent}>
          <div className={styles.contentTitle}>
            <span>
              Зарабатывайте <br />
              больше
            </span>
          </div>
          <div className={styles.contentSubtitle}>
            <span>с WELBEX</span>
          </div>
          <div className={styles.contentText}>
            <span>
              Развиваем и контролируем <br /> продажи за вас
            </span>
          </div>
          <div className={styles.contentForMob}>
            <span>
              Вместе с <a href="#">бесплатной</a> <br />{' '}
              <a href="#">консультацией</a> мы дарим:
            </span>
            <div className={styles.mobVidj}>
              <div className={styles.mobVidjRow}>
                <div className={styles.mobVidjCol}>Skype аудит</div>
                <div className={styles.mobVidjCol}>30 виджетов</div>
              </div>
              <div className={styles.mobVidjRow}>
                <div className={styles.mobVidjCol}>Dashboard</div>
                <div className={styles.mobVidjCol}>Месяц аmoCRM</div>
              </div>
            </div>
          </div>
          <div className="mask"></div>
        </div>

        <div className={styles.rightContent}>
          <div className={styles.rightText}>
            <p>
              Вместе с <a href="#">бесплатной </a>
              <a href="#">консультацией</a> мы дарим:
            </p>
          </div>
          <div className={styles.rightText}>
            <div className={styles.textRow}>
              <div className={styles.textColumn}>
                <h3>Виджеты</h3>
                <span>30 готовых решений</span>
              </div>
              <div className={styles.textColumn}>
                <h3>Dashboard</h3>
                <span>с показателями вашего бизнеса</span>
              </div>
            </div>
            <div className={styles.textRow}>
              <div className={styles.textColumn}>
                <h3>Skype Аудит</h3>
                <span>отдела продаж и CRM системы</span>
              </div>
              <div className={styles.textColumn}>
                <h3>35 дней</h3>
                <span>использования CRM</span>
              </div>
            </div>
          </div>
          <a href="#" className={styles.rightContentBtn}>
            Получить консультацию
          </a>
        </div>
      </div>
    </>
  )
}

export default MainContent
