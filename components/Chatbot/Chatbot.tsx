"use client";
import React from "react";
import { useForm } from "react-hook-form";
export default function Chatbot() {
  const form = useForm({
    defaultValues: {
      prompt: "",
    },
  });
  return (
    <div className="h-[4rem] w-[4rem] absolute bottom-3 right-3 bg-rose-200 ml-auto rounded-full "></div>
  );
}
