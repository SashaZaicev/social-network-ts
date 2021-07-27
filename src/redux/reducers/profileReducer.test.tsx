import profileReducer, {addPost, deletePost} from "./profileReducer";
let state = {
    posts: [
        {
            id: '2',
            message: 'Post1',
            likeCount: 123
        },
        {
            id: '3',
            message: 'Post2',
            likeCount: 22
        },
        {
            id: '4',
            message: 'Post3',
            likeCount: 4
        },
        {
            id: '5',
            message: 'Post4',
            likeCount: 5
        },
    ],
    profile: {
        aboutMe: "Write a little about yourself",
        contacts: {
            facebook: "Write here your account facebook.com",
            website: "Write here your account webSite.com",
            vk: "Write here your account vk.com",
            twitter: "Write here your account twitter.com",
            instagram: "Write here your account instagram.com",
            github: "Write here your account github.com",
            mainLink: "Write here your account mainLink.com",
            youtube: "Write here your account youtube.com",
        },
        fullName: "Write here your full name",
        lookingForAJob: true,
        lookingForAJobDescription: "",
        photos: {
            small: "",
            large: ""
        },
        userId: '1'
    },
    status: ""
};

it('length of post should be increment', () => {
    //1. test data
    let action = addPost('Hello,kamasaturian')
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(5);
})

it('message of new post should be correct', () => {
    //1. test data
    let action = addPost('Hello,kamasaturian')
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts[4].message).toBe('Hello,kamasaturian');
})

it('after deleting length of messages should be decrement', () => {
    //1. test data
    let action = deletePost('2')
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3);
})
it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    //1. test data
    let action = deletePost('1')
    //2. action
    let newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(4);
})
