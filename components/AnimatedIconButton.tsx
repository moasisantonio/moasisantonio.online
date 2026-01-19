"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface Props {
  onClick?: () => void;
  label?: string;
  className?: string;
}

export default function AnimatedIconButton({
  onClick,
  label = "Simpan",
  className = "",
}: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center px-3 py-2 rounded-md bg-blue-600 text-white ${className}`}
    >
      <Check className="mr-2" size={16} />
      <span>{label}</span>
    </motion.button>
  );
}