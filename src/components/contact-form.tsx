"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { z } from "zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";
import { useState } from "react";

interface ContactFormProps {
  formI18n: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
  toastI18n: {
    success: {
      title: string;
      description: string;
    };
    error: {
      title: string;
      description: string;
    };
  };
}

export const ContactForm = ({ formI18n, toastI18n }: ContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    username: z.string().min(3).max(50),
    email: z.string().email(),
    message: z.string().min(10).max(200),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setLoading(true);
    const response = await fetch("/api/send", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      form.reset();
      toast({
        title: toastI18n.success.title,
        className: "bg-green-900",
        description: toastI18n.success.description,
      });
      setLoading(false);
    } else {
      toast({
        title: toastI18n.error.title,
        variant: "destructive",
        description: toastI18n.error.description,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={formI18n.name}
                    className=" bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={formI18n.email}
                    className=" bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder={formI18n.message}
                    className=" bg-slate-800"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={loading} type="submit">
            {formI18n.send}
          </Button>
        </form>
      </Form>
    </div>
  );
};
