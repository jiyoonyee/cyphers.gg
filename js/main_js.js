fetch('https://api.neople.co.kr/cy/players?nickname=<nickname>&wordType=<wordType>&apikey=<apikey>')
 	.then(res => res.json())
    .then(data => console.log(data));