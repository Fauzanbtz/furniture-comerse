import React from "react";
import { Button } from "@/components/ui/button";

const Info = () => {
  return (
    <div className="flex flex-col justify-center gap-5 w-full md:w-1/2">
      <p className="text-white bg-[#356267] text-center w-fit p-1 rounded-2xl border border-slate-500">
        FURNITURE DESIGNS IDEAS
      </p>
      <h1 className="text-5xl text-white">Modern Interior Design Studio</h1>
      <p className="text-white">
        Choosing the right furniture for your home online will add elegance and
        functionality to your interior while also being cost effective and
        long-lasting.
      </p>
      <div className="gap-4 flex items-center">
        <Button variant="secondary" className="w-fit bg-secondary text-white">
          Secondary
        </Button>
        <a href="#" className="underline text-white">
          Follow Instagram
        </a>
      </div>
    </div>
  );
};

export default Info;
