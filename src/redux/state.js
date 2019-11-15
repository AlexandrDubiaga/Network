let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: "Hi im new Post", likesCount: 2}, {
                id: 2,
                message: "Its my first Post",
                likesCount: 15
            }],
            newPostText: 'Solmir__ winner'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Alex"},
                {id: 2, name: "Solmir__"},
                {id: 3, name: "Hworang"},
                {id: 4, name: "Paul"},
                {id: 5, name: "Messi"}
            ],
            messages: [
                {id: 1, message: "I winnig incubator"},
                {id: 2, message: "React"},
                {id: 3, message: "Redux"},
                {id: 4, message: "Flux"}
            ]
        },
        siteBar: {}
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){},

    addPost(){
        let newPost = {
            id: 3,
            message: this.getState().profilePage.newPostText,
            likesCount: 22
        }
        this.getState().profilePage.posts.push(newPost);
        this.getState().profilePage.newPostText = ''
        this._callSubscriber(this.getState());
    },

    updateNewPostText(text){
        this.getState().profilePage.newPostText = text;
        this._callSubscriber(this.getState());
    },
    subscribe(observer){
        this._callSubscriber = observer;
    }
}


export default store;