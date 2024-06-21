let movies = fetch("https://projectdatabaseforimdb.onrender.com/search", {
  method: "get",
  headers: { "Content-Type": "application/json" },
}).then((e) =>
  e.json().then((e) => {
    res = e;
    let newRelease = document.getElementById("movieInfo");
    for (i = 101; i <= 113; i++) {
      if (i == 109) {
        continue;
      }
      let card = document.createElement("div");
      card.setAttribute("id", "card");
      newRelease.appendChild(card);

      let imgInDiv = document.createElement("img");
      imgInDiv.setAttribute("src", res[i].image);
      imgInDiv.setAttribute("id", "imgInDiv");
      card.appendChild(imgInDiv);

      let movieData = document.createElement("div");
      movieData.setAttribute("id", "movieData");
      movieData.style.padding = "2px 5px 5px 15px";
      card.appendChild(movieData);

      let movieName = document.createElement("p");
      movieName.style.color = "rgba(255, 152, 68, 0.849)";
      movieName.setAttribute("id", "movieName");
      movieName.innerHTML = res[i].title;
      movieData.appendChild(movieName);

      let genre = document.createElement("p");
      genre.style.color = "rgba(236, 236, 236, 0.306)";
      genre.style.fontSize = "16px";
      genre.style.marginTop = "5px";
      genre.setAttribute("id", "genreInDiv");
      genre.innerHTML = res[i].genre;
      movieData.appendChild(genre);

      let syno = document.createElement("p");
      syno.innerHTML = res[i].synopsis;
      syno.style.marginTop = "10px";
      syno.setAttribute("id", "syno");
      syno.style.color = "rgba(205, 202, 202, 0.838)";
      movieData.appendChild(syno);

      let rateDiv = document.createElement("div");
      rateDiv.setAttribute("class", "rateDiv");
      movieData.appendChild(rateDiv);

      let star = document.createElement("img");
      star.setAttribute("src", "./star.png");
      star.style.width = "20px";
      star.style.height = "20px";
      rateDiv.appendChild(star);

      let rate = document.createElement("p");
      rate.innerHTML = res[i].rating + " /10";
      rateDiv.appendChild(rate);
    }
    // ===========================================================================
    let watchList = document.getElementById("watchList");
    for (i = 30; i <= 43; i++) {
      let card = document.createElement("div");
      card.setAttribute("id", "card2");
      watchList.appendChild(card);

      let cardImg = document.createElement("img");
      cardImg.setAttribute("src", res[i].image);
      card.appendChild(cardImg);

      let movieName = document.createElement("p");
      movieName.setAttribute("id", "card3");
      movieName.innerHTML = res[i].title;
      card.appendChild(movieName);

      let genre = document.createElement("p");
      genre.innerHTML = res[i].genre;
      genre.setAttribute("id", "genreInWatch");
      card.appendChild(genre);

      let rateDiv = document.createElement("div");
      rateDiv.style.justifyContent = "center";
      rateDiv.setAttribute("class", "rateDiv");
      card.appendChild(rateDiv);

      let star = document.createElement("img");
      star.setAttribute("src", "./star.png");
      star.style.width = "20px";
      star.style.height = "20px";
      rateDiv.appendChild(star);

      let rate = document.createElement("p");
      rate.innerHTML = res[i].rating + " /10";
      rateDiv.appendChild(rate);
    }
    //===============================================================================
    let topImg = document.getElementById("topImg");
    for (j = 3; j <= 6; j++) {
      if (j == 2 || j == 5) {
        continue;
      } else {
        let img1 = document.createElement("img");
        img1.setAttribute("id", "top100Img");
        img1.setAttribute("src", res[j].image);
        topImg.appendChild(img1);
      }
    }
  })
);
document.getElementById("search").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("searchData").style.top = "0vh";
  document.body.style.overflow = "hidden";
});

document.getElementById("cancel").addEventListener("click", () => {
  document.getElementById("searchData").style.top = "-100vh";
  document.body.style.overflow = "scroll";
});

document.getElementById("searDiv").addEventListener("submit", (e) => {
  e.preventDefault();
  window.open("./searchData.html", "_self");
});
function searchData() {
  let inputData = document.getElementById("search").value;
  localStorage.setItem("searchData", inputData);
}

document.getElementById("menuBar").addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  document.getElementById("cancelMenu").style.scale = "1";
  document.getElementById("menuData").style.transform = "translateX(0px)";
});

document.getElementById("cancelMenu").addEventListener("click", () => {
  document.body.style.overflow = "scroll";
  document.getElementById("cancelMenu").style.scale = "0";
  document.getElementById("menuData").style.transform = "translateX(-320px)";
});
