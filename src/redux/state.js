let state = {
    dialogue: {
        users:  [
            {id: 1, name: "Elena"},
            {id: 2, name: "Andrew"},
            {id: 3, name: "Veronika"}
        ],
        messages: [
            {id: 1, message: "Hello", image: "https://i.pinimg.com/originals/c3/dd/58/c3dd58e7e25e4c53f05930019b989221.png"},
            {id: 2, message: "How are you?", image: "https://banner2.cleanpng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg"},
            {id: 3, message: "Yo", image: "https://coolsen.ru/wp-content/uploads/2021/09/0.jpg"}
        ]
    },
    sidebarFriends: [
        {id: 1, name: "Elena", image: "https://i.pinimg.com/originals/c3/dd/58/c3dd58e7e25e4c53f05930019b989221.png"},
        {id: 2, name: "Andrew", image: "https://banner2.cleanpng.com/20180406/sve/kisspng-computer-icons-user-material-design-business-login-dizzy-5ac7f1c61041c2.5160856515230529980666.jpg"},
        {id: 3, name: "Veronika", image: "https://coolsen.ru/wp-content/uploads/2021/09/0.jpg"}
    ],
    posts: [
        {id: 1, message: "Hi! How are you?", likeCount: 10},
        {id: 2, message: 'It is my first post', likeCount: 25},
        {id: 3, message: 'Yoooooohoo', likeCount: 1000000},
    ]
}

export let addPost = (textArea) => {
    let text = textArea.current.value;
    state.posts.push({
        id: 4, message: {text}, likeCount: 0
    })
}

export default state;