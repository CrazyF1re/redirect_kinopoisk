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
  if (currUrl != prevUrl && currUrl.indexOf('film','series')!=-1) {
    console.log(prevUrl)
    console.log(currUrl)
    prevUrl = currUrl
    add_button()

  }
}, 60);

window.addEventListener('popstate',()=>
{
        history.go()
        add_button()
})


div.addEventListener('click', ()=>
{
    console.log('click')
     window.location.href = "https://1ww.frkp.live/" + window.location.href.slice(25);
}
)
