
$(document).ready(function(){
    $(".slider").slick({
        slidesToShow: 1 ,
        cssEase: 'linear',
        speed: 1000,
        fade: true,
        dots: true,
        arrows:true,
        prevArrow:`.arrows .leftarrow`,
        nextArrow:`.arrows .rightarrow`,

    });

    $(".deletButton"). click(function(){
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })

    });
   
});
          