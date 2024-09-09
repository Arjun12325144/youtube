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