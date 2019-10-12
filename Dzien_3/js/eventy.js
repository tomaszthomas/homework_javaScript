var content1 = document.querySelector('.content');
var link1 = document.querySelector('a');

link1.addEventListener('click', function(){
     if (content1.style.display === 'none') {
         content1.style.display = 'block'
     } else {
         content1.style.display = 'none'
     }
});



var content2 = document.querySelectorAll('.content')[1];
var link2 = document.querySelectorAll('a')[1];

link2.addEventListener('mouseover', function(){
     if (content2.style.display === 'none') {
         content2.style.display = 'block'
     } else {
         content2.style.display = 'none'
     }
});

console.log(content2);
console.log(link2);


// var contents = document.querySelectorAll('.content');
// var links = document.querySelectorAll('a');
//
// for (var i=0; i<links.length; i++) {
//     links[i].addEventListener('click', function () {
//             if (this.nextElementSibling.style.display === 'none') {
//                 this.nextElementSibling.style.display = 'block'
//             } else {
//                 this.nextElementSibling.style.display = 'none'
//             }
//     })
// }


