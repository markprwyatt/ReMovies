import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "a2986eaf427243d1e89aafc1fc124089"
  }
});
