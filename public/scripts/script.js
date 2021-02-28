const sliders = document.querySelector(".carouselbox")
let scrollPerClick
let ImagePadding = 20

const showMovieData = async () => {
    const api_key = '1cddf16338776cbf2116371734a3e441'

    let result = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&sort_by=popularity.desc`
    )

    result = result.data.results

    result.map(function (cur, index) {
        sliders.insertAdjacentHTML(
            "beforeend",
            `<img class="img-${index} slider-img" src="https://image.tmdb.org/t/p/w185/${cur.poster_path}" />`
        )
    })

    scrollPerClick = (document.querySelector(".img-1").clientWidth + ImagePadding) * 9
}

let scrollAmount = 0

const sliderScrollLeft = () => {
    sliders.scrollTo({
        top: 0,
        left: (scrollAmount -= scrollPerClick),
        behavior: 'smooth'
    })

    if (scrollAmount < 0) {
        scrollAmount = 0
    }
}

const sliderScrollRight = () => {
    if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
        sliders.scrollTo({
            top: 0,
            left: (scrollAmount += scrollPerClick),
            behavior: 'smooth'
        })
    }
}

showMovieData()