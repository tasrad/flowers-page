// const flovers = [{
//     image: '/img/cart1.png',
//     name: 'Ніжна свіжість: ',
//     desctiption: 'троянди та лілії',
//     cost: '445'
// }];

// function displayCardFlovers (flovers){
//     let contentFlovers = document.querySelector("#content");
//     let floversContent = `<section id="content">`;
//     flovers.forEach(function(flovers){
//         floversContent = floversContent +
//         `
//         <div class="card-of-flowers">
//     <div class="card-section4" >
//     <img src="url(${flovers.data.image})" width="310px" height="310px">
//     <h4 class="name-flowers text-center mt-3">${flovers.data.name}
//     </h4>
//     <h4 class="description-flovers text-center">
//         ${flovers.data.flovers}
//     </h4>
//     <h4 class="cost text-center m-2">${flovers.data.price}</h4>
//     <button class="button-s4">В кошик</button>

// </div>
// </div>  
//         `;
//     })
//     floversContent = floversContent = `</section>`;
//     contentFlovers.innerHTML = contentFlovers;

// }


// function getFlovers (){
//     let apiKey = "20221006140459";
//     let apiUrl = "https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f";
//     axios.get(apiUrl).then(displayCardFlovers(flovers))
// }
// getFlovers ();










// function createContentTemplate(flovers){
//     const cardFlovers = `
//     <div class="card-of-flowers">
//     <div class="card-section4" >
//         <img src="url(${flovers.data.image})" width="310px" height="310px">
//         <h4 class="name-flowers text-center mt-3">${flovers.data.name}
//         </h4>
//         <h4 class="description-flovers text-center">
//             ${flovers.data.flovers}
//         </h4>
//         <h4 class="cost text-center m-2">${flovers.data.price}</h4>
//         <button class="button-s4">В кошик</button>

//     </div>
// </div>
//     `;
//     return createFragmentTemplate(cardFlovers);
// }

// function getFlovers (responce){
//     let apiKey = "20221006140459";
//     let apiUrl = "https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f";
//     axios.get(apiUrl).then(createContentTemplate)
// };
// getFlovers ();


//  function createFragmentTemplate(str){
//     const template = document.createElement('template');
//     template.innerHTML = str;
//     return template.content
//  }

//  function appendContent(id, content){
//     const el = document.getElementById(id);
//     el.appendChild(content);
//  }

//  function init (flovers){
//     const fragment = document.createDocumentFragment();

//     flovers.forEach((flovers) => {
//     fragment.appendChild(createContentTemplate(flovers));
//     });
// appendContent('content', fragment);
//  }
//  init (flovers);

 

function displayCardFlovers (flovers){
    let contentFlovers = document.querySelector("#content-conteiner");
    let floversContent = `<section id="content">`;
    flovers.data.forEach(function(item){
        floversContent = floversContent +
        `
        <div class="card-of-flowers">
    <div class="card-section4" >
    <img src="url(${item.image})" width="310px" height="310px">
    <h4 class="name-flowers text-center mt-3">${item.name}
    </h4>
    <h4 class="description-flovers text-center">
        ${item.flovers}
    </h4>
    <h4 class="cost text-center m-2">${item.price}</h4>
    <button class="button-s4">В кошик</button>
​
</div>
</div>  
        `;
    })
    floversContent = floversContent + `</section>`;
    contentFlovers.innerHTML = contentFlovers;
​
}
​
​
function getFlovers (){
    let apiKey = "20221006140459";
    let apiUrl = "https://run.mocky.io/v3/275cc213-7485-4396-b1ba-c1969194d67f";
    axios.get(apiUrl).then((flovers) => displayCardFlovers(flovers))
}
getFlovers ();