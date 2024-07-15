function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var amount = document.getElementById('amount').value;

    if (name === '' || email === '' || amount === '') {
        alert('All fields are required!');
        return false;
    }
    alert("Thank You For Donating!");
    return true;
}

var currentSlide = 0;
showSlide(currentSlide);

function showSlide(index) {
    var slides = document.getElementsByClassName('slide');
    if (index >= slides.length) { currentSlide = 0 }
    if (index < 0) { currentSlide = slides.length - 1 }
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[currentSlide].style.display = 'block';
}

function nextSlide() {
    currentSlide++;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    showSlide(currentSlide);
}

function validateContact(){
    var name1 = document.getElementsById('name1').value;
    var email1 = document.getElementById('email1').value;
    var feedback1 = document.getElementById('feedback1').value;

    if(name1 ===''||email1 ===''||feedback1 ===''){
        alert('All fields are required')
        return false;
    }
    alert("Submitted Succesfully!");
    return true;
}