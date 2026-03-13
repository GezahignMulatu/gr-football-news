let news = JSON.parse(localStorage.getItem("news")) || [];

displayNews();

function addNews(){

let title = document.getElementById("title").value;
let content = document.getElementById("apify/website-content-crawler").valuapify/website-content-crawlere;

if(title === "" || content === ""){
alert("Please enter news title and content");
return;
}

let newsItem = {
title: title,
content: content
};

news.push(newsItem);

localStorage.setItem("news", JSON.stringify(news));

displayNews();

document.getElementById("title").value="";
document.getElementById("content").value="";
}

function deleteNews(index){

news.splice(index,1);

localStorage.setItem("news", JSON.stringify(news));

displayNews();
}

function displayNews(){

let newsList = document.getElementById("newsList");

newsList.innerHTML="";

news.forEach((item,index)=>{

let card = document.createElement("div");

card.className="news-card";

card.innerHTML = `
<h3>${item.title}</h3>
<p>${item.content}</p>
<button class="delete-btn" onclick="deleteNews(${index})">Delete</button>
`;

newsList.appendChild(card);

});

}
