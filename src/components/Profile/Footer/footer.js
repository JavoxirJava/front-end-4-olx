import './footer.css'

const Footer = () => {
  return (
    <div className='footer container'>
            <div className='footer-body d-flex '>
                <div className='footer-text'>
                    <div className='footer-a'>
                        <li><a href='#'>Мобильные приложения</a></li>
                        <li><a href='#'>Помощь и Обратная связь</a></li>
                        <li> <a href='#'>Платные услуги</a></li>
                        <li> <a href='#'>Бизнес на OLX</a></li>
                        <li> <a href='#'>Условия использования</a></li>
                        <li><a href='#'>Политика конфиденциальности</a></li>
                        <li> <a href='#'>Реклама на сайте</a></li>
                    </div>
                    <div className='footer-a ' style={{marginLeft:'2rem'}}>
                       <li> <a href='#'>Правила безопасности</a></li>
                        <li><a href='#'>Карта сайта</a></li>
                        <li><a href='#'>Карта регионов</a></li>
                        <li><a href='#'>Популярные запросы</a></li>
                        <li><a href='#'>Работа в OLX</a></li>
                        <li><a href='#'>Как продавать и покупать?</a></li>
                        <li><a href='#'>Контакт</a></li>
                    </div>
                </div>
                <div className='footer-app'>
                    <div className='footer-app-button'>
                        <img style={{height:'60px'}} src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' />
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png'/>
                    </div>
                    <a href='#'>Бесплатное приложение для твоего телефона</a>
                </div>
            </div>
            <div className='footer-flag'>
                <div className='flag-text'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/250px-Flag_of_Russia.svg.png'/>
                    <a href='#'>OLX.bg</a>
                </div>
                <div className='flag-text'>
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1200px-Flag_of_Poland.svg.png'/>
                    <a href='#'>OLX.pl</a>
                </div>
                <div className='flag-text'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flag_of_Romania.svg/2560px-Flag_of_Romania.svg.png'/>
                    <a href='#'>OLX.ro</a>
                </div>
                <div className='flag-text'>
                    <img src='https://flagpoles.co.uk/wp-content/uploads/2019/06/Ukraine.png'/>
                    <a href='#'>OLX.ua</a>
                </div>
                <div className='flag-text'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/1280px-Flag_of_Portugal.svg.png'/>
                    <a href='#'>OLX.pt</a>
                </div>
            </div>
        </div>
  )
}

export default Footer
