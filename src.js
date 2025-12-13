// animation for "blog" 
const keyframes = [
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(360deg)'}
]

const options = {
    duration: 2000,
    iterations: 1,
}

// makes "blog" spin
function spin(name) {
    console.log('in here')
    var blog = document.getElementsByClassName(name)[0];
    const animation = blog.animate(keyframes, options);
}