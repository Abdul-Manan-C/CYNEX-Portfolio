"use client";

import { Github, Linkedin, Mail, Phone, Terminal } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
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
import { useToast } from "@/hooks/use-toast";
import { GlassPanel } from "../glass-panel";


const socialLinks = [
  {
    href: "mailto:abdul.manan2.cyb@uajk.edu.pk",
    icon: <Mail className="text-accent" />,
    label: "Email",
  },
  {
    href: "https://github.com/Abdul-Manan-C",
    icon: <Github className="text-accent" />,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/c%CA%9C-m%E1%B4%80%C9%B4%E1%B4%80%C9%B4-343742370",
    icon: <Linkedin className="text-accent" />,
    label: "LinkedIn",
  },
  {
    href: "https://tryhackme.com/p/mananhanif01",
    icon: <Terminal className="text-accent" />,
    label: "TryHackMe",
  },
  {
    href: "https://wa.me/923118873637",
    icon: <Phone className="text-accent" />,
    label: "WhatsApp",
  },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  comment: z.string().min(10, { message: "Message must be at least 10 characters." }).max(500, { message: "Message cannot be more than 500 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const subject = encodeURIComponent(`Contact from ${values.name} via your Portfolio`);
    const body = encodeURIComponent(`Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.comment}`);
    const mailtoLink = `mailto:chmanan524@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    toast({
      title: "Opening email client...",
      description: "Please complete sending the email in your mail application.",
    });

    form.reset();
  }


  return (
    <section id="contact" className="scroll-mt-24">
      <h2 className="text-3xl md:text-4xl font-headline text-center mb-12 font-bold tracking-tight">
        Contact & Social Hub
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-3xl mx-auto">
        {socialLinks.map((link) => (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            key={link.label}
          >
            <GlassPanel className="group aspect-square flex items-center justify-center p-4 transition-all duration-300 shadow-lg shadow-neon-blue/10 hover:shadow-xl hover:shadow-neon-blue/20">
                <div className="flex flex-col items-center gap-2 text-muted-foreground transition-colors group-hover:text-foreground">
                    {React.cloneElement(link.icon, { className: "w-10 h-10" })}
                    <span className="text-sm font-code">{link.label}</span>
                </div>
            </GlassPanel>
          </a>
        ))}
      </div>

        <div className="mt-16 max-w-3xl mx-auto">
        <GlassPanel className="p-6 md:p-8 shadow-lg shadow-neon-blue/10 hover:shadow-xl hover:shadow-neon-blue/20">
            <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-headline text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="comment"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Send Message
                </Button>
              </form>
            </Form>
            </CardContent>
          </GlassPanel>
        </div>
    </section>
  );
}
