import {rerender} from "../render";
let state = {
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
}


export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 22
    }
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = ''
    rerender(state);
}


export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerender(state);
}

export default state;