$.get("cards.json", function(data, status){
    if(status=="success"){
        var cards = data;
        var i = 0;
        var contentDiv = document.createElement("div");
        $(contentDiv).addClass("content");
        $("article").append(contentDiv);
        while(i < posts['posts'].length){
            var li = document.createElement("li");
            var imgDiv = document.createElement("div");
            $(imgDiv).addClass("img-div");
            var dataDiv = document.createElement("div");
            $(dataDiv).addClass("data-div");
            var imgSrc = '<img data-src=".'+ posts['posts'][i]['img'] +'">';
            var imgTitle = '<p class="img-title">' + posts['posts'][i]['category'] + '</p>';
            var h3 = '<h3>' + posts['posts'][i]['title'] + '</h3>';
            var dateTime = '<p class="date-time">' + getTime(posts['posts'][i]['datetime']) + '/ <span class="author">By : ' + posts['posts'][i]['author'].split(" ")[0] +'</span></p><p class="comment">' + posts['posts'][i]['comment_count'] + ' comment</p>';
            var desc = '<p class="description">' + posts['posts'][i]['desc'] + '</p>';
            // var comment = '<p class="comment"><i class="far fa-comment"></i> ' + posts['posts'][i]['comment_count'] + ' comment</p>';
            
            $(contentDiv).append(li);
            $(li).append(imgDiv);
            $(imgDiv).append(imgSrc);
            $(imgDiv).append(imgTitle);
            $(li).append(dataDiv);
            $(dataDiv).append(h3);
            $(dataDiv).append(dateTime);
            $(dataDiv).append(desc);
            // $(dataDiv).append(comment);
            i++;
        }
        lazyLoad();
    }
});



for(let i=1; i<=9; i++){
    let BlogBox = document.querySelector(".blog");

    let container = document.createElement('div')
    container.classList.add('container', `container${i}`)
    container.innerHTML = 
    `
    <div class="img">
        <img>
        <div class="date"></div>
    </div>
    <div class="blog-info">
        <div class="admin">
            <i class="fa-solid fa-user"></i>
            By: <span></span> 
        </div>
        <div class="comment">
            <i class="fa-solid fa-heart"></i>
            <span> </span>  &nbsp; | &nbsp;
            <i class="fa-solid fa-comment"></i>
            <span> </span> 
        </div>
    </div>
    <div class="blog-text">
        <h3></h3>
        <p></p>
        <a href="">Read More...</a>
    </div>
    ` 

    mainBox.append(container);
}
fetch("")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        for (let i = 1; i <= 9; i++) {
            document.querySelector(`.container${i} .blog-text p`).textContent = data[i-1].desc
            document.querySelector(`.container${i} .blog-text h3`).textContent = data[i-1].title
            document.querySelector(`.container${i} .admin span`).textContent = data[i-1].author
            document.querySelector(`.container${i} .comment span:nth-child(2)`).textContent = data[i-1].like_count
            document.querySelector(`.container${i} .comment span:nth-child(4)`).textContent = data[i-1].comment_count
            document.querySelector(`.container${i} .img img`).src = data[i-1].img
            // document.querySelector(`.container${i} .img img`).setAttribute("src", data[i-1].img)

            document.querySelector(`.container${i} .date`).textContent = data[i-1].date
        }
    })
