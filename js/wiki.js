//Saya menggunakan local cors-anywhere
//https://cors-anywhere.herokuapp.com/ untuk cors online hosting 
const cors = "";
// const cors = "http://localhost:9090/";
fetch(`${cors}https://cinnabar.icaksh.my.id/api/public/daily/wiki`)
    .then(response => response.json())
    .then(data => {                        
        data.data.forEach(ele => {            
            $("#data-today").append(`<li>${ele['tahukahAnda']}</li><hr>`);
        });    
    })
    .catch(error => {
        console.log(error),
        $("#data-today").append(`<li>Hmm sepertinya tidak ada yang menarik belakangan ini...</li><hr>`);
    }
    )

let searchWiki = $("#search-wiki");
searchWiki.on("keyup", function () {
    let wikiLang = $("input[name='wiki-lang']:checked").val();
    let search = $(this).val();
    if (search.length > 0) {
        fetch(`${cors}https://${wikiLang}.wikipedia.org/w/api.php?action=opensearch&format=json&search=${search}`)
            .then(response => response.json())
            .then(data => {                
                $("#data-wiki").html("");                                
                data[1].forEach(ele => {
                    // console.log(data[3][data[1].indexOf(ele)]);
                    $("#data-wiki").append(`<li><a href="${data[3][data[1].indexOf(ele)]}" target="_blank">${ele}</a></li>`);
                }   
                );
            })
            .catch(error =>
                console.log(error),
            )
    }
})

