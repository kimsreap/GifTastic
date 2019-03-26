const getGif = holiday => {
    fetch('https://api.giphy.com/v1/gifs/search?q=${holiday}&rating=g&api_key=3Fp6anu4Sfj3MWUN5hi0SVLgSxnISHU8')
    .then(r => r.json())
    .then(({data}) => {
        data.forEach(gif => {
        const url = gif.images.fixed_height.url
        let gifElem = document.createElement
        ('img')
        gifElem.setAttribute('src', url)
        document.querySelector('#events').append(gifElem)   
        });
      
        
    })
    .catch(e => console.error(e))
}

const getGiffy = thanksgiving => {
    fetch('https://api.giphy.com/v1/gifs/search?q=${thansgiving}&rating=g&api_key=3Fp6anu4Sfj3MWUN5hi0SVLgSxnISHU8')
    .then(r => r.json())
    .then(({data}) => {
        data.forEach(gif => {
        const url = gif.images.fixed_height.url
        let gifElem = document.createElement
        ('img')
        gifElem.setAttribute('src', url)
        document.querySelector('#Thanksgiving').append(gifElem)   
        });
        
    })
    .catch(e => console.error(e))
}

const getGiffy1 = julyfourth => {
    fetch('https://api.giphy.com/v1/gifs/search?q=${julyfourth}&rating=g&api_key=3Fp6anu4Sfj3MWUN5hi0SVLgSxnISHU8')
    .then(r => r.json())
    .then(({data}) => {
        data.forEach(gif => {
        const url = gif.images.fixed_height.url
        let gifElem = document.createElement
        ('img')
        gifElem.setAttribute('src', url)
        document.querySelector('#JulyFourth').append(gifElem)   
        });
        
    })
    .catch(e => console.error(e))
}

const getGiffy2 = Valentine => {
    fetch('https://api.giphy.com/v1/gifs/search?q=${Valentine}&rating=g&api_key=3Fp6anu4Sfj3MWUN5hi0SVLgSxnISHU8')
    .then(r => r.json())
    .then(({data}) => {
        document.querySelector('#Valentine').innerHTML = ' '
        data.forEach(gif => {
        const url = gif.images.fixed_height.url
        let gifElem = document.createElement
        ('img')
        gifElem.setAttribute('src', url)
        document.querySelector('#Valentine').append(gifElem)   
        });
        
    })
    .catch(e => console.error(e))
}

const getGiffy3 = puppyDay => {
    fetch('https://api.giphy.com/v1/gifs/search?q=${puppyDay}&rating=g&api_key=3Fp6anu4Sfj3MWUN5hi0SVLgSxnISHU8')
    .then(r => r.json())
    .then(({data}) => {
        data.forEach(gif => {
        const url = gif.images.fixed_height.url
        let gifElem = document.createElement
        ('img')
        gifElem.setAttribute('src', url)
        document.querySelector('#PuppyDay').append(gifElem)   
        });
        
    })
    .catch(e => console.error(e))
}
 

