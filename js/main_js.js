//api 변수
const inputNickname = document.querySelector(".input_nickname");
const searchButton = document.querySelector(".search_button");
let playerNickname = "";
const wordType = "full";

// 랭킹 이벤트 변수
const rankingMenu = document.querySelector(".ranking_menu")
const rankingButton = document.querySelector(".ranking_button");
const close = document.querySelector(".close")


// 유저아이디 받아오기
inputNickname.addEventListener("change", function () {
  playerNickname = document.querySelector(".input_nickname").value;
});

async function searchPlayer(nickname, wordType) {
  try {
    const apiUrl = `https://api.neople.co.kr/cy/players?nickname=${nickname}&wordType=${wordType}&apikey=BBm56lzP9IxtGbM0tPRw0y0prd0ATmAR`;
    const response = await fetch(apiUrl);
    const searchData = await response.json();
    const playerId = (searchData.rows[0].playerId);
    const represent = (searchData.rows[0].represent);
    const grade = (searchData.rows[0].grade)
    console.log(searchData.rows[0]);
    
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

searchButton.addEventListener("click", function () {
  searchPlayer(playerNickname, wordType);
});
inputNickname.addEventListener("change", function () {
  searchPlayer(playerNickname, wordType);
  
});

//랭킹 이벤트
rankingButton.addEventListener("click",function(){
  rankingMenu.style.cssText = "left:0;";
})

close.addEventListener("click",function(){
  rankingMenu.style.cssText = "left:-15%;"
})


