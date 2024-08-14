"use client";
import React, { FormEvent, useState } from "react";

const AdminProductPage = () => {
  const [error, setError] = useState<string | null>();
  const revalidate = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(
      `http://localhost:3000/api/revalidate?tags=products&password=${e.target[0].value}`,
      {
        method: "POST",
        body: {
          password: e.target[0].value,
        },
      }
    );
    if (!res.ok) {
      setError("revalidate failed");
      return null;
    }
    const response = await res.json();
    setError(response.message);
  };
  return (
    <div className="flex flex-col    w-full min-h-screen justify-center items-center">
      <div>AdminProductPage</div>
      <p className="text-red-500 my-2">{error}</p>
      <form
        action=""
        onSubmit={(e) => revalidate(e)}
        className="flex flex-col gap-2"
      >
        <input
          type="password"
          name="password"
          id="password"
          className="outline-1 outline"
        />
        <button className="bg-black text-white font-bold py-3 px-2">
          Revalidate
        </button>
      </form>
    </div>
  );
};

export default AdminProductPage;
