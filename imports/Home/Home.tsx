"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import DailogPage from "@/imports/DailogBox.tsx/page/DailogPage";

const Home = () => {
  return (
    <div className="w-full min-h-[100vh] max-h-[100vh] overflow-hidden flex justify-center items-center ">
      <Dialog>
        <DialogTrigger>
          <div className="bg-fuchsia-50 text-black p-2 rounded-lg">
            Open Model
          </div>
        </DialogTrigger>
        <DialogContent>
          <DailogPage />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
