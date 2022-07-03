<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>

    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <p>Loading posts...</p>
    </div>
    <!-- <button @click="handleToggle">Toggle posts</button>
    <button @click="posts.pop()">Delect a post</button> -->
  </div>
</template>

<script>
import PostList from "./PostList.vue";
import getPosts from "../composables/getPosts";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();
    load();

    // const showPosts = ref(true);
    // const handleToggle = () => {
    //   showPosts.value = !showPosts.value;
    // };
    return { posts, error };
  },
  components: { PostList },
};
</script>
