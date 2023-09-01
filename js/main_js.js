const inputNickname = document.querySelector(".input_nickname");
const searchButton = document.querySelector(".search_button")
let playerNickname = "";
const wordType = "full"

// 유저아이디 받아오기
inputNickname.addEventListener("change",function(){
    playerNickname = document.querySelector(".input_nickname").value;
    console.log(playerNickname)
})

async function searchPlayer(nickname,wordType){
     try{
     const response = await fetch("https://api.neople.co.kr/cy/players?nickname=<nickname>&wordType=<wordType>&apikey=BBm56lzP9IxtGbM0tPRw0y0prd0ATmAR");
     const searchData = await response.json();
     console.log('search result',searchData);
     } catch (error){
         console.error('An error occurred'.error);
     }  
 }
 
 searchButton.addEventListener("click",function(){
    searchPlayer(playerNickname,"full");
 })
 

