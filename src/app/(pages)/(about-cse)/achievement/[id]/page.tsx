"use client";
import { useParams } from "next/navigation";

export default function page() {
  const { id } = useParams();

  console.log(id);
  return <div>page</div>;
}
