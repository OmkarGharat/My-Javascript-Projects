/*
creates a closure that does not pollute global space
*/
(function (el) {
    // so this variable is available only within here
    var minDeltaY;
    // not the recommended way to add events, but the easiest
    el.onwheel = function (e) {
        // we want to eliminate vertical scrolling
        if (e.deltaY) {
            // normalize
            if (minDeltaY > Math.abs(e.deltaY) || !minDeltaY) {
                minDeltaY = Math.abs(e.deltaY);
            }
            // scroll a decent amount
            el.scrollLeft += (e.deltaY / minDeltaY)
                * ((el.scrollWidth - el.clientWidth) * 2);
            // do not let other wheel events to fire
            e.stopPropagation();
            e.cancelBubble = true; // same for old IE
            // and we don't want the default action either
            e.preventDefault();
            e.returnValue = false; // same for old IE
        }
    }
    // support browsers that do not support DOM Level 3 wheel
    el.onmousewheel = function (e) {
        // old Internet Explorer
        if (!e) e = window.event;
        // we normalize the value so no need to guess how to convert
        e.deltaY = -e.wheelDelta;
        // we have done enough
        el.onwheel(e);
    }
})(document.getElementsByClassName('grid_container')[0]);
// ^----- we pass "el" to the above function down here!


// ************************************************************************************************************************


const UpdateLikes = () => {

    let like_btn = document.getElementById('like');
    let likes2 = document.querySelector('#LIKES2');

    let L2 = +(likes2.innerHTML);

    if (like_btn.className == "far fa-heart") {
        like_btn.classList.replace("far", "fas")
        L2 = L2 + 1;
        likes2.innerHTML = `${L2}`;

    }
    else if (like_btn.className == "fas fa-heart") {
        like_btn.classList.replace("fas", "far");
        L2 = L2 - 1 ;
        likes2.innerHTML = `${L2}`;
    }

};

const dislikeS = () => {

    let dislike_btn = document.getElementById('dislike');
    let dislike2 = document.querySelector('#DISLIKE2');

    let DL2 = +(dislike2.innerHTML);

    let like_btn = document.getElementById('like');
    let likes2 = document.querySelector('#LIKES2');

    let L2 = +(likes2.innerHTML);

    if (dislike_btn.className == "fas fa-heart-broken yes") {
        dislike_btn.classList.replace("yes", "no")
        DL2 = DL2 + 1;
        dislike2.innerHTML = `${DL2}`;

        if (like_btn.className == "far fa-heart") {
            likes2.innerHTML = `${L2}`;
        } else if (like_btn.className == "fas fa-heart") {
            like_btn.classList.replace("fas", "far");
            L2 = L2 - 1;
            likes2.innerHTML = `${L2}`;
        }

    } else if (dislike_btn.className == "fas fa-heart-broken no") {
        dislike_btn.classList.replace("no", "yes");
        DL2 = DL2 - 1;
        dislike2.innerHTML = `${DL2}`;

        if (like_btn.className == "far fa-heart") {
            like_btn.classList.replace("far", "fas")
            L2 = L2 + 1;
            likes2.innerHTML = `${L2}`;
        } 
        else if (like_btn.className == "fas fa-heart") {
            like_btn.classList.replace("fas", "far");
            L2 = L2 - 1;
            likes2.innerHTML = `${L2}`;
        }
    }

};

const bookmark = () => {

    let Bkmrk = document.getElementById('Bkmrk');
    
    if (Bkmrk.className == "far fa-bookmark") {
        Bkmrk.classList.replace("far", "fas");
    }
    else {
        Bkmrk.classList.replace("fas", "far");
    }

    let bookmark_class = document.querySelector('.fa-bookmark');
    bookmark_class.style.color = "#5d1896";

};