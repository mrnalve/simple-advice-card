loadAdvice = async()=>{
    const url = 'https://api.adviceslip.com/advice'
    const res = await fetch(url);
    const data = await res.json();
    displayAdvice(data.slip);
};

// display advice in card
displayAdvice = data =>{
    const adviceId = document.getElementById('adviceId')
    const advice = document.getElementById('advice')
    adviceId.innerText = `Advice #${data.id}`
    advice.innerText = `"${data.advice}"`
}
loadAdvice()