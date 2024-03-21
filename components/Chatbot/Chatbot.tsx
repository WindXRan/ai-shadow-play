"use client";

import * as z from "zod";
import React from "react";
import { useForm } from "react-hook-form";
import { formSchema } from "./constants";
export default function Chatbot() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      prompt: "",
    },
  });
  return (
    <div className="h-[4rem] w-[4rem] absolute bottom-3 right-3 bg-rose-200 ml-auto rounded-full "></div>
  );
}
