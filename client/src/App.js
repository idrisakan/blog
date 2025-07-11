import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Login from "./login";

const postsData = [
  {
    imageSrc: "https://techcrunch.com/wp-content/uploads/2024/08/aviron-bike-fit-1.jpg?resize=1280,1035",
    title: "Gamified rower startup Aviron branches out into bikes",
    author: "David Paszko",
    date: "2024-08-21 14:20",
    summary:
      "Call it a reverse Peloton. Toronto-based Aviron, best known for its connected rower, has released a stationary bike. The Fit Bike runs",
  },
  {
    imageSrc: "https://picsum.photos/seed/picsum/400/300",
    title: "Another post title",
    author: "Jane Doe",
    date: "2025-07-11 10:00",
    summary: "Summary of the second post.",
  },
  {
    imageSrc: "https://picsum.photos/id/237/400/300",
    title: "Third post example",
    author: "Ali Veli",
    date: "2025-07-12 09:30",
    summary: "Summary of the third post.",
  },
];

function App() {
  return (
    <Routes>
      <Route
        index
        element={
          <main>
            <Header />
            {postsData.map((post, index) => (
              <Post
                key={index}
                imageSrc={post.imageSrc}
                title={post.title}
                author={post.author}
                date={post.date}
                summary={post.summary}
              />
            ))}
          </main>
        }
      />
      <Route path={'/login'} element={<Login/>} />
    </Routes>
  );
}

export default App;

