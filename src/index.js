console.log('Write your code here');

let imgURL = 'http://localhost:3000/current-exhibits'
fetch(imgURL)
.then (resp => resp.json())
.then (data => {
    renderImage(data[0])
// if object is an array then you need brackets
    console.log(data)
});

function renderImage (exhibits) {
    let title = document.querySelector('#exhibit-title');
    title.textContent = exhibits.title;

    let image = document.querySelector('#exhibit-image')
    image.src = exhibits.image;

    // let artist = document.getElementsByTagName('h3')
    // artist[0].textContent += ` ${exhibits['artist_name']}`
    //let artist = 
    // artist.textContent = `Currently Featuring: ${exhibits['artist_name']}`;

    let description = document.querySelector('#exhibit-description')
    description.textContent = exhibits.description;

    let ticketsBought = document.querySelector('#tickets-bought')
    ticketsBought.textContent = exhibits['tickets_bought'];
    

    for (let comment of exhibits.comments) {
        renderComments(comment)
    }

    let ticketsButton = document.querySelector('#buy-tickets-button');

    let count = exhibits.tickets_bought
    ticketsButton.addEventListener('click', () => {
        count++;
        ticketsBought.textContent = count + " Tickets Bought";
    })

}

 function renderComments (comment) {
    let newComment = document.createElement('p')
    newComment.textContent = comment

    let commentSection = document.querySelector('#comments-section')

    commentSection.append(newComment);
 }








// let commentSection = document.querySelector('#comments-section')
// let commentList = exhibits.comments;
// for (let comment of commentList) {
//     let p = document.createElement('p');
//     p.textContent = comment
//     commentSection.append(p);
// }

// let form = document.querySelector('#comment-form')
// form.addEventListener('submit', newComments)


// function newComments (e) {
//     e.preventDefault()
//     let comments = document.querySelector('#comments-section');
//     let newComment2 = document.createElement('p');

//     let newCommentsForm = e.target['comment-input'].value;

//     newComment2.textContent = newCommentsForm;
//     console.log(newComment2);

//     comments.append(newComment2);
//     form.reset()

// }

// let buyTickets = document.querySelector('#buy-tickets-button')
// buyTickets.addEventListener('click', ticketCounter)


// function ticketCounter () {
//     let ticketsBought = document.querySelector('#tickets-bought')

//     let words = ticketsBought.textContent.split(" ")

//     let currentCount = parseInt(words[0])

//     currentCount = currentCount+1

//     if (currentCount === 1) {
//         ticketsBought.textContent = `${currentCount} Ticket Bought`
//     } else { 
//         ticketsBought.textContent = `${currentCount} Tickets Bought`
//     }
    
// }

// patch needs to be done inside tickets bought event listener

//    fetch (imgURL, exhibits.id, {
//         method: "PATCH",
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//             tickets_bought: count,
//         }),
//     })
//     .then(resp => resp.json())
//     .then(data => {
//         tickets_bought.textContent = data.
//         console.log(data)
//     })