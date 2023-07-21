document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body');
    body.appendChild(image);
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
        .then((data)=> data.json())
        .then((data)=> {
            const cat = data[0].url;
            const image = document.getElementById('image');
            image.src = cat;
        })


    // fetch('https://api.thecatapi.com/v1/images/search')
    // .then((data)=> data.json())
    // .then((data)=> document.getElementById('image').setAttribute('src', `${data[0].url}`))
    // .then((data)=> console.log(data))
})

// fetch('https://api.thecatapi.com/v1/images/search')
//     .then((data)=> data.json())
//     .then(image.src = data[0].url)
//     .then((data)=> console.log(data))
    
// = search.data[url])

