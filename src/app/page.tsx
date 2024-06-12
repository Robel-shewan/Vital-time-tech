"use client";
import Image from "next/image";
import DraggableList from "./components/DraggableList";
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Draggable List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-2/5 mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-black">Draggable List</h1>
        <DraggableList />
      </main>
    </div>
  );
}
