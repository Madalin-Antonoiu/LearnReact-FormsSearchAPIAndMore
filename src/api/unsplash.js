import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID ggHhOT9rdI3Zxj3FhCOlIR6jzXAw4Jl7FzwzOJGBeN0"
  }
});
