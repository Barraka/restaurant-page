let container = document.querySelector('#container');
let title = document.createElement('div');
let title1 = document.createElement('div');
let title2 = document.createElement('div');
let header = document.createElement('div');
let maincontent = document.createElement('div');
let footer = document.createElement('div');
let headeritem1 = document.createElement('div');
let headeritem2 = document.createElement('div');
let headeritem3 = document.createElement('div');
let backgroundimage = document.createElement('img');
let scrollpics = document.createElement('div');
let scrollcontainer = document.createElement('div');
let scrollpic1 = document.createElement('img');
let scrollpic2 = document.createElement('img');
let scrollpic3 = document.createElement('img');
let scrollpic4 = document.createElement('img');

title.classList.add('title');
title1.classList.add('title1');
title2.classList.add('title2');
header.classList.add('header');
maincontent.classList.add('maincontent');
footer.classList.add('footer');
headeritem1.classList.add('headeritem');
headeritem2.classList.add('headeritem');
headeritem3.classList.add('headeritem');
scrollpics.classList.add('scrollpics');
scrollcontainer.classList.add('scrollcontainer');
scrollpic1.classList.add('scroll');
scrollpic2.classList.add('scroll');
scrollpic3.classList.add('scroll');
scrollpic4.classList.add('scroll');
scrollpic1.id='scroll1';
scrollpic1.id='scroll2';
scrollpic1.id='scroll3';
scrollpic1.id='scroll4';
scrollpic1.src='assets/burger1.jpg';
scrollpic2.src='assets/burger2.jpg';
scrollpic3.src='assets/burger3.jpg';
scrollpic4.src='assets/burger4.jpg';


backgroundimage.classList.add('backgroundimage');
backgroundimage.src='assets/lobby1.jpg';

title.appendChild(title1);
title.appendChild(title2);
maincontent.appendChild(backgroundimage);
header.appendChild(headeritem1);
header.appendChild(headeritem2);
header.appendChild(headeritem3);

scrollcontainer.appendChild(scrollpic1);
scrollcontainer.appendChild(scrollpic2);
scrollcontainer.appendChild(scrollpic3);
scrollcontainer.appendChild(scrollpic4);
scrollpics.appendChild(scrollcontainer);
maincontent.appendChild(scrollpics);


container.appendChild(title);
container.appendChild(header);
container.appendChild(maincontent);
container.appendChild(footer);

title1.textContent="WacGonald";
title2.textContent="Quality Burgers";
headeritem1.textContent="Home";
headeritem2.textContent="Menu";
headeritem3.textContent="Contact";