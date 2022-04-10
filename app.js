let questions = document.querySelectorAll('.passiv_question');

function faq(){
    questions.forEach((ele, i) => {
        if(ele.getAttribute('class') === ''){
            ele.classList.add('passiv_question')
        };
        ele.addEventListener('click', e => {
            document.querySelector('.active_question')?.classList.add('passiv_question');
            document.querySelector('.active_answer')?.classList.add('passiv_answer');
            document.querySelector('.active_answer')?.classList.remove('active_answer');
            document.querySelector('.active_question')?.classList.remove('active_question');
            document.querySelector('.active_arrow')?.classList.remove('active_arrow');
            ele.classList.remove('passiv_question');
            ele.setAttribute('class','active_question');
            ele.querySelector('.arrow').classList.add('active_arrow');
            ele.nextElementSibling.classList.remove('passiv_answer');
            ele.nextElementSibling.classList.add('active_answer');
        })}
);}

faq();