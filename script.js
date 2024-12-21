const driver = window.driver.js.driver;

document.getElementById("startBtn").onclick = function(){
const driverObj = driver({
  popoverClass: 'driverjs-theme',
  showProgress: true,
  steps: [
    { element: '#card1', popover: { title: 'Card 1', description: 'This is card 1'} },
    { element: '#card2', popover: { title: 'Card 2', description: 'This is card 2'} },
    { element: '#card3', popover: { title: 'Card 3', description: 'This is card 3'} },
    { element: '#card4', popover: { title: 'Card 4', description: 'This is card 4'} },
    { element: '#card5', popover: { title: 'Card 5', description: 'This is card 5'} },
    { element: '#card6', popover: { title: 'Card 6', description: 'This is card 6'} },
    { element: '#card7', popover: { title: 'Card 7', description: 'This is card 7'} },
    { element: '#card8', popover: { title: 'Card 8', description: 'This is card 8'} },
    { element: '#card9', popover: { title: 'Card 9', description: 'This is card 9'} },
  ]
});

driverObj.drive();
};

document.querySelector("header").onclick = function(){
  const driverObj = driver();
  driverObj.highlight({
    element: 'header',
    popover: {
      title: 'Header',
      description: 'This is the header you have Selected',
    },
  });
};

document.querySelector("footer").onclick = function(){
  const driverObj = driver();
  driverObj.highlight({
    element: 'footer',
    popover: {
      title: 'Footer',
      description: 'This is the footer you have Selected',
    },
  });
};

