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
console.log(myArrayId);

let myArrayContent = arrayElements.map((item) => {
    let element = item.content;
    return element;
})
console.log(myArrayContent);

let myArrayMedia = arrayElements.map((item) => {
    let element = item.media;
    return element;
})
console.log(myArrayMedia);

// myArrayAuthor

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











let divContainer = document.getElementById("container");
divClassPost();


function divClassPost(){
    // creo i miei collegamenti e vari elementi
    let divContainer = document.getElementById("container");
    divContainer.classList.add("post-list");

    // creo il div con classe post che si appende al div container
    let post = document.createElement("div");
    post.classList.add("post");
    divContainer.append(post);

    // creo il primo blocco di div interni al div con classe post
    let post_header = document.createElement("div");
    post_header.classList.add("post_header");
    post.append(post_header);

    let post_meta = document.createElement("div");
    post_meta.classList.add("post-meta");
    post_header.append(post_meta);

    let post_meta_icon = document.createElement("div");
    post_meta_icon.classList.add("post-meta-icon");
    post_meta.append(post_meta_icon);

    let img_profile_pic = document.createElement("img");
    img_profile_pic.classList.add("profile-pic");
    img_profile_pic.src;
    img_profile_pic.alt;
    post_meta_icon.append(img_profile_pic);

    let post_meta_data = document.createElement("div");
    post_meta_data.classList.add("post-meta__data");
    post_meta.append(post_meta_data);

    let post_meta_data_author = document.createElement("div");
    post_meta_data_author.classList.add("post-meta__author");
    post_meta_data.append(post_meta_data_author);

    let post_meta_time = document.createElement("div");
    post_meta_time.classList.add("post-meta__time");
    post_meta_data.append(post_meta_time)

    // creo il secondo blocco di div interni al div con classe post
    let post_text = document.createElement("div");
    post_text.classList.add("post__text");
    post.append(post_text);

    let post_image = document.createElement("div");
    post_image.classList.add("post__image");
    post.append(post_image);

    let img = document.createElement("img");
    img.src;
    post_image.append(img);

    // creo il terzo blocco di div interni al div con classe post
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
    // manca data-postid="1"
    likes_cta.append(like_button);

    let like_button_icon = document.createElement("i");
    like_button_icon.classList.add("like-button__icon");
    like_button_icon.classList.add("fas");
    like_button_icon.classList.add("fa-thumbs-up");
    // aria-hidden="true"
    like_button.append(like_button_icon);

    let like_button_label = document.createElement("span");
    like_button_label.classList.add("like-button__label");
    like_button_label.innerHTML = " Mi Piace";
    like_button.append(like_button_label);

    let likes_counter = document.createElement("div");
    likes_counter.classList.add("likes__counter");
    likes_counter.innerHTML = "Piace a " + " persone";
    likes_js_likes.append(likes_counter);

    let js_likes_counter = document.createElement("b");
    js_likes_counter.classList.add("js-likes-counter");
    // manca id="like-counter-1"
    js_likes_counter.innerHTML = "80";
    likes_counter.append(js_likes_counter);
}
