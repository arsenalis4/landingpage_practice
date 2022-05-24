$(document).ready(function(){ 
    FadeAnimation();
})

async function FadeAnimation() {
    await fade_slider('#eclipse_1, #main_photo_animation_one');
    await fade_slider('#eclipse_2, #main_photo_animation_two');
    await fade_slider('#eclipse_3, #main_photo_animation_three');
    await fade_slider('#eclipse_4, #main_photo_animation_four');
    FadeAnimation();
}

function fade_slider(a) {
  return new Promise((resolve, reject) => {
      $(a).fadeIn(2000, () => {
          $(a).fadeOut(2000, () => {
              resolve();
          });
      });
  })
}

function display_none(a){
    $(a).css('display', 'none')
}

$(document).on('click', '.scroll_up' ,function(e) {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  })
  
