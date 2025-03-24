import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <Image
      src={"/img/logo.webp"}
      width={200}
      height={60}
      alt="Raja Giri hospital logo"
    />
  );
}
