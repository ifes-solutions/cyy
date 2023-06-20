import * as images from './images/images.js'
import * as roomImages from './images/accomImage.js'

export const dataName = [
    {
        bride: 'Linda',
        bridegroom: 'Jayden'
    }
]

export const dataNav =[
    {
        id: 1,
        title: 'Navbar',
        img: images.navLogo, // navbar logo
        home: "We're getting married!",
        location: 'location',
        accommodations: 'accommodations',
        gallery: 'gallery',
        joinUs: 'join us'
    }
]

export const dataHeader = [
    {
        id: 1, // home page details
        title: 'Jayden & Linda',
        img: images.headerImage,
        desc: 'December 24, 2023 • Lake Garda, Italy'
    },
    {
        id: 2, // location page details
        title: 'VILLA CORTINE',
        img: images.locationImg,
        desc: 'Sirmione, Lake Garda, Italy'
    },
    {
        id: 3, // accommodation page details
        title: 'WHERE TO STAY',
        img: images.accommodationImg,
        desc: ''
    },
    {
        id: 4, // gallery page details
        title: 'GALLERY',
        img: images.coupleHeaderImg,
        desc: ''
    },
    {
        id: 5, // join us page details
        title: 'JOIN US',
        img: images.joinUsImg,
        desc: ''
    }
]

export const dataCouple = [
    {
        id: 1,
        title: 'Couple',
        bridegroomImg: images.bridegroomImg, // bridegroom image
        brideImg: images.brideImg, // bride image
        weddingImg: images.weddingImg2,
        bridegroomDesc: 'Born and raised in Sweden, Jayden is a multi-cultural student of the world. A curious mind – some of his many passions include travel, videography, music production, DJing, football (AC Milan), F1 and most importantly, Linda. Don’t confuse that man-bun for Zlatan! (although his masterful football talents could be misleading…)',
        brideDesc: 'Born and raised in the greatest city in the world (aka NYC), Linda never misses an opportunity to impress. There’s a sense of purpose with every outfit (she could never travel without at least two bags, sometimes five). Not only is she very beautiful and highly intelligent, but she also has a heart of gold. She’s funny too.'
    }
]

export const dataStory = [
    {
        id: 1,
        title: 'Our Story',
        img: images.storyImg, // story page image
        desc1: 'Linda and Jayden met one fateful wintry NYC night in 2017 inside the Jane Hotel. After exchanging a few secret glances across the room, Jayden mustered up the courage to approach the most beautiful woman he’d ever seen. What did he do next? Well, proceed to mislead her when asked about his occupation… but we’ll save that story for the toasts!',
        desc2: 'Once Linda got over the initial deceit, they bonded over their love of travel, football (soccer), adventure and food. Over the past five years, they’ve been to 20+ countries together, raised (objectively) the cutest dog in the world and moved into a beautiful apartment in Brooklyn. In November 2021, after a day of snorkeling with hundreds of sharks, Jayden popped the question in Bora Bora, French Polynesia.'
    }
]

export const dataLocation = [
    {
        id: 1,
        title: 'Location',
        venue: 'Villa Cortine',
        venueUrl: 'https://www.hotelvillacortine.com',
        desc1: ' is a beautiful hotel that includes 54 rooms and a 5 hectare centuries-old park. The hotel was built in the late 1800s. It was named after the hill where it lies, on the tip of the Sirmione peninsula, where there was a Roman military garrison. Already at that time the beauty of the lake and the thermal waters attracted visitors from across Italy. In 1953, the villa became a luxury hotel and was enlarged to carry out what is now the main hotel building.',
        desc2: 'Linda and Jayden fell in love with Villa Cortine the first time they visited for its lush greenery, exotic palm trees, breathtaking lake views and proximity to Amarone wine! As soon as they set their eyes on this Villa Cortine, they knew it was where they wanted to exchange their vows in front of their family and friends.',
        descTitle: 'Getting There',
        desc3: 'For those flying in, we would recommend flying into the Milan Malpensa (MXP), Milan Linate (LIN), Milan Bergamo (BGY) or Verona (VRN) airports.',
        desc4: ' Sirmione is a 1.5 hour drive or 2 hour train ride from Central Milan. If you’re driving directly from Malpensa Airport (MXP), please budget an extra 30 minutes. There is also a local shuttle bus that provides transportation around the Lake Garda region (LN026 will be the main bus route that runs from the Peschiera train station to the historic center of Sirmione).',
        desc5: ' Sirmione is a 40 minute drive from the Verona airport (VRN). You can also reach Sirmione via a quick train ride followed by a walk, ferry or bus to Sirmione (~1 hour journey).',
        desc6: 'Overall, we’d recommend renting a car! You likely won’t need it for our wedding events but it will make travel to and from Sirmione a lot easier. Please feel free to reach out with any questions!'
    }
]

export const roomData = [
    {
        id: 1,
        img: roomImages.room1,
        roomTitle: 'Classic Room with Partial Lake View',
        price: 515,
        sqMeter: '20 Sq Meters',
        openSpot: 0
    },
    {
        id: 2,
        img: roomImages.room2,
        roomTitle: 'Superior Villa Koseritz with Garden View',
        price: 600,
        sqMeter: '25 Sq Meters',
        openSpot: 0
    },
    {
        id: 3,
        img: roomImages.room3,
        roomTitle: 'Superior Villa Koseritz with Partial Lake View',
        price: 600,
        sqMeter: '25 Sq Meters',
        openSpot: 4
    },
    {
        id: 4,
        img: roomImages.room4,
        roomTitle: 'Superior with Balcony + Full Lake View',
        price: 660,
        sqMeter: '25 Sq Meters',
        openSpot: 2
    },
    {
        id: 5,
        img: roomImages.room5,
        roomTitle: 'Junior Suite with Balcony + Full Lake View',
        price: 760,
        sqMeter: '40 Sq Meters',
        openSpot: 3
    },
    {
        id: 6,
        img: roomImages.room6,
        roomTitle: 'Terrace Room with Full Lake View + Terrace',
        price: 920,
        sqMeter: '30 Sq Meters',
        openSpot: 3
    }
]

export const hotelData = [
    {
        id: 1,
        img: roomImages.hotel1,
        title: 'AGRITURISMO IL ROVERE',
        desc: 'This is our welcome party venue - it is a small B&B located on a vineyard with an excellent restaurant!  There are 6 rooms available at very discounted prices ($80/night for a single room ranging to €150/night for a 4 person room)! Please reach out to Linda or Jayden to book or get more information!',
        website: 'https://www.agriturismoilrovere.it/it'
    },
    {
        id: 2,
        img: roomImages.hotel2,
        title: 'Grand Hotel Terme',
        desc: '$300-400/night | 5 stars | 4 night minimum | Outside Sirmione walls (8-10 min walking to Villa Cortine)',
        website: 'http://bitly.ws/IwIo'
    },
    {
        id: 3,
        img: roomImages.hotel3,
        title: 'Hotel Sirmione Ocelle',
        desc: '$250-300/night | 4 stars | Outside Sirmione walls (15-20 min walking to Villa Cortine)',
        website: 'https://www.hotelocellesirmione.it/?lang=en'
    },
    {
        id: 4,
        img: roomImages.hotel4,
        title: 'Hotel Continental Wellness & Spa',
        desc: '4 stars | Inside Sirmione walls (<5 min walking to Villa Cortine)',
        website: 'https://www.continentalsirmione.com'
    },
    {
        id: 5,
        img: roomImages.hotel5,
        title: 'Hotel Olivi',
        desc: '$200-250/night | 4 stars | 4 night minimum | Inside Sirmione walls (<5 min walking to Villa Cortine)',
        website: 'https://www.continentalsirmione.com'
    }
]