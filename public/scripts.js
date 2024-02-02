
// Query the elements once for performance reasons
const follower = document.querySelector('.follower');
const bgImage = document.querySelector('.bg-image');

let initialized = false;

document.addEventListener('mousemove', function(e) {
    if (!initialized) {
        initialized = true;
        follower.style.transition = 'none';
        follower.style.visibility = 'visible';
    } else {
        follower.style.transition = ''; 
    }

    follower.style.left = e.pageX + 'px';
    follower.style.top = e.pageY + 'px';
    
    const moveX = (e.pageX * -1 / 20); 
    const moveY = (e.pageY * -1 / 20);
    
    bgImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

