let blocs = document.querySelectorAll('.bloc');
let faqs = document.querySelector('.faq');

faqs.addEventListener('click', e => {
    const targetBox = e.target.closest('.bloc').classList;
    if(targetBox.contains('active')){
        targetBox.remove('active');
    }else{
        blocs.forEach(bloc => bloc.classList.remove('active'));
        targetBox.add('active');
    }
})
