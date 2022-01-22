import MD5 from './md5Hash.js'

const ts = Date.now().toString()
const hash = MD5(ts + '62c84ea104d7196e6ad03c9355431319e1268dda' + '4b542631a0404e1d6bf11e45dea5917c')

async function fetchData() {
    try {
        const request = await fetch(`http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=4b542631a0404e1d6bf11e45dea5917c&hash=${hash}`)
        const data = await request.json()
        return data
    } catch (err) {
        console.log(err);
    }
}

const displayData = async () => {
    const comics = await fetchData()
    var comic = []
    const allComics = comics.data.results
    allComics.map(comicSingle => {
        comic.push({title: comicSingle.title, pages: comicSingle.pageCount, series: comicSingle.series.name, image: comicSingle.thumbnail.path + '.' + comicSingle.thumbnail.extension})
    })
    console.log(allComics)
    // console.log(comic);
    // console.log(comics.data.results.map(comic => comic.title))
}

displayData()