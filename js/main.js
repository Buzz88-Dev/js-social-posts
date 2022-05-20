const elements = [
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
