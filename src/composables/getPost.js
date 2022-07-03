import { ref } from "@vue/reactivity";
const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const load = async () => {
    try {
      const res = await fetch("http://localhost:3000/posts/" + id);
      if (!res.ok) throw Error("that post doesn't exist");
      post.value = await res.json();
    } catch (err) {
      error.value = err;
    }
  };
  return { post, error, load };
};

export default getPost;
