// console.log("first");

// setTimeout(()=>{
//     console.log("second");
// }, 1)

// console.log("third");

// ================================
// var posts;

// function getPosts() {
//   setTimeout(() => {
//     console.log("getting posts from database");
//     posts = ["first", "second"];
//   }, 100);
// }

// getPosts();

// console.log(posts);
// ================================

function getPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts = ["first", "second"];
      resolve(posts);
    }, 1000);
  });
}

function getComments(postID) {
  return new Promise((resolve) => {
    setTimeout(() => {
      comments = ["firstComment", "secondComment"];
      resolve(comments);
    }, 1000);
  });
}

// getPosts().then((p)=>{
//     console.log(p);
// })

// getPosts().then((posts) => {
//   console.log(posts);
//   getComments(posts).then((comments) => {
//     console.log(comments);
//   });
// });

const getData = async()=>{
    posts = await getPosts();
    console.log(posts);
    comments = await getComments();
    console.log(comments);
}

getData();