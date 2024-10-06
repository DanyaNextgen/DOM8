const videoGrid = document.querySelector('.video-grid');

function reload(arr) {
    videoGrid.innerHTML = '';
    for (let video of arr) {
        const videoItem = document.createElement('div');
        const img = document.createElement('img');
        const videoInfo = document.createElement('div');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');

        img.setAttribute('src', video.thumbnail);
        img.setAttribute('alt', video.title);

        h3.innerHTML = video.title;
        p.innerHTML = video.channel;

        videoInfo.classList.add('video-info');
        videoItem.classList.add('video-item');

        videoInfo.append(h3, p);
        videoItem.append(img, videoInfo);
        videoGrid.append(videoItem);
    }
}

reload(videos);

const input = document.querySelector('input');

input.onsearch = () => {
    const value = input.value.toLowerCase();
    
    const filteredArray = videos.filter((item) => item.title.toLowerCase().includes(value));

    reload(filteredArray);
}

document.querySelectorAll('.video-item').forEach(item => {
    const deleteButton = document.createElement('span')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Удалить'

    deleteButton.onclick = () => {
        item.remove()
    }

    item.append(deleteButton)

    item.onmouseenter = () => deleteButton.style.display = 'block'
    item.onmouseleave = () => deleteButton.style.display = 'none'
})