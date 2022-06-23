const getLang = () => {
    return document.documentElement.lang;
}

fetch("./data/main.json")
    .then(response => response.json())
    .then(data => {    
        switch (getLang()) {
            case "id":
                $(".lang-id").addClass("lang-selected");                
                $("#title").html(data.id.title);                
                // $("#header").html(data.id.header);     
                $("#data-today-title").html(data.id.data_today_title);
                $("#data-wiki-title").html(data.id.data_wiki_title);
                $("#data-news-title").html(data.id.data_news_title);
                break;
            default:
            case "en":
                $(".lang-en").addClass("lang-selected");
                $("#title").html(data.en.title);        
                $("#header").html(data.en.header);        
                break;
        }     

    })
    .catch(error => 
        console.log(error)
    );
    
