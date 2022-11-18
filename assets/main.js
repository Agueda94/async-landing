const API = "https://youtube-v31.p.rapidapi.com/search?channelId=UCMRuB8p62UfnUdgoZp7vwNA&part=snippet%2Cid&order=date&maxResults=2";
const content = null || document.getElementById ("content");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ac5f770e07msh6834b701a9d061cp1c9e16jsnc7cf5a4af352',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetData (urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async  () =>{

    try{
        const videos = await fetData(API);
        let view = ` 
    ${videos.items.map (video =>`
    <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
    </div>
    `)}    
    `;  
    content.innerHTML = view;
    }catch (error){
       console.log (error);
    }

}) ();