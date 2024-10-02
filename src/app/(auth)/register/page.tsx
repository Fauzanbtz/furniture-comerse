"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Component() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [cekPassword, setCekPassword] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (password !== matchPassword) {
      return setCekPassword(false);
    }

    const res = await fetch("/api/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name }),
    });

    const data = await res.json();

    if (!res.ok) {
      setError(data.message);
    } else {
      setSuccess(data.message);
      window.location.href = "/login";
      // Reset form setelah sukses
      setEmail("");
      setName("");
      setPassword("");
      setCekPassword(true);
    }
  };

  return (
    <main className="bg-primary h-screen flex items-center justify-center">
      <div className="mx-auto max-w-md space-y-6 py-12 bg-white p-10 rounded-lg">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-muted-foreground">
            Enter your details below to get started.
          </p>
        </div>
        <form className="grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="John Doe"
              className="border-slate-800"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              className="border-slate-800"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              className="border-slate-800"
              placeholder="*****"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="*****"
              className="border-slate-800"
              onChange={(e) => setMatchPassword(e.target.value)}
              required
            />
            <p
              className={`text-sm text-red-500 ${
                cekPassword ? "hidden" : "text-red-500"
              }`}>
              Passwords do not match
            </p>
          </div>
          <Button type="submit" className="w-full">
            Create Account
          </Button>
          {error && <p className="bg-red-500 text-center p-2 rounded-xl text-white">{error}</p>}
          {success && <p className="bg-green-500 text-center p-2 rounded-xl text-white">{success}</p>}
          <p className="text-center">
            Already have an account?{" "}
            <span>
              <Link href="/login" className="underline text-blue-800">
                Login
              </Link>
            </span>
          </p>
        </form>
      </div>
    </main>
  );
}
