const slide = document.querySelectorAll(".slider")
// console.log(slide);


var counter = 0
slide.forEach((slide, index) => {
    // slide.computedStyleMap.bottom = `${index * 100}`
    slide.style.left = `${index * 100}%`
})
const goNext = () => {
    counter++
    slideImg()
}
const goPrevious = () => {
    counter--
    slideImg()
}

const slideImg = () => {
    slide.forEach(
        (slide) => {
            //  slide.style.transform = `translateY(-$(counter*100)%)`
            slide.style.transform = `translateX(-${counter*100}%)`
        }
    )
}