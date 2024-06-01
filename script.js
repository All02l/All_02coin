let coinCount = 0;

document.getElementById('clickButton').addEventListener('click', () =>{
    coinCount++;
    const coinCountElement = document.getElementById('coinCount')
    coinCountElement.classList.add('animated');


    setTimeout(() => {
        coinCountElement.classList.remove('animated');
    }, 500);
})