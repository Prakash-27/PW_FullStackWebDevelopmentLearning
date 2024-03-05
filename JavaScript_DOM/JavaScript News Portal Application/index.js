const cards = document.querySelector(".cards");
const category = document.querySelector(".categories");
const categorySpan = document.querySelectorAll(".categories span");

const baseUrl = "https://newsapi.org/v2";
const apiKey = "&apiKey=569e787f7bbe4386b460d7c1e328597b";

const backUpImage = "https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

// const urlUSAll = "https://newsapi.org/v2/top-headlines?country=us&apiKey=569e787f7bbe4386b460d7c1e328597b";
// const urlUSBussiness = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=569e787f7bbe4386b460d7c1e328597b";
// const crypto = "https://newsapi.org/v2/everything?q=crypto&sortBy=publishedAt&apiKey=569e787f7bbe4386b460d7c1e328597b";
// const urlTechCrunch = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=569e787f7bbe4386b460d7c1e328597b";
//My APIKey - 569e787f7bbe4386b460d7c1e328597b

async function dataRequest(url){
    try{
        const response = await fetch(baseUrl + url + apiKey);
        const json = response.json();
        return json;
    } catch(error){
        console.log(error);
    }
}

function urlRequest(url){
    dataRequest(url).then(data => {
        // console.log(data);
        data.articles.forEach(item => {
            // console.log(item);
            cards.innerHTML += `<div class="card">
                                    <div class="image">
                                        <img src="${ item.urlToImage ? item.urlToImage : backUpImage }" alt="Default News image"/>
                                    </div>
                                    <div class="information">
                                        <div>
                                            <p class="title">${item.title}</p>
                                            <p class="description">${item.description}</p>
                                            <p class="time">
                                                <span>${item.publishedAt.replace("Z", "").split("T")[1]}</span>
                                                <span>${item.publishedAt.replace("Z", "").split("T")[0]}</span>
                                            </p>   
                                        </div>
                                        <div class="other">
                                            <span class="source">${item.source.name}</span>
                                            <a class="url" target="_blank" href="${item.url}">Read Article <i class="bi bi-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>`;
        });
    });
}

category.addEventListener("click", event => {
    if(event.target.tagName === "SPAN"){
        // console.log(event.target);
        cards.innerHTML = "";
        urlRequest(event.target.dataset.url);
        categorySpan.forEach(item => item.classList.remove("active"));
        event.target.classList.add("active");
    } 
});

urlRequest("/top-headlines?country=us");



