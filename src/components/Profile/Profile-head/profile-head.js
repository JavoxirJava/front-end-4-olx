import './profile-head.css'

const ProfileHead = () => {
  return (
    <div className='profile container mb-4'>
                <div className="box">
                    <div className="box-head mt-3  d-flex">
                        <img  src="https://www.shutterstock.com/image-vector/vector-flat-illustration-black-colors-600nw-2279039057.jpg" />
                        <h1 className='mt-4'>Маржона</h1>
                    </div>
                    <div className='box-end mt-5'>
                        <a href='#'>Поделиться</a>
                        <button >
                            <i class="bi bi-suit-heart" ></i>
                            Подписаться
                        </button>
                    </div>
                </div>
                <div className='box-in mt-3 '>
                    <div className='how-box d-flex'>
                        <img src='https://www.olx.uz/app/static/media/ratingSelectExcellent.351f9960e.svg' />
                        <div className='how-box-in'>
                            <p className='how-p'>Отлично</p>
                            <p className='how-p2'>(6 оценок)</p>
                        </div>
                    </div>
                    <div className='box-in-text'>Этот автор получил много отличных отзывов</div>
                    <div className='box-end mt-3'>
                        <a href='#'>Что такое рейтинг?</a>
                    </div>
                </div>
        </div>
  )
}

export default ProfileHead
