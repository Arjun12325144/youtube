// gsap.to("#one",{
//     width: "100%",
//     ease:Expo.easeInOut,
//     duration: 4
// })

var tl = gsap.timeline({
    repeat: -1
})
 
tl
.to(".imagecont",{
    width:"100%",
    ease:Expo.easeInOut,
    duration: 2,
    stagger: 2 
},'a')
.to(".text h1",{
    ease:Expo.easeInOut,
    duration:2,
    top: 0,
    stagger:2
},'a')
.to(".text h1",{
    delay: 2, 
    ease:Expo.easeInOut,
    stagger:2,
    top:"-100%"
},'a')