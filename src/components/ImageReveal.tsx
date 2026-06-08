"use client";

import { motion } from "framer-motion";

interface Props {
  src: string;
  alt: string;
  className?: string;
  delay?: number;
}

export default function ImageReveal({ src, alt, className = "", delay = 0 }: Props) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      />
    </div>
  );
}
