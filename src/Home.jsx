import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/posts")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPosts(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 5000);
  }, []);

  return (
    <>
      <div className="container">
        <Link to="/Login">Login</Link>
        <div className="row justify-content-center m-3">
          {posts &&
            posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="card m-3"
                  style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text">{post.content}</p>
                    <span className="card-date">{post.created_at}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Home;
