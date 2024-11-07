const card1=document.querySelector("div")
card1.innerHTML= `
<img src="https://guesswatches.com/cdn/shop/files/Nav_Collections_656x410_Mobile_F24_Sig_c52b35e4-1d84-4639-8e01-22a339d93a30.png?v=1725468376&width=720" width="330px"; height="300px">
<p>GUESS</p>
<button>Buy NOw</button>`
card1.style.border="2px solid blue";
card1.style.backgroundColor="lightgray";
card1.style.display="inline-block";
card1.style.padding="10px";
card1.style.borderRadius="20px"
card1.style.textAlign="center";
card1.style.marginLeft="30px";


const card2=document.getElementById("watch")
card2.innerHTML= `
<img src="https://watchclubpakistan.pk/cdn/shop/files/evoindia_2021-04_66688d38-e131-40b2-b759-d3740a0ed6f3_Rolex_Hero.webp?v=1671568341&width=1500" width="330px"; height="300px";>
<p>Rolex Watch</p>
<button>Buy NOw</button>`
card2.style.border="2px solid blue";
card2.style.backgroundColor="lightgray";
card2.style.display="inline-block";
card2.style.padding="10px";
card2.style.borderRadius="20px"
card2.style.textAlign="center";
card2.style.marginLeft="10px";

const card3=document.createElement("div")
card3.id="watch1"
card3.innerHTML= `
<img src="https://i.ytimg.com/vi/jqIDtNCLV_I/hqdefault.jpg" width="330px"; height="300px";>
<p>Jacob & Co.</p>
<button>Buy NOw</button>`
card3.style.border="2px solid blue";
card3.style.backgroundColor="lightgray";
card3.style.display="inline-block";
card3.style.padding="10px";
card3.style.borderRadius="20px"
card3.style.textAlign="center";
card3.style.marginLeft="20px";
document.body.appendChild(card3)

const card4=document.createElement("div")
card4.id="watch1"
card4.innerHTML= `
<img src="https://www.watchesandcrystals.com/cdn/shop/articles/buy-best-hublot-luxury-watches-for-men-and-women-online-uk-369244.jpg?v=1659676054" width="330px"; height="300px";>
<p>Hublot Watch</p>
<button>Buy NOw</button>`
card4.style.border="2px solid blue";
card4.style.backgroundColor="lightgray";
card4.style.display="inline-block";
card4.style.padding="10px";
card4.style.borderRadius="20px"
card4.style.textAlign="center";
card4.style.marginLeft="20px";
document.body.appendChild(card4)