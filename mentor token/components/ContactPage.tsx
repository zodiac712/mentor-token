"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <Header />

      <main className="py-16 px-2">
        <div className="container mx-auto max-w-5xl">
          <div className="rounded-2xl p-10 bg-white">
            <div className="text-left mb-10">
              <h1 className="text-5xl font-bold text-black mb-6">
                Let’s Talk!
              </h1>
              <p className="text-gray-700 text-base max-w-3xl leading-relaxed mb-0">
                We’re thrilled to connect with you! Whether you have a question, need assistance, or want to discuss a potential project, we’re here to listen and help. At Mentor Token, we believe in the power of collaboration and are committed to providing you with the best support and solutions. Fill out the form below, and one of our team members will get back to you as soon as possible. <b>Let’s create something amazing together!</b>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="h-12 bg-white border border-[#696CFF] rounded-lg px-4 text-black placeholder:text-gray-400 focus:border-[#696CFF] focus:ring-0 focus:outline-none"
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email adress"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="h-12 bg-white border border-[#696CFF] rounded-lg px-4 text-black placeholder:text-gray-400 focus:border-[#696CFF] focus:ring-0 focus:outline-none"
                  required
                />
              </div>
              <Textarea
                name="message"
                placeholder="Your message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                className="bg-white border border-[#696CFF] rounded-lg px-4 py-3 text-black placeholder:text-gray-400 focus:border-[#696CFF] focus:ring-0 focus:outline-none resize-none"
                required
              />
              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-[#696CFF] hover:bg-[#5a5ed8] text-white px-10 py-3 text-base font-bold rounded-lg uppercase tracking-wide w-56"
                >
                  SEND MESSAGE
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}