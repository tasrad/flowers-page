const flovers = [{
    image: '/img/cart1.png',
    name: 'Ніжна свіжість: ',
    desctiption: 'троянди та лілії',
    cost: '445'
}]


function createContentTemplate(flovers){
    const cardFlovers = `
    <div class="card-of-flowers">
    <div class="card-section4" >
        <img src="url(${flovers.image})" width="310px" height="310px">
        <h4 class="name-flowers text-center mt-3">${flovers.name}
        </h4>
        <h4 class="description-flovers text-center">
            ${flovers.flovers}
        </h4>
        <h4 class="cost text-center m-2">${price}</h4>
        <button class="button-s4">В кошик</button>

    </div>
</div>
    `
}

function getFlovers (info){
    let apiKey = "20221006140459";
    let apiUrl = "https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f";
    axios.get(apiUrl).then(createContentTemplate)
}

 function createFragmentTemplate(str){
    const template = document.createElement('template');
    template.innerHTML = str;
    return template.content
 }

 function appendContent(content){
    const el = document.getElementById('content');
    el.appendChild(content);
 }

 function init (flovers){
    const fragment = document.createDocumentFragment();

    flovers.forEach((flovers) => {
    fragment.appendChild(createContentTemplate(flovers));
    });
appendContent(fragment);
 }
 init (flovers);



