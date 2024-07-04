import { displayDetailsGames, openUrl } from "./main.js";


export class uiGames
{

  

  constructor()
  {



    window.displayDetailsGames=displayDetailsGames;
    window.openUrl=openUrl;


  }


    displayGames(games ,parent)
    {




        let box=` `;

        for(let i=0;i<games.length;i++)
            {
                
          

                box+=`
                
                
      <div class="col-md-6 col-lg-4 col-xl-3" onclick="window.displayDetailsGames(${games[i]['id']})">
        <div class="card">
          <a href="#">
            <img src="${games[i]['thumbnail']}" class="card-img-top " alt="...">
       

          </a>

    
          <div class="card-body">

            <div class="games-title d-flex justify-content-between  ">
              <a href="#">
                <h6 class="card-title text-white ">${games[i]['title']}</h6>

              </a>
              <button class="games-btn rounded-3">Free</button>

            </div>
            <a href="#">
              <p class="card-text  text-center mt-2">${games[i]['short_description'].slice(0,30)} </p>

            </a>
          </div>
          <div class="card-footer d-flex justify-content-between">

            <button class="games-btn rounded-3">${games[i]['genre']}</button>
            <button class="games-btn rounded-3">${games[i]['platform']}</button>


          </div>
        </div>
      </div>
      
                
                
                
                `;

            }




            parent.innerHTML=box;

    }







    displayDetails(detailsobj,parent)
    {

      let box=``;

      box+=`
            <div class="col-md-12 col-lg-4">

                <img src='${detailsobj['thumbnail']}' alt="" class="w-100">
            </div>

            <div class="col-md-12 col-lg-8">

                <div class="details-title">
                    <h3>Title: ${detailsobj['title']}</h3>
                    <p>Category:<span>${detailsobj['genre']}</span></p>
                    <p>Platform:<span>${detailsobj['platform']}</span></p>
                    <p>Status:<span>${detailsobj['status']}</span></p>
                    <p>
                  ${detailsobj['description']}
                    

                    </p>

                    <button type="button" class="btn btn-warning text-white" onclick="window.openUrl('${detailsobj['game_url']}')">Show Game</button>

                </div>
            </div>
      
      `;


      parent.innerHTML=box;

    }


}


