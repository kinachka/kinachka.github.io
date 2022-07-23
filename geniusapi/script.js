const url_api = 'https://api.genius.com/search?q='
const accesstoken = '&access_token=3EKEG9SkvHs-c4gBp2QcJGsVetVFy6ICi9XfHDtKVY7_bUHq3hmRrGWraYq27-2b'

document.getElementById('submit').addEventListener('click', getData)

async function getData() {

    if (document.getElementById('inputArtistname').value == '') return
    try {
        const artistname = document.getElementById('inputArtistname').value
        const url = url_api + artistname + accesstoken
        const response = await fetch(url) 
        const data = await response.json()

        const artistnameLink = data.response.hits[0].result.primary_artist.name
        const songnameLink = data.response.hits
        
        const outputItemEle = document.createElement('div')
        outputItemEle.className = 'output__item'
        const outputItem2 = document.createElement('div')
        outputItem2.id = 'outputHere'
        document.getElementById('output__sec').appendChild(outputItemEle)
        outputItemEle.appendChild(outputItem2)

        let i = 0;
        songnameLink.forEach(element => {
            
            const artist = {
                name: data.response.hits[i].result.primary_artist.name,
                song: data.response.hits[i].result.title,
                urlartist: data.response.hits[i].result.primary_artist.url,
                urllyrics: data.response.hits[i].result.url,
            }

            const ulAll = document.createElement('ul')
            ulAll.className = 'ulAll'
            outputItem2.appendChild(ulAll)
            
            const liName = document.createElement('li')
            const liNameLink = document.createElement('a')
            liNameLink.href = artist.urlartist
            liNameLink.innerText = artist.name
            liName.className = 'output__artistname'
            ulAll.appendChild(liName)
            liName.appendChild(liNameLink)

            const liSong = document.createElement('li')
            const liSongLink = document.createElement('a')
            liSongLink.href = artist.urllyrics
            liSongLink.innerText = artist.song
            liSong.className = 'output__songs'
            ulAll.appendChild(liSong)
            liSong.appendChild(liSongLink)
            
            i++
        })

        const delBtn = document.createElement('button')
        delBtn.className = 'delBtn'
        delBtn.innerText = '❌'
        outputItemEle.appendChild(delBtn)
        delBtn.addEventListener('click', () => outputItemEle.remove())

    } catch (e) {
        console.log('404 ', e)
    } finally {
        document.getElementById('inputArtistname').value = ''
    }
}


