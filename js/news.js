fetch("https://newsapi.org/v2/top-headlines?country=id&apiKey=cd9a2be33d6e41abb7d0c852b40ab20d")
    .then(response => response.json())
    .then(data => {
        data.articles.forEach(ele => {
            $("#data-news").append(`
            <li>
                <h5>${ele.title}</h5>
                <p>${ele.description}</p>
                <a href="${ele.url}" target="_blank">${ele.url}</a>
                <p>${ele.publishedAt}</p>
            </li>
            <hr>`);
        })
    })
    .catch(error => {
        console.log(error),
        $("#data-news").append(`
            <li>
                <h5>There's no recent News</h5>                                
            </li>
            <hr>`);
    })