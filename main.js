document.addEventListener("DOMContentLoaded", function() {
    let bpitems = document.querySelectorAll('.bikepark .bplist .bpitem');
    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    let profile = document.querySelectorAll('.profile .bpitem');

    // Config parameters
    let countItem = bpitems.length;
    let bpitemActive = 0;

    // Event next click
    next.onclick = function(){
        console.log();
        bpitemActive = bpitemActive + 1;
        if(bpitemActive >= countItem){
            bpitemActive = 0;
        }
        showSlider();
    }

    //event prev click
    prev.onclick = function(){
        bpitemActive = bpitemActive - 1;
        if(bpitemActive < 0){
            bpitemActive = countItem - 1;
        }
        showSlider();
    }

    function showSlider(){
        //remove item active old
        console.log();
        let bpitemActiveOld = document.querySelector('.bikepark .bplist .bpitem.active');
        let profileActiveOld = document.querySelector('.profile .bpitem.active');
        bpitemActiveOld.classList.remove('active');
        profileActiveOld.classList.remove('active');

        //active new item
        bpitems[bpitemActive].classList.add('active');
        profile[bpitemActive].classList.add('active');
    }

    // click thumbnail
    profile.forEach((profile, index) => {
        profile.addEventListener('click', () => {
            bpitemActive = index;
            showSlider();
        })
    })

});