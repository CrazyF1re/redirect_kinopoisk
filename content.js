let div = document.createElement('a');
div.className = 'my_button';
div.textContent = 'Watch'
let prevUrl = undefined;

function add_button()
{
    let place = document.querySelector('div[class^= styles_buttons]');
    let url = 'http://www.kinopoiskkk.ru/' + window.location.href.slice(25);
    div.href = url;
    place.append(div);
}

function make_lot_btns()
{
  let films = document.querySelectorAll('div[class= info]');
  for (const item of films)
  {    
    let url = 'http://www.kinopoiskkk.ru/' + item.querySelector(".name").href.slice(25);
    let place = item;
    let btn = document.createElement('a');
    btn.className = 'btn';
    btn.href = url;
    btn.textContent = 'Watch';
    place.append(btn);
  }
}

setInterval(() => {
  const currUrl = window.location.href;
  if (currUrl != prevUrl && (currUrl.indexOf('kinopoisk.ru\/film',)!=-1 || currUrl.indexOf('kinopoisk.ru\/series')!=-1)) {
    prevUrl = currUrl;
    add_button();
  }
  else if (currUrl != prevUrl && currUrl.indexOf('folders')!=-1)
  {
    prevUrl = currUrl; 
    make_lot_btns();
  }
  else if(currUrl!=prevUrl && currUrl.indexOf('lists/movies')!=-1){
    prevUrl = currUrl; 
    let films = document.querySelectorAll('div[class *= styles_root__ti07r]');
    films.forEach(element => {
      let url = 'http://www.kinopoiskkk.ru/' + element.querySelector("a[class*=styles_root__wgbNq]").href.slice(25);
      let btn = document.createElement('a');
      btn.className = 'btn';
      btn.href = url;
      element.querySelector('div[class*="styles_main__Y8zDm"]').append(btn);
    });
  }
  // else if(currUrl!=prevUrl && currUrl.indexOf('movies')!=-1)
  // {

  // }
  prevUrl = currUrl;
}, 1000);



window.addEventListener('popstate',()=>
{
  currUrl = window.location.href;
  if ((currUrl.indexOf('kinopoisk.ru\/film',)!=-1 || currUrl.indexOf('kinopoisk.ru\/series')!=-1)) {
    history.go();
    add_button();
  }
  // else if(currUrl.indexOf('lists\/movies')!=-1){
  //   console.log(123);
  //   history.go();
  //   let films = document.querySelectorAll('div[class *= styles_root__ti07r]');
  //   films.forEach(element => {
  //     let url = 'http://www.kinopoiskkk.ru/' + element.querySelector("a[class*=styles_root__wgbNq]").href.slice(25);
  //     let btn = document.createElement('div');
  //     btn.className = 'btn';
  //     btn.innerHTML = `<a style="color:#ffffff;padding-top : 25px; text-decoration:none; margin:0 auto; padding:5px; font-size:15px;" class = "a-btn" href ="${url}">Watch</a>`;
  //     element.querySelector('span[class="styles_mainTitle__IFQyZ styles_activeMovieTittle__kJdJj"]').append(btn);
  //   });
  
        
});



