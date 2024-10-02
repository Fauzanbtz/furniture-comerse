"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useState } from "react";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      // Periksa apakah respons adalah JSON yang valid
      let data;
      try {
        data = await res.json();
      } catch (err) {
        // Jika JSON parsing gagal, tangani sebagai error respons kosong atau tidak valid
        console.error("Error parsing JSON:", err);
        return setError("Invalid response from server");
      }

      // Periksa status respons
      if (!res.ok) {
        return setError(data.message || "An error occurred");
      } else {
        setSuccess(data.message || "Login successful");
        window.location.href = "/";

        // Reset form setelah sukses
        setEmail("");
        setPassword("");
        setError("");
      }
    } catch (error) {
      console.error("Request failed:", error);
      setError("Request failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-primary">
      <form action="submit" onSubmit={handleSubmit}>
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="username"
                type="email"
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="border-slate-800"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="border-slate-800"
              />
            </div>
            <div>
              {error && (
                <p className="bg-red-500 text-center p-2 rounded-xl text-white">
                  {error}
                </p>
              )}
              {success && (
                <p className="bg-green-500 text-center p-2 rounded-xl text-white">
                  {success}
                </p>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                <ChromeIcon className="mr-2 h-4 w-4" />
                Sign in with Google
              </Button>
              <p>dont have an account <Link href="/register" className="underline text-blue-500 ">sign up</Link></p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-secondary">Sign in</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
