import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the form validation schema
const formSchema = z.object({
  title: z.string(),
  body: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export function PostForm() {
  // Set up form with validation and default values
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
    },
  });

  // Mutation for submitting form data
  const mutation: UseMutationResult<{ id: number }, Error, FormData> =
    useMutation({
      mutationFn: async (data: FormData) => {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts",
          { ...data, userId: 10 }
        );
        return response.data;
      },
      onSuccess: () => {
        form.reset();
      },
    });

  // Handle form submission
  const onSubmit = form.handleSubmit((data) => {
    mutation.mutate(data);
  });

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto border border-gray-200">
      <Form {...form}>
        <form onSubmit={onSubmit} className="space-y-2">
          {/* Title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-md"
                    placeholder="Enter title"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Body Field */}
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Body</FormLabel>
                <FormControl>
                  <Input
                    className="max-w-md"
                    placeholder="Enter body text"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {/* Submit Button with Pending status*/}
          <Button
            type="submit"
            className= {mutation.isPending ? "text-blue-500 w-full" : "w-full"}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? "Submitting..." : "Submit"}
          </Button>

          {/* Success Message */}
          {mutation.isSuccess && (
            <p className="text-green-500 text-center">
              Post submitted successfully! ID: {mutation.data?.id}
            </p>
          )}

          {/* Error Message */}
          {mutation.isError && (
            <p className="text-red-500 mt-2">
              Error:{" "}
              {(mutation.error as Error)?.message || "Something went wrong"}
            </p>
          )}
        </form>
      </Form>
    </div>
  );
}
