console.log('Write your code here');

let imgURL = 'http://localhost:3000/current-exhibits'
fetch(imgURL)
.then (resp => resp.json())
.then (data => {
    renderImage(data[0])
    console.log(data)
});

function renderImage (exhibits) {
    let title = document.querySelector('#exhibit-title');
    title.textContent = exhibits.title;

    let image = document.querySelector('#exhibit-image')
    image.src = exhibits.image;

    let h3s = document.getElementsByTagName('h3')
    let artist = h3s[0]
    artist.textContent = `Currently Featuring: ${exhibits['artist_name']}`;

    let description = document.querySelector('#exhibit-description')
    description.textContent = exhibits.description;

    let ticketsBought = document.querySelector('#tickets-bought')
    ticketsBought.textContent = exhibits['tickets_bought'];

    let comments = document.querySelector('#comments-section')
    let commentList = exhibits.comments;
    for (let comment of commentList) {
        let newComment = document.createElement('p');
        newComment.textContent = comment
        comments.append(newComment);
    }

}

let form = document.querySelector('#comment-form')
form.addEventListener('submit', newComments)


function newComments (e) {
    e.preventDefault()
    let comments = document.querySelector('#comments-section');
    let newComment2 = document.createElement('p');

    let newCommentsForm = e.target['comment-input'].value;

    newComment2.textContent = newCommentsForm;
    console.log(newComment2);

    comments.append(newComment2);
    form.reset()
}


let buyTickets = document.querySelector('#buy-tickets-button')
buyTickets.addEventListener('click', ticketCounter)


function ticketCounter () {
    let ticketsBought = document.querySelector('#tickets-bought')

    let words = ticketsBought.textContent.split(" ")

    let currentCount = parseInt(words[0])

    currentCount = currentCount+1

    if (currentCount === 1) {
        ticketsBought.textContent = `${currentCount} Ticket Bought`
    } else { 
        ticketsBought.textContent = `${currentCount} Tickets Bought`
    }
    
}