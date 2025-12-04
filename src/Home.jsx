// Home --> Provider Component

import { useState, useEffect, createContext } from "react";
import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const dataContext = createContext();

function Home() {

  const navigate = useNavigate();
  const [posts, setPosts] = useState(null);

  const data = "DataData";

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("http://localhost:3000/posts", { signal })
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

    // Clean Up Function - prevents memory leaking (useEffect creating unnecessary data)
    return () => {
      console.log("Unmounted.... Cleaning Up.");
      controller.abort(); // fetching aborted - when moving onto different page before loading
    };
  }, []);

  return (
    <>
      <div className="container">
        {/* <Link to="/Login">Login</Link> */}

        <dataContext.Provider value={data}>
          {/* <Login /> */}
        </dataContext.Provider>

        <div className="row justify-content-center m-3">
          {posts &&
            posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="card m-3"
                  style={{ width: "18rem" }}
                  onClick={() => {navigate('/Post/'+post.id)}}
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
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
