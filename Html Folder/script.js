const score = document.querySelector('.score');
const ratings = document.querySelectorAll('.rating input');
ratings.forEach(rating => {
    rating.addEventListener('change',() =>{
const selectedRating = rating.value;
const text = selectedRating == 1 ? 'star' : 'stars';
score.textContent = '${selectedRating} ${text} rating.'; 
    });
});