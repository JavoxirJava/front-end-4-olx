import Footer from '../Footer/footer'
import ProfileHead from './Profile-head/profile-head'
import './profile.css'
const Profile = () => {

 return(
    <>
        <div>
            <ProfileHead/>
        </div>

        <div className='profile-body container d-flex'>
            <div className='profile-search'>
                <div className='profile-search-first'>
                    <h6 className='profile-h6'>Искать на этой странице</h6>
                    <input type="text" className='profile-search-input'   placeholder='🔍' font-size="16px"  ></input>
                    <h3 className="profile-h3">Фильтровать объявления</h3>
                    <h6 class="profile-h6">Мы нашли  4 объявления</h6>
                </div>
                <div className='profile-search-body'>
                    <h6 className="profile-h6">Категории</h6>
                    <div className='search-body'>
                        <span className='search-body-span '>Все объявления</span>
                        <span className='span-number'>4</span>
                    </div>
                    <div className='search-body'>
                        <span className='search-body-span '>Транспорт</span>
                        <span className='span-number'>3 </span>
                    </div>
                    <div className='search-body'>
                        <span className='search-body-span '>Дом и сад</span>
                        <span className='span-number'>1</span>
                    </div>
                </div>
            </div>
            <div className='profile-second-body'>
                <h6 className='profile-h6'>Сортировать по</h6>
                <div className='profil-second-select d-flex'>
                    <select name="genre"  className="genre" > 
                        <option value="all genres">Самые новые</option>
                        <option value="adventure">Рекомендованное вам</option>
                        <option value="biography">Самые дешевые</option>
                        <option value="biography">Самые дорогие</option>
                    </select>
                    <i class="bi bi-list"></i>
                    <i class="bi bi-filter-square"></i>
                </div>
                <div className='profile-second-product mt-5'>
                    <div className='second-product-box d-flex mt-3'>
                        <div className='second-product-img'>
                            <img src='https://www.plm.automation.siemens.com/media/global/pt/kamaz-40379-opengraph-1200x630_tcm70-21666.jpg' />
                        </div>
                        <div className='second-product-box-text'>
                            <p className="profile-h6 m-3 d-flex ">Продается тягач DAF FT 95 XF430 и прицеп тент
                            <i class="bi bi-heart " style={{marginLeft:'450px'}}></i></p>
                            <span style={{fontWeight:"800", marginLeft:"15px"}}>345 044 000 сум</span>
                            <p class="profile-h6" style={{ marginLeft:"15px", marginTop:"10px"}}>Самарканд</p>
                            <p className='profile-h6'style={{ marginLeft:"15px" , marginTop:"-12px"}} >11 февраля 2024 г.</p>
                        </div>
                    </div>
                    <div className='second-product-box d-flex mt-3'>
                        <div className='second-product-img'>
                            <img src='https://www.plm.automation.siemens.com/media/global/pt/kamaz-40379-opengraph-1200x630_tcm70-21666.jpg' />
                        </div>
                        <div className='second-product-box-text'>
                            <p className="profile-h6 m-3 d-flex ">Продается тягач DAF FT 95 XF430 и прицеп тент
                            <i class="bi bi-heart " style={{marginLeft:'450px'}}></i></p>
                            <span style={{fontWeight:"800", marginLeft:"15px"}}>345 044 000 сум</span>
                            <p class="profile-h6" style={{ marginLeft:"15px", marginTop:"10px"}}>Самарканд</p>
                            <p className='profile-h6'style={{ marginLeft:"15px" , marginTop:"-12px"}} >11 февраля 2024 г.</p>
                        </div>
                    </div>
                    <div className='second-product-box d-flex mt-3'>
                        <div className='second-product-img'>
                            <img src='https://www.plm.automation.siemens.com/media/global/pt/kamaz-40379-opengraph-1200x630_tcm70-21666.jpg' />
                        </div>
                        <div className='second-product-box-text'>
                            <p className="profile-h6 m-3 d-flex ">Продается тягач DAF FT 95 XF430 и прицеп тент
                            <i class="bi bi-heart " style={{marginLeft:'450px'}}></i></p>
                            <span style={{fontWeight:"800", marginLeft:"15px"}}>345 044 000 сум</span>
                            <p class="profile-h6" style={{ marginLeft:"15px", marginTop:"10px"}}>Самарканд</p>
                            <p className='profile-h6'style={{ marginLeft:"15px" , marginTop:"-12px"}} >11 февраля 2024 г.</p>
                        </div>
                    </div>
                    <div className='second-product-box d-flex mt-3'>
                        <div className='second-product-img'>
                            <img src='https://www.plm.automation.siemens.com/media/global/pt/kamaz-40379-opengraph-1200x630_tcm70-21666.jpg' />
                        </div>
                        <div className='second-product-box-text'>
                            <p className="profile-h6 m-3 d-flex ">Продается тягач DAF FT 95 XF430 и прицеп тент
                            <i class="bi bi-heart " style={{marginLeft:'450px'}}></i></p>
                            <span style={{fontWeight:"800", marginLeft:"15px"}}>345 044 000 сум</span>
                            <p class="profile-h6" style={{ marginLeft:"15px", marginTop:"10px"}}>Самарканд</p>
                            <p className='profile-h6'style={{ marginLeft:"15px" , marginTop:"-12px"}} >11 февраля 2024 г.</p>
                        </div>
                    </div>
                        <p className='profile-second-box-h6 mt-5'>Доска объявлений Узбекистана</p>
                        <p  className='profile-second-box-h6' >
                            Объявления в Узбекистане на OLX.uz, раньше Torg.uz - на нашей интернет-площадке найдется именно то, что искали. Нажав на кнопку "Подать объявление" и заполнив форму, вы сможете легко и быстро разместить частное объявление с фото, подробным описанием о продаваемом товаре, с указанием номера телефона и способа оплаты покупки. Частные объявления на сайте содержат подробную информацию о товаре и продавце: фото, описание, номер телефона и способ оплаты покупки.
                            На сайте объявлений OLX.uz (ранее Torg) вы сможете купить или продать из рук в руки практически все, что угодно - множество выгодных предложений по темам: недвижимость, работа, транспорт, услуги, купля/продажа бытовой техники, электроники и других новых и б/у товаров. Быстрые покупки и продажи по всему Узбекистану!
                            OLX - продается все!
                            </p>
                </div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
    </>
 )
  
}

export default Profile






