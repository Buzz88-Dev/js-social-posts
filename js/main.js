// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// 1 -  Creiamo il nostro array di oggetti che rappresentano ciascun post. 
//      Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
//      id del post, numero progressivo da 1 a n
//      nome autore,
//      foto autore,
//      data in formato americano (mm-gg-yyyy),
//      testo del post,
//      immagine (non tutti i post devono avere una immagine),
//      numero di likes.
//      Non è necessario creare date casuali Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
//      [qui, la base dati ve la passo, ma in caso le img che ci sono on funzionino, potete sostituirle in quel modo]
// 2 -  Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// 3 -  Se clicchiamo sul tasto “Mi Piace” cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
//      Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l’assenza dell’immagine profilo con un elemento di fallback che contiene le iniziali dell’utente (es. Luca Formicola > LF).
// Al click su un pulsante “Mi Piace” di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.


const arrayElements = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null 
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];



let myArrayId = arrayElements.map((item) => {
    let element = item.id;
    return element;
})

let myArrayContent = arrayElements.map((item) => {
    let element = item.content;
    return element;
})

let myArrayMedia = arrayElements.map((item) => {
    let element = item.media;
    return element;
})

let myObyAuthor = arrayElements.map((item) => {
    let element = item.author;
    return element;
})
console.log(myObyAuthor);

let myArrayAuthorName = myObyAuthor.map((item) => {
    let elementName = item.name;
    return elementName;
})
console.log(myArrayAuthorName);

let myArrayAuthorImage = myObyAuthor.map((item) => {
    let elementName = item.image;
    return elementName;
})

let myArrayLikes = arrayElements.map((item) => {
    let element = item.likes;
    return element;
})
console.log(myArrayLikes);

let myArrayCreated = arrayElements.map((item) => {
    let element = item.created;
    return element;
})
console.log(myArrayCreated);



for (let i = 0; i < arrayElements.length; i++){

    let divContainer = document.getElementById("container");

    let post = document.createElement("div");
    post.classList.add("post");
    divContainer.append(post);

    let post_header = document.createElement("div");
    post_header.classList.add("post__header");
    post.append(post_header);

    let post_meta = document.createElement("div");
    post_meta.classList.add("post-meta");
    post_header.append(post_meta);

    let post_meta_icon = document.createElement("div");
    post_meta_icon.classList.add("post-meta__icon");
    post_meta.append(post_meta_icon);

    let img_profile_pic = document.createElement("img");
    img_profile_pic.classList.add("profile-pic");   
    
    if (myArrayAuthorImage[i] !== null){
        img_profile_pic.src = myArrayAuthorImage[i];
        img_profile_pic.alt = myArrayAuthorName[i];
    } else {
        img_profile_pic.remove;
        post_meta_icon.innerHTML = initialName(myArrayAuthorName[i]); 
    }
    post_meta_icon.append(img_profile_pic);

    let post_meta_data = document.createElement("div");
    post_meta_data.classList.add("post-meta__data");
    post_meta.append(post_meta_data);

    let post_meta_data_author = document.createElement("div");
    post_meta_data_author.classList.add("post-meta__author");
    post_meta_data_author.textContent = myArrayAuthorName[i];
    post_meta_data.append(post_meta_data_author);

    let post_meta_time = document.createElement("div");
    post_meta_time.classList.add("post-meta__time");
    post_meta_time.textContent = changeFormateDate(myArrayCreated[i]);
    post_meta_data.append(post_meta_time)

    let post_text = document.createElement("div");
    post_text.classList.add("post__text");
    post_text.textContent = myArrayContent[i];
    post.append(post_text);

    let post_image = document.createElement("div");
    post_image.classList.add("post__image");
    post.append(post_image);

    let img = document.createElement("img");
    img.src = myArrayMedia[i];
    post_image.append(img);

    let post_footer = document.createElement("div");
    post_footer.classList.add("post__footer");
    post.append(post_footer);

    let likes_js_likes = document.createElement("div");
    likes_js_likes.classList.add("likes");
    likes_js_likes.classList.add("js-likes");
    post_footer.append(likes_js_likes);

    let likes_cta = document.createElement("div");
    likes_cta.classList.add("likes__cta");
    likes_js_likes.append(likes_cta);

    let like_button = document.createElement("a");
    like_button.classList.add("like-button");
    like_button.classList.add("js-like-button");
    like_button.setAttribute("href", "javascript:void(0)");
    like_button.setAttribute("data-postid", myArrayId[i]);
    likes_cta.append(like_button);

    let like_button_icon = document.createElement("i");
    like_button_icon.classList.add("like-button__icon"); 
    like_button_icon.classList.add("fas");
    like_button_icon.classList.add("fa-thumbs-up");
    like_button_icon.setAttribute("aria-hidden", "true");
    like_button.append(like_button_icon);

    let like_button_label = document.createElement("span");
    like_button_label.classList.add("like-button__label");
    like_button_label.innerHTML = " Mi Piace";
    like_button.append(like_button_label);

    let likes_counter = document.createElement("div");
    likes_counter.classList.add("likes__counter");
    likes_counter.innerHTML = `Piace a <b id="like-counter-${myArrayId[i]}" class="js-likes-counter"> ${myArrayLikes[i]} </b> persone`;
    likes_js_likes.append(likes_counter);
}



var arrMiPiace = [];
let divButtonLike = document.querySelectorAll(".js-like-button");
console.log(divButtonLike); // creo un array composto da tutte le classi js-like-button
divButtonLike.forEach((button) => {
    button.addEventListener("click",
        function(){
            let postId = parseInt(button.getAttribute("data-postid")) - 1;
            console.log(postId);
            button.classList.toggle("like-button--liked");
            console.log(button);

            if(button.classList.contains('like-button--liked')){
                arrayElements[postId].likes++;
                arrMiPiace = arrMiPiace.filter((value) => value!== arrayElements[postId].id);
            } else{
                arrayElements[postId].likes--;
                arrMiPiace = arrMiPiace.filter((value)=>value!== arrayElements[postId].id);
            }
            const likeCounter = document.getElementById(`like-counter-${arrayElements[postId].id}`);
            likeCounter.innerText = arrayElements[postId].likes;
        }
    )
})


//funzione che mi permette di cambiare la data
function changeFormateDate(oldDate) {
   return oldDate.split("-").reverse().join("/");
}

function initialName(name) {
    let initials = name.split(' ');
    initials = initials[0].charAt(0) + initials[1].charAt(0);
    return initials;
}