const listaTweet = document.getElementById('lista-tweets')

eventListeners()

function eventListeners() {
    document.getElementById('formulario').addEventListener('submit', addTweet)

    document.addEventListener('DOMContentLoaded', localStorageListo)
}

function addTweet(e) {
    e.preventDefault()
    const inputText = document.getElementById('tweet').value

    const li = document.createElement('li')
    const deleteButton = document.createElement('a')
    deleteButton.classList = 'borrar-tweet'
    deleteButton.innerText = 'X'
    li.textContent = inputText
    listaTweet.appendChild(li)
    li.appendChild(deleteButton)
    deleteButton.onclick = deleteTweet

    addTweetLocalStorage(inputText)

}

function deleteTweet(e) {
    if(e.target.classList.contains('borrar-tweet')) {
        e.target.parentElement.remove()
        alert('Deleting')
    }
}

function addTweetLocalStorage(inputText) {
    let tweets;
    tweets = getTweetsLocalStorage()

    tweets.push(inputText)

    localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getTweetsLocalStorage() {
    let tweets;

    if(localStorage.getItem('tweets') === null) {
        tweets = []
    } else {
        tweets = JSON.parse(localStorage.getItem('tweets'))
    }
    return tweets;
}

function localStorageListo() {
    let tweets;
    tweets = getTweetsLocalStorage()

    tweets.forEach(element => {
        const li = document.createElement('li')
        const deleteButton = document.createElement('a')
        deleteButton.classList = 'borrar-tweet'
        deleteButton.innerText = 'X'
        li.textContent = element
        listaTweet.appendChild(li)
        li.appendChild(deleteButton)
        deleteButton.onclick = deleteTweet
    });
}

