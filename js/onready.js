const getLang = () => {
    return document.documentElement.lang;
}
console.log(getLang());

const getElement = (id) => {
    return document.querySelector(id);
}

fetch("./data/main.json")
    .then(response => response.json())
    .then(data => {    
        switch (getLang()) {
            case "id":
                $(".lang-id").addClass("lang-selected");                
                $("#title").html(data.id.title);        
                $("#header").html(data.id.header);     
                $("#data-today-title").html(data.id.data_today_title);   
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

    
