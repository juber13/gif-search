



 async function formHandler(e){
     e.preventDefault();
     const inputVal = document.querySelector('.input').value;
     if(!inputVal) return;
    const apiKey = 'gaeZY8iytuvSbrjaFoKJsCDPMQ6Mg7ri';
    let counter = 10;
    let finalURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${inputVal}&limit=${counter}&offset=0&rating=g&lang=en`;
    try{
      document.querySelector('.card-container').innerHTML =  `<h2>Loding...</h2>`;
      const res = await fetch(finalURL);
      const {data} = await res.json();
      if(data) document.querySelector(".card-container").innerHTML = "";
      createGif(data);
    }catch(error){
        console.log(error)
    }

}



function createGif(response){
    const html = response.map((item) => {
        const  {downsized_medium} = item.images;
        return `<div class="card"> 
                 <img src=${downsized_medium.url} alt="working">
                 <p class="title">${item.title}</p>
                </div>`;
    });
     

    // document.querySelector('.content').className = 'flex'
    document.querySelector('.card-container').innerHTML = html.join('');

    const loadBtn = document.createElement('button');
    loadBtn.textContent = "Load More";
    loadBtn.className = "load-more-btn";

    document.querySelector('.content').appendChild(loadBtn);

}



// window.addEventListener('load' , genrate)
document.querySelector('.input-field').addEventListener('submit' , formHandler)