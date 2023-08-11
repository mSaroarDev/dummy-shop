import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="login-box w-96 h-auto bg-gray-100 p-6 text-center rounded-lg">
        <h1 className="mb-5 font-bold text-lg">Login to continue...</h1>
        <div>
          <input
            className="w-full p-2 mb-2 rounded-sm"
            type="text"
            placeholder="enter username"
          />
          <br />
          <input
            className="w-full p-2 mb-2 rounded-sm"
            type="password"
            placeholder="******"
          />
          <br />
          <button className="w-full btn btn-sm btn-primary">Login</button>
        </div>
        <p className="mt-5 underline">
          <Link href="/">Back to Homepage</Link>
        </p>
      </div>
    </div>
  );
}
