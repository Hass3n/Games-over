
let  links=document.querySelector('nav');
let h=document.querySelector('header')


console.log(links.offsetTop);

window.addEventListener('scroll',function(){



    if(window.scrollY > 120)
        {

 

            h.classList.add('d-none');
            links.classList.add('position-fixed')

        }


        else

        {

            h.classList.remove('d-none')

            links.classList.remove('position-fixed')



        }
 

    


    



});



import { gameDetails } from "./details.js";
/*************************APi games */

import { Games} from "./modules.js";

import { uiGames } from "./ui.js";


let linksTitle=document.querySelectorAll('.nav-links li a');

let games=document.querySelector('.game');
let details=document.querySelector('.row-details')

let uidetails=document.querySelector('.Games-detils');
let gameTitle=document.querySelector('.game-title ');
let exit=document.querySelector('.close');

linksTitle.forEach(function(element,index){



    element.addEventListener('click',function(e){

      

        getGames(element.innerHTML.toLowerCase())

    });

});


async function getGames(categ='mmorpg') {


    let url = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`,
        {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'e98ad20a07msh4577a7bf285e4cfp1a1e9fjsnc988d1eeb128',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        }




    );
    let data = await url.json();



    console.log('datahere',data);

   new uiGames().displayGames(new Games(data).getALLGames(),games);

}





/***call when app start */
getGames();




/***********************Games Details */

 export function displayDetailsGames(index)
{
    console.log('index',index);

    getGamesDetails(index)





}






async function getGamesDetails(ID)
{


    let url=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${ID}`,

    {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e98ad20a07msh4577a7bf285e4cfp1a1e9fjsnc988d1eeb128',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }

    }

    );

    let data= await url.json();

   
    new uiGames().displayDetails(new gameDetails(data).getDetailsGame(),details);

    uidetails.classList.replace('d-none','d-block')
    gameTitle.classList.add('d-none');



    console.log(data);
}



exit.addEventListener('click',function(){

    uidetails.classList.replace('d-block','d-none')
    gameTitle.classList.replace('d-none','d-block');

});


export function openUrl(url)
{

  location.href=url;
}
//https://www.freetogame.com/g/572/videoplayback.webm