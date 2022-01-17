// оригинальная структура
const blogPosts = [
    {
      id: 'post1',
      author: { username: 'user1', name: 'User 1' },
      body: '......',
      comments: [
        {
          id: 'comment1',
          author: { username: 'user2', name: 'User 2' },
          comment: '.....'
        },
        {
          id: 'comment2',
          author: { username: 'user3', name: 'User 3' },
          comment: '.....'
        }
      ]
    },
    {
      id: 'post2',
      author: { username: 'user2', name: 'User 2' },
      body: '......',
      comments: [
        {
          id: 'comment3',
          author: { username: 'user3', name: 'User 3' },
          comment: '.....'
        },
        {
          id: 'comment4',
          author: { username: 'user1', name: 'User 1' },
          comment: '.....'
        },
        {
          id: 'comment5',
          author: { username: 'user3', name: 'User 3' },
          comment: '.....'
        }
      ]
    }
    // and repeat many times
]

// нормализованная структура
const example = {
    posts : {
        // объект с объектами постов, где ключ - айди объекта. так же сам содержит этот же айди
        byId : {
            "post1" : {
                id : "post1",
                author : "user1",
                body : "......",
                comments : ["comment1", "comment2"]
            },
            "post2" : {
                id : "post2",
                author : "user2",
                body : "......",
                // это свойство содержит айдишники объектов, хранящихся в другой части хранилища. Обновление комментария не заденет сам пост. Будет меньше рендеров.
                comments : ["comment3", "comment4", "comment5"]
            }
        },
        // массив айдишников
        allIds : ["post1", "post2"]
    },
    comments : {
        byId : {
            "comment1" : {
                id : "comment1",
                author : "user2",
                comment : ".....",
            },
            "comment2" : {
                id : "comment2",
                author : "user3",
                comment : ".....",
            },
            "comment3" : {
                id : "comment3",
                author : "user3",
                comment : ".....",
            },
            "comment4" : {
                id : "comment4",
                author : "user1",
                comment : ".....",
            },
            "comment5" : {
                id : "comment5",
                author : "user3",
                comment : ".....",
            },
        },
        allIds : ["comment1", "comment2", "comment3", "comment4", "comment5"]
    },
    users : {
        byId : {
            "user1" : {
                username : "user1",
                name : "User 1",
            },
            "user2" : {
                username : "user2",
                name : "User 2",
            },
            "user3" : {
                username : "user3",
                name : "User 3",
            }
        },
        allIds : ["user1", "user2", "user3"]
    }
  }