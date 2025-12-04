import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <p>Error: 404 - Page Not Found</p>
      <a className="btn btn-primary" href="/">Home</a>
      {/* this sends request to server each time - activity in network tab - needs internet connection - doesn't work offline*/}
      {/* advantage of React - Single Page Application - no need to go to the server every time - so, using <a></a> tag is of no use here */}
      <Link className="btn btn-danger" to="/">Home</Link>
      {/* using <Link></Link> tag - routing happens within the page - not unnecessarily requesting server - only for necessity like fetching data from an API Endpoint */}
    </>
  );
}

export default PageNotFound