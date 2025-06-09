import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="flex mb-4 gap-2 flex-col">
        <h1 className="text-4xl font-bold text-red-500 ">
          404 - Page Not Found
        </h1>
        <p>Oops! The page you’re looking for doesn't exist.</p>
        <p className="self-center italic font-semibold">
          You can go back to the {" "}
          <Link to="/" className=" text-blue-400">
            Home Page
          </Link>{" "}
          to find your way.
        </p>
      </div>
    </div>
  );
}
