let div = document.createElement('button');
div.className = 'my_button';
let prevUrl = undefined;

function add_button()
{
    let place = document.querySelector('div[class^= styles_buttons]');
    url = 'http://www.kinopoiskkk.ru/' + window.location.href.slice(25);
    div.innerHTML = `<a href ="${url}" style = "text-decoration:none; color:white;font-weight:300;">Watch</a>`;
    place.append(div);
}

function make_lot_btns()
{
  films = document.querySelectorAll('div[class= info]');
  for (const item of films)
  {    
    let url = 'http://www.kinopoiskkk.ru/' + item.querySelector(".name").href.slice(25);
    let place = item;
    let btn = document.createElement('div');
    btn.className = 'btn';
    btn.innerHTML = `<a style="color:#ffffff;padding-top : 25px; text-decoration:none; margin:0 auto; padding:5px; font-size:15px;" class = "a-btn" href ="${url}">Watch</a>`;
    place.append(btn);
  }
}

setInterval(() => {
  const currUrl = window.location.href;
  if (currUrl != prevUrl && (currUrl.indexOf('kinopoisk.ru/film',)!=-1 || currUrl.indexOf('kinopoisk.ru/series')!=-1)) {
    prevUrl = currUrl;
    add_button();
  }
  if (currUrl != prevUrl && currUrl.indexOf('folder')!=-1)
  {
    make_lot_btns();
    prevUrl = currUrl; 
  }
}, 1);

window.addEventListener('popstate',()=>
{
        history.go();
        add_button();
        currUrl = window.location.href;
});