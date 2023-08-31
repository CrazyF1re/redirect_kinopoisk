
const place = document.querySelector('div[class^= styles_buttons]');

let div = document.createElement('button');
div.className = 'my_button';
div.innerText = 'Watch';
// const url ="https://kinopoiskkk"+ window.location.href.slice(21);
const url = "https://1ww.frkp.live/" + window.location.href.slice(25);


place.append(div);


div.addEventListener('click', ()=>
{
     window.location.href = url
}
)
