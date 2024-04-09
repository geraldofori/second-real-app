import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h2>Not found</h2>
        <p>Sorry the page your are requesting for cannot be found</p>
        <Link href="/">Return Home</Link>
    </div>
  );
}

export default NotFound;