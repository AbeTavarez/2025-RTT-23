import axios from "axios";

export const productsApiClient = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    Accept: "application/json",
    // Note: In a real app, this token would come from an environment variable!
    Authorization: "token YOUR_PERSONAL_ACCESS_TOKEN",
  },
});


// Add a request interceptor to our instance
productsApiClient.interceptors.request.use(config => {
  // This function runs before any request is sent using client
  console.log(`Sending request to: ${config.baseURL}${config.url}`);
  // You must always return the config object, otherwise the request will fail
  return config;
}, error => {
  // Handle request error
  return Promise.reject(error);
});


// Add a response interceptor
productsApiClient.interceptors.response.use(response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  console.log('Received successful response!');
  // You can transform the response data here if needed
  return response;
}, error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  console.error('An error occurred with the response.');
  // You can handle errors globally here
  return Promise.reject(error);
});



// const openaiClient = axios.create({
//   baseURL: "https://api.openai.com",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: "Bearer YOUR_OPENAI_API_KEY",
//   },
// });

// openaiClient.get('/chat/completions')
// openaiClient.post()
// openaiClient.put()
// openaiClient.delete()
