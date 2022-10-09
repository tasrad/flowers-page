const flovers = [{
    image: '/img/cart1.png',
    name: 'Ніжна свіжість: ',
    desctiption: 'троянди та лілії',
    cost: '445'
}];

function displayCardFlovers (flovers) {
    let contentFlovers = document.querySelector("#content-conteiner");
    let floversContent = `<section id="content">`;
    flovers.data.forEach(function(item){
        floversContent = floversContent +
        `
        
    <div class="card-section4 m-4" >
    <img src="${item.image}" width="310px" height="310px">
    <h4 class="name-flowers text-center mt-3">${item.name}
    </h4>
    <h4 class="description-flovers text-center">
        ${item.flovers}
    </h4>
    <h4 class="cost text-center m-2">${item.price}</h4>
    <button class="button-s4">В кошик</button>
</div>  
        `;
    })
    floversContent = floversContent + `</section>`;
    contentFlovers.innerHTML = floversContent;
}

async function getFlovers () {
    let apiUrl = "https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f";
    axios.get(apiUrl).then((flovers) => {
        console.log('flovers: ', flovers);
        displayCardFlovers(flovers)
    });
}
getFlovers ();














