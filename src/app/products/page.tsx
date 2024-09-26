"use client";

import Navbar from "@/components/navbar";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Slider } from "@/components/ui/slider";

export default function Products() {
  const [radioValue, setRadioValue] = useState("");
  const [sliderValue, setSliderValue] = useState(33);

  return (
    <div>
      <Navbar />
      <div className="px-10 py-20">
        <h1 className="text-3xl font-bold bg-slate-400">Filter Option</h1>
        <div className="flex gap-10 py-10">
          <div className="w-1/5 flex flex-col gap-5">
            <Accordion
              type="single"
              collapsible
              className="border p-2 rounded-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                  Category
                </AccordionTrigger>
                <AccordionContent>
                  <RadioGroup defaultValue="comfortable" className="space-y-1">
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value="bedroom"
                        id="r1"
                        onClick={() => setRadioValue("bedroom")}
                      />
                      <Label htmlFor="r1">Bedroom</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value="livingroom"
                        id="r2"
                        onClick={() => setRadioValue("livingroom")}
                      />
                      <Label htmlFor="r2">Living Room</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value="office"
                        id="r3"
                        onClick={() => setRadioValue("office")}
                      />
                      <Label htmlFor="r3">Office</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value="kitchen"
                        id="r4"
                        onClick={() => setRadioValue("kitchen")}
                      />
                      <Label htmlFor="r3">Kitchen</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value="outdoor"
                        id="r5"
                        onClick={() => setRadioValue("outdoor")}
                      />
                      <Label htmlFor="r3">Outdoor</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value="decor"
                        id="r6"
                        onClick={() => setRadioValue("decor")}
                      />
                      <Label htmlFor="r3">Decor</Label>
                    </div>
                    <div className="flex items-center space-x-2 border p-2 rounded-full w-fit">
                      <RadioGroupItem
                        value=""
                        id="r7"
                        onClick={() => setRadioValue("")}
                      />
                      <Label htmlFor="r1">default</Label>
                    </div>
                  </RadioGroup>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            {/* ---------- Price ----------*/}
            <Accordion
              type="single"
              collapsible
              className="border p-2 rounded-lg">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-2">
                  <p>$0 - ${sliderValue}</p>
                  <Slider
                    max={1000}
                    value={[sliderValue]}
                    step={1}
                    onValueChange={(v) => setSliderValue(v[0])}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <p>w</p>
        </div>
      </div>
    </div>
  );
}
