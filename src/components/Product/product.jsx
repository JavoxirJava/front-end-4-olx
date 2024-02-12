import React, { useState } from 'react'
import Corousel from './corousel'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';



const Product = () => {

  const [show, setShow] = useState(false)

  const openModal = () => setShow(!show)

  return (
    <>
        <Corousel />


        <div className='box-1'>
          <h6 className='n1'>
            Опубликовано 08 февраля 2024 г.
          </h6>
          <h1 className='n2'>
            Продается квартира на Ц5! Срочно! <br />
            Юнусабадский район. Центр <br />
            города.
          </h1>
          <pre className='cost'>
            160.000 y.e.
          </pre>
          <button onClick={openModal} className='buton-1' >
            <h2>
              Сообщение
            </h2>
          </button>
          <button className='buton-2' >
            <h2>
              Покозать телефон
            </h2>
          </button>

        </div>

        <div className='box-2'>
          <h5 className='nn1'>
            <b>Пользователь </b>
          </h5>
          {/* <div className='img-1'>
            <img src="https://www.shutterstock.com/image-vector/person-nobody-man-social-icon-260nw-584562919.jpg" alt="" />  
        </div> */}

          <div className='nn3'>
            <h5>
              TOSHKENTsoat 22 30 Dan Keyin Bezovta Qmela
            </h5>
            <h6>
              на OLX с апрель 2018 г. <br />
              Онлайн в 13:03
            </h6>

            <h5>
              <a className='a-href' href="http://"> Все объявления автора</a>

            </h5>



          </div>
<div className='ppp-1'>
<div className='box-3'>
            <h5 className='nn1'>
              <b>Пользователь </b>
            </h5>
            {/* <div className='img-1'>
            <img src="https://www.shutterstock.com/image-vector/person-nobody-man-social-icon-260nw-584562919.jpg" alt="" />  
        </div> */}

            <div className='nn3'>
              <h5>
                TOSHKENTsoat 22 30 Dan Keyin Bezovta Qmela
              </h5>
              <h6>
                на OLX с апрель 2018 г. <br />
                Онлайн в 13:03
              </h6>

              <h5>
                <a className='a-href' href="http://"> Все объявления автора</a>

              </h5>

</div>



            </div>
            <div className='vd-1'>
            <video className='vd-2'  controls loop autoPlay>
              <source  src='https://cdn.slots.baxter.olx.org/olxuz/_assets/video/video_fraud.mp4'  type='video/webm'  />
            </video>
            </div>
            







          </div>

          <div>
            <div className='bac'>
              <b>РЕКЛАМИРОВАТЬ</b>
              <b className='bac-2'>
                ПОДНЯТЬ
              </b>
              <div>
                <button className='p-1'>
                  Бизнес
                </button>
              </div>
              <div>
                <button className='p-2'>
                  Состояние: Новый
                </button>
              </div>
              <div>
                <h3>
                  <b>
                    ОПИСАНИЕ
                  </b>
                </h3>
              </div>
              <div>
                <p>
                  Отличный полочный стеллаж, который подойдет как для магазина, склада, так и для дома, в
                  кладовку. Крепкая конструкция из 4х стоек и 4 полок, полки прикручены к стойкам, что
                  обеспечивает устойчивость стеллажа. Цвет светло-серый. очень практичный. Высота 1800мм.
                  длина 970 мм. <br />
                  Компания предлагает большой выбор торгового оборудования, которое можно установить в
                  магазинах любой сферы деятельности
                </p>
              </div>
              <br />
              <div>
                metall stellaj <br />
                yig'iladigan stellaj <br />
                yig'iladigan metall stellaj <br />
                savdo stellajlar <br />
                metall polkalar <br />
                polkali stellaj <br />
                stellaj qimmat emas <br />
                polka stellaj <br />
                xarid savatlari <br />
                manejlar <br />
                savdo to'rlar <br />
                sotish uchun aksessuarlar
              </div>
              <hr />
              <div>
                <pre className='footerr-1'>
                  ID: 42660477
                </pre>
                <pre className='footerr-2'>
                  Просмотров: 1481
                </pre>
                <pre className='footerr-3'>
                  Пожаловаться
                  <hr className='hr-1' />
                </pre>


              </div>


            </div>



          </div>

        </div>

        <Modal isOpen={show} toggle={openModal} centered >
          <ModalHeader toggle={openModal} closeButton>
            <h2>Rovshan</h2>
          </ModalHeader>
          <ModalBody>Malibu 2 Premier</ModalBody>
          <b className='b-1'>437 900 000 sum</b>
          <h6 className='b-2'>ID: 94719881</h6>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <ModalFooter>
          <i class="bi bi-card-image"></i>
          <i class="bi bi-share"></i>
            <h6 className='h-6'>Напишите Сообщение...</h6>
            <Button color='succes' variant="" onClick={openModal}>
            
            </Button>
            <Button color='info ' variant="info" onClick={openModal}>
              Send Message
            </Button>
          </ModalFooter>
        </Modal>



    </>
  )
}

export default Product;
