// document.getElementById('blog-btn')
//   .addEventListener('click', function () {
//     showSectionById('blog-part');
//   });

// document.getElementById('blog-btn')
//   .addEventListener('click', function () {
//     document.getElementById('blog-btn').classList.add('hidden');

//     document.getElementById('home-btn').classList.remove('hidden');

//   });

//   document.getElementById('home-btn')
//   .addEventListener('click', function () {
//     showSectionById('donation-part');
//     document.getElementById('blog-btn').classList.add('hidden');

//     document.getElementById('home-btn').classList.remove('hidden');
//   });


document.getElementById('history-btn')
  .addEventListener('click', function () {
    showSectionById('transactions-section');
    document.getElementById('history-btn').classList.add('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.remove('bg-[#B4F461]');
  });
document.getElementById('donation-btn')
  .addEventListener('click', function () {
    showSectionById('donation-part');
    document.getElementById('history-btn').classList.remove('bg-[#B4F461]');
    document.getElementById('donation-btn').classList.add('bg-[#B4F461]');
  });

  document.getElementById('home-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/index.html';
  });
  document.getElementById('blog-btn')
  .addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/blog.html';
  });