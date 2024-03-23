"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Toast } from "./ui/toast";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
type Props = {
  className?: string;
  pathName?: string;
};
const Helper = ({ className, pathName }: Props) => {
  const formSchema = z.object({
    username: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(111);
  }
  return (
    <div
      className={cn(
        "hidden lg:block w-[400px] h-full border-r-4 border-red-200",
        className
      )}
    >
      {pathName === "1111" ? (
        <div className="relative bottom-0 flex justify-e items-end">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-1 flex-col justify-center items-center"
            >
              <div className="w-full h-[60vh] bg-black">111</div>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormDescription>请输入你的问题</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      ) : (
        ""
      )}
      {pathName === "chatbot"}
    </div>
  );
};

export default Helper;
