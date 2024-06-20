"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { tabs } from "../utils/common";

const TabNav = ({ type = "movie" }: { type: string }) => {
  const router = useRouter();
  return (
    <div className="space-x-4 mb-5">
      <div className="inline-block p-2 rounded-lg bg-[#0d2136]">
        <div className="flex justify-start items-center gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => router.push(`/home/${tab.id}`)}
              className={`px-6 py-2 rounded-md text-md font-medium ${
                tab.id === type
                  ? "bg-[#7b6ef6] text-white"
                  : "text-[#8c93a7] hover:bg-[#7b6ef6] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabNav;
