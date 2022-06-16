fetch("https://cinnabar.icaksh.my.id/api/public/daily/wiki")
.then(response => response.json())
.then(data => {
    console.log(data);
});