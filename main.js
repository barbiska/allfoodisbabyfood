// This file is intentionally left blank.
const button = document.getElementById('pushMeButton');
const quoteContainer = document.getElementById('quoteContainer');
const animeImage = document.getElementById('animeImage');
const animeQuote = document.getElementById('animeQuote');

const quotes = [
    {
        img: 'https://miro.medium.com/v2/resize:fit:1200/0*j7sVnq-dE0XWdS12.jpeg',
        quote: '"If you don’t take risks, you can’t create a future.” - Monkey D. Luffy'
    },
    {
        img: 'https://miro.medium.com/v2/resize:fit:3840/format:webp/1*ikhSU3f8HIp8PMgje2tS1g.jpeg',
        quote: '“The strong should aid and protect the weak. Then, the weak will become strong, and they in turn will aid and protect those weaker than them. That is the law of nature.” - Tanjiro Kamado'
    },
    {
        img: 'https://i.redd.it/ylpsqwy1uoe81.jpg',
        quote: '"A lesson without pain is meaningless. That’s because you can’t gain something without sacrificing something. - Edward Elric'
    },
    {
        img: 'https://img4.hulu.com/user/v3/artwork/5f25a98b-27f0-4a0b-b26d-f0704fae7bbb?base_image_bucket_name=image_manager&base_image=179d7a5d-0503-4879-8405-b69e832ce2ab&size=600x338&format=webp',
        quote: '“Hard work is worthless for those that don’t believe in themselves.” - Naruto Uzumaki'
    }, {
        img: 'https://preview.redd.it/heres-a-few-pictures-of-my-3d-model-of-ymir-fritz-that-i-v0-o4ptp9d3n0q81.png?width=640&crop=smart&auto=webp&s=fb954a38fd22481778d5ed560138c6ef3e9b9743',
        quote: "You're gonna care what other people think and be someone you're not your whole life? You’re fine as you are. So, talk in your own words. - Ymir"
    }, {
        img: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/03/goku-dragon-ball-guru-824x490-11b2006-e1697471244240.jpg?quality=90&resize=600,400',
        quote: '"Power comes in response to a need, not a desire. You have to create that need." - Goku'
    }, {
        img: 'https://c4.wallpaperflare.com/wallpaper/622/941/214/jujutsu-kaisen-satoru-gojo-hd-wallpaper-preview.jpg',
        quote: '"Searching for someone to blame is such a pain." - Satoru Gojo'
    }, {
        img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/12/screenshot-2023-12-04-at-20-35-32-cropped.jpg',
        quote: "You Shouldn't Be Using Such Strong Remarks, It Only Makes You Look Weak - Aizen"
    }, {
        img: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/05/picsart_24-05-08_11-35-57-950.jpg?q=49&fit=crop&w=825&dpr=2',
        quote: '"You Do What You Can, The Best That You Can And Then You Turn To The Others And Expect The Same From Them." - Zoro'
    }, {
        img: 'https://lh5.googleusercontent.com/R_los_VsAHr8UhPGybhmj9OS3lB9Qc8ypn_j1P_Rut0a7eCG6uB9Oi44-yCqkV3TAqTNkkts5uUpFRXIncEgPFAkEVTpH43zJaEzj__uAQaM_LWZjCP1UR8SWM6opgwYDCa1q07q_FerDAD0vn8c4RQ',
        quote: "I'll Do What You Can't Do, And You Do What I Can't Do. - Sanji"
    }
];

button.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    animeImage.src = randomQuote.img;
    animeQuote.textContent = randomQuote.quote;
    quoteContainer.style.display = 'block';
    alert('Quote has been generated');
});


