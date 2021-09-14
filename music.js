

const fuck = () => {
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
	"method": "GET",
	"headers": {
        "content-type": "application/json",
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
        "x-rapidapi-key": "a4fd5d2bd5mshcf445bc7433aad5p1ef147jsn0c87ce8dca69",
	}
})
.then(response => {

	console.log(response);
})
.catch(err => {
	console.error(err);
    })}

    console.log("fuck")