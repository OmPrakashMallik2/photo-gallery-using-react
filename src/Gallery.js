import React from 'react'

function Gallery() {

    const images = [
        { index: 1, imgLink: img1 },
        { index: 2, imgLink: img2 },
        { index: 3, imgLink: img3 },
        { index: 4, imgLink: img4 },
        { index: 5, imgLink: img5 },
        { index: 6, imgLink: img6 },
        { index: 7, imgLink: img7 },
        { index: 8, imgLink: img8 },
        { index: 9, imgLink: img9 },
        { index: 10, imgLink: img10 },
        { index: 11, imgLink: img11 },
        { index: 12, imgLink: img12 },
        { index: 13, imgLink: img13 },
        { index: 14, imgLink: img14 }
    ];

    return (
        <div className="grid grid-cols-4 gap-5 p-4">
            {images.map((image) => (
                <div key={image.index}>
                    <img className='w-full h-auto bg-white p-1' src={image.imgLink} alt='image' />
                </div>
            ))}
        </div>
    )
}

export default Gallery



const img1 = 'https://i.pinimg.com/564x/47/14/4b/47144be735f48cdf694b9b0a724272e9.jpg'
const img2 = 'https://i.pinimg.com/564x/c2/19/53/c21953f3ad4a17d96eb80d649bc8149b.jpg'
const img3 = 'https://i.pinimg.com/564x/6e/b8/2d/6eb82dbcc0565e76afc8fc437b4141d4.jpg'
const img4 = 'https://i.pinimg.com/564x/52/f4/25/52f4251c4085a148173f912d5895e617.jpg'
const img5 = 'https://i.pinimg.com/564x/69/21/56/6921565d8040e9cc002bbfe4cf6c88ab.jpg'
const img6 = 'https://i.pinimg.com/564x/da/16/14/da1614e94c0da2ed1a538122da5ba51a.jpg'
const img7 = 'https://i.pinimg.com/736x/47/22/ab/4722abcc90bc83217871806867ff70c0.jpg'
const img8 = 'https://i.pinimg.com/564x/18/14/eb/1814eb515528f86adb9255bd1989eb00.jpg'
const img9 = 'https://i.pinimg.com/736x/07/1a/62/071a628cf766f3725bdd79e381843553.jpg'
const img10 = 'https://i.pinimg.com/564x/9d/df/5a/9ddf5a4dbc480774485c7197849ec3d0.jpg'
const img11 = 'https://i.pinimg.com/564x/69/21/56/6921565d8040e9cc002bbfe4cf6c88ab.jpg'
const img12 = 'https://i.pinimg.com/736x/47/22/ab/4722abcc90bc83217871806867ff70c0.jpg'
const img13 = 'https://i.pinimg.com/564x/18/14/eb/1814eb515528f86adb9255bd1989eb00.jpg'
const img14 = 'https://i.pinimg.com/564x/6e/b8/2d/6eb82dbcc0565e76afc8fc437b4141d4.jpg'