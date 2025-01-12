const restaurants = [
  {
    Name: "Thai House",
    cuisine: "Thai",
    location: "Charlotte, NC",
    rating: 4,
    src: "https://th.bing.com/th/id/R.403f8e5b1f4306efd17aee040a28d905?rik=UR%2b7GEEcNXpPdA&riu=http%3a%2f%2fwww.insplosion.com%2fblog%2fwp-content%2fuploads%2f2020%2f12%2fThe-Top-5-Most-Beautiful-Restaurants-in-Toronto-1.jpg&ehk=ccnea3EgjOq02rwlw0wrXpxTCmdkoq2WiJrBHiKQKw4%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    Name: "China Buffet",
    cuisine: "Buffet, Chinese",
    location: "Atlanta, GA",
    rating: 3,
    src: "https://th.bing.com/th/id/R.49a83975e725f087c9a1ee83e413ddd0?rik=wttQVqVcKczMgw&pid=ImgRaw&r=0",
  },
  {
    Name: "Da Vinci's Pizza",
    cuisine: "Pizza",
    location: "New York City, NY",
    rating: 4,
    src: "https://i.pinimg.com/originals/a1/de/a0/a1dea00a810c9395f9663bfb992bfa74.jpg",
  },
];
function render(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    const restaurant = someArray[i];
    let star = "";
    for (let j = 0; j < restaurant.rating; j++) {
      star += "⭐";
    }

    let card = `
    <div class="container text-center mt-5">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;" class="mt-5">
  <img src="${restaurant.src}" alt="aventura group photo">
  <div class="card-body p-3 mb-0 bg-primary-subtle text-primary-emphasis">
  <h5 class="card-title">${restaurant.Name}</h5>
    <p class="card-title">${restaurant.cuisine}</p>
    <p class="card-text">${restaurant.location}</p>
     <p class="card-text">${star}</p>
      
  </div>
</div>
    </div>
   
    
  </div>
</div>
    
    `;
    //document.getElementById("band1").innerHTML += card
    document.getElementById("main3").innerHTML += card;
  }
}
render(restaurants);
