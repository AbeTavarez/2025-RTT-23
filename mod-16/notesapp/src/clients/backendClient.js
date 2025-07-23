import axios from 'axios'



export const backendClient = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
    headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWJlMTIzIiwiZW1haWwiOiJhYmUxMjNAZ21haWwuY29tIiwiX2lkIjoiNjg3YTgzMTMwYWM0Y2VlODg1N2I1YmFkIn0sImlhdCI6MTc1MzIwODQwMCwiZXhwIjoxNzUzMjE1NjAwfQ.17B-0D6mq68BWv_tSi0isTWETpRYIciEtzQci2aTXsY"
    }
});