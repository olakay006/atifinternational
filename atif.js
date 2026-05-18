// NAVBAR SCROLL EFFECT
    window.addEventListener('scroll', function(){

        const navbar = document.querySelector('.custom-navbar');

        if(window.scrollY > 50){
            navbar.classList.add('scrolled');
        } else{
            navbar.classList.remove('scrolled');
        }

    });

    // CERTIFICATE MODAL

    const certificateImage =
    document.getElementById('certificateImage');

    const certificateModal =
    document.getElementById('certificateModal');

    const closeModal =
    document.getElementById('closeModal');

    // OPEN MODAL
    certificateImage.addEventListener('click', () => {

        certificateModal.classList.add('show');

    });

    // CLOSE MODAL
    closeModal.addEventListener('click', () => {

        certificateModal.classList.remove('show');

    });

    // CLOSE WHEN CLICKING OUTSIDE IMAGE
    certificateModal.addEventListener('click', (e) => {

        if(e.target === certificateModal){

            certificateModal.classList.remove('show');

        }

    });