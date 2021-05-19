import { createStore } from 'vuex'

export default createStore({
  state(){
    return {
      users : [
        {
          name : "Choeng Veyseng",
          id : 1,
          gender : 'M',
          Phone: "08888888"
        }
      ],
      posts: [
        {
          title: "hello",
          content: 'This is my first post :,)',
          hastag: 'TheFirstPost',
          postedAt : "Jun 27 2020",
          postedBy : 1,
          id: 1,
        }
      ],
      comments: [
        {
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate ratione corporis ab commodi sequi nemo molestias eius aspernatur, asperiores sed doloremque esse sapiente odio debitis repellat voluptatem iusto at.',
          commentedAt : "Jun 27 2020",
          commentedBy : 1,
          postId : 2,
          id : 1,
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
