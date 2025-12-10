function spin(name) {
    
    var blog = document.getElementsByClassName(name)[0];
    console.log(blog);
    blog.style.animationName = "spin";
}