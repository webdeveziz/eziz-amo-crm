import telegram from '../assets/telegram.svg'
import viber from '../assets/viber.svg'
import whatsapp from '../assets/whatsapp.svg'

export const Telephone = ({ phone }) => {
  return (
    <div className="telephone">
      <a href="#">{phone}</a>
    </div>
  )
}

export const Contacts = () => {
  return (
    <div className="tel">
      <a href="#" className={'telegram'}>
        <img src={telegram} alt="telegram" />
      </a>
      <a href="#" className={'viber'}>
        <img src={viber} alt="viber" />
      </a>
      <a href="#" className={'whatsapp'}>
        <img src={whatsapp} alt="whatsapp" />
      </a>
    </div>
  )
}
