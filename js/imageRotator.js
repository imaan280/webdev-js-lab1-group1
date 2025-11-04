({
let imageAr = [
    'images/view1.jpg',
    'images/view2.jpg',
    'images/view3.jpg',
    'images/view4.jpg',
    'images/view5.jpg',
    'images/view6.jpg'
  ];
  
  let currentIndex = 0;
  
  function chgImage() {
    currentIndex++;
    if (currentIndex >= imageAr.length) {
      currentIndex = 0;
    }
    document.getElementById('myImages').setAttribute('src', imageAr[currentIndex]);
  }
  
  setInterval(chgImage, 2000);

  function showMessage() {
    console.info('This message is shown after 3 seconds');
  }
  
  setTimeout(showMessage, 3000);

  let intervalId = setInterval(chgImage, 2000);

// Stop the interval after 10 seconds
setTimeout(function() {
  clearInterval(intervalId);
  console.info('Image rotation stopped');
}, 10000);

document.getElementById('myImages').addEventListener('click', chgImage);

})()