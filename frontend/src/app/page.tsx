"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  // Fetch the message from the backend
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await axios.get("http://localhost:5000");
        setMessage(response.data);
      } catch (error) {
        setMessage("Error connecting to backend");
        console.error(error);
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-500">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to FreelanceBD.tech</h1>
        <p className="text-lg mt-4">Backend says: {message}</p>
      </div>
    </div>
  );
}
