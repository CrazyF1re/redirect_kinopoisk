let div = document.createElement('button');
div.className = 'my_button';
div.innerText = 'Watch';   


function add_button()
{
    let place = document.querySelector('div[class^= styles_buttons]');
    place.append(div);
}

let prevUrl = undefined;
setInterval(() => {
  const currUrl = window.location.href;
  if (currUrl != prevUrl && (currUrl.indexOf('film',)!=-1 || currUrl.indexOf('series')!=-1)) {
    prevUrl = currUrl;
    add_button();
  }
}, 1);

window.addEventListener('popstate',()=>
{
        history.go();
        add_button();
})


div.addEventListener('click', ()=>
{
    window.open('http://www.kinopoiskkk.ru/' + window.location.href.slice(25),'_self');
}
)
