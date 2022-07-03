import { ref } from "@vue/reactivity";
const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const load = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts");
      if (!res.ok) throw Error("no data available");
      posts.value = await res.json();
    } catch (err) {
      error.value = err;
    }
  };
  return { posts, error, load };
};

export default getPosts;
