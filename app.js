// const flovers = [{
//     image: '/img/cart1.png',
//     name: 'Ніжна свіжість: ',
//     desctiption: 'троянди та лілії',
//     cost: '445'
// }];

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
        console.log(flovers.data[0])
        displayCardFlovers(flovers)
    });
}
getFlovers ();


function displayReviews (review){
    let contentReview = document.querySelector("#people-reviews")
    let content = `<div class="review row d-flex justify-content-start ">`;
    review.data.forEach(function(item, index){
        if (index<2){
        content = content +
         `
        <div class="col-sm-3 me-5">
<img src="/img/person_grey.png" alt="Photo person" width="140">
</div>
<div class="col-sm-7">
<p class="text-review">
   ${item.body}
</p>
<hr class="line-in-review">
<p class="name-person">${item.name}</p>
</div>
        `;
    }  
    })
    content = content + `</div>`;
    contentReview.innerHTML = content;
};

async function getReview (){
    let apiUrl = "https://jsonplaceholder.typicode.com/comments";
    axios.get(apiUrl).then((review) => {
        console.log(review.data[0])
        displayReviews(review)
    })
};
getReview()








