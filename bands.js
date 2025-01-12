"use strict";



const bands = [
  {
    bandName: "Aventura",
    genre: "Bachata",
    formedYear: 1993,
    active: true,
    src: "https://th.bing.com/th/id/OIP.1k3vYtlOsR5PNXjTIweQUwHaHa?w=171&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
  },
  {
    bandName: "Mana",
    genre: "Mexican Rock",
    formedYear: 1086,
    active: true,
    src: "https://th.bing.com/th/id/R.4f22137a2bb384758ff370f1e7ab54c8?rik=s9ITzlGKS5j%2bwQ&pid=ImgRaw&r=0",
  },

  {
    bandName: "RBD",
    genre: "Latin Pop",
    formedYear: 2004,
    active: false,
    src: "https://th.bing.com/th/id/R.0902f28e9ddb08c7cc05e6e86dfbf432?rik=NfNnWce3eypGMw&riu=http%3a%2f%2fimages5.fanpop.com%2fimage%2fphotos%2f31900000%2fRBD-rbd-band-31951670-1024-768.jpg&ehk=BTCKmoCV%2fDYpchSqickzFFPv7GHzLHW9fdPhzVvUcNk%3d&risl=&pid=ImgRaw&r=0",
  },
];

function render(someArray) {
  for (let i = 0; i < someArray.length; i++) {
    let active = "";
    const band = someArray[i];
    if (band.active) {
      active = "Active";
    } else {
      active = "Not Active";
    }
    let card = `
    <div class="container text-center mt-5">
  <div class="row">
    <div class="col">
      <div class="card" style="width: 18rem;" class="mt-5">
  <img src="${band.src}" alt="aventura group photo">
  <div class="card-body p-3 mb-0 bg-primary-subtle text-primary-emphasis">
    <h5 class="card-title">${band.bandName}</h5>
    <p class="card-text">${band.genre}</p>
     <p class="card-text">${band.formedYear}</p>
      <p class="card-text">${active}</p>
  </div>
</div>
    </div>
   
    
  </div>
</div>
    
    `;
    document.getElementById("main1").innerHTML += card;
  }
}
render(bands);
