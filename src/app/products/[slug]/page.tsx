import React from "react";
import { useRouter } from "next/navigation";

export default function DetailProducts({ params }: { params: { slug: string } }) {
  return <p>test: {params.slug}</p>;
}
