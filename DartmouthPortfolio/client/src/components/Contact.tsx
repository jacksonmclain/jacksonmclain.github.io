import { motion } from "framer-motion";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { useQueryClient } from "@tanstack/react-query";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, LinkedinIcon, TwitterIcon, BookOpenIcon, GlobeIcon } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-ivory">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-serif font-bold text-dartmouth-green mb-16 text-center"
        >
          Get in Touch
        </motion.h2>
        
        <div className="flex flex-col md:flex-row">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2 mb-10 md:mb-0 md:pr-10"
          >
            <h3 className="text-2xl font-serif font-bold text-dartmouth-green mb-6">Contact Information</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-sans font-semibold mb-2">Academic Address</h4>
              <p className="font-sans text-charcoal">
                Department of Environmental Studies<br />
                Dartmouth College<br />
                Hanover, NH 03755
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-sans font-semibold mb-2">Email</h4>
              <p className="font-sans text-charcoal">
                alexander.wilson@dartmouth.edu
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-lg font-sans font-semibold mb-2">Office Hours</h4>
              <p className="font-sans text-charcoal">
                Monday & Wednesday: 2:00 PM - 4:00 PM<br />
                Or by appointment
              </p>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-sans font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-dartmouth-green text-white p-3 rounded-full hover:bg-forest-green transition-colors" 
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-dartmouth-green text-white p-3 rounded-full hover:bg-forest-green transition-colors" 
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-dartmouth-green text-white p-3 rounded-full hover:bg-forest-green transition-colors" 
                  aria-label="ResearchGate"
                >
                  <BookOpenIcon className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-dartmouth-green text-white p-3 rounded-full hover:bg-forest-green transition-colors" 
                  aria-label="Google Scholar"
                >
                  <GlobeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:w-1/2"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-dartmouth-green mb-6">Send a Message</h3>
                
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-sans font-semibold text-charcoal">Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dartmouth-green" 
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
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-sans font-semibold text-charcoal">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email" 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dartmouth-green" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-sans font-semibold text-charcoal">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dartmouth-green" 
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
                    <FormItem className="mb-6">
                      <FormLabel className="text-sm font-sans font-semibold text-charcoal">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4} 
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dartmouth-green" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-dartmouth-green hover:bg-forest-green text-white font-sans py-2 px-6 rounded-md transition-colors duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
