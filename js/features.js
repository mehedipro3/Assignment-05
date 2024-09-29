document.getElementById('blog-btn')
  .addEventListener('click', function () {
    showSectionById('blog-part');
  });

document.getElementById('blog-btn')
  .addEventListener('click', function () {
    document.getElementById('blog-btn').classList.add('hidden');

    document.getElementById('home-btn').classList.remove('hidden');

  });

  document.getElementById('home-btn')
  .addEventListener('click', function () {
    showSectionById('donation-part');
    document.getElementById('blog-btn').classList.add('hidden');

    document.getElementById('home-btn').classList.remove('hidden');
  });


document.getElementById('history-btn')
  .addEventListener('click', function () {
    showSectionById('transactions-section');
  });

