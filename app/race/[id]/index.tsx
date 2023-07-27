"use client";
import { SyntheticEvent, useState } from "react";
import TableBody from "./TableBody";
import SelectRiderNote from "@/components/SelectRiderNote";
import { RunTypeConst } from "@/services/riders/data-type";

export default function index({ id }: { id: number }) {
  const [categoryName, setCategoryName] = useState<string>("");
  const [noteInternal, setNoteInternal] = useState<string>("");
  function handleSelect(e: SyntheticEvent) {
    const { value } = e.currentTarget;
    setNoteInternal(value);
    setTimeout(() => {
      setNoteInternal("");
    }, 1000);
  }
  return (
    <div className="py-10 px-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-center justify-between mb-6">
        <h1 className="text-center text-4xl">{categoryName}</h1>
        <div
          className="flex gap-3 md:justify-center mx-auto md:mx-0"
          id="button-container"
        >
          <select
            className="select w-48"
            onChange={handleSelect}
            value={noteInternal}
          >
            <option value="">SELECT ACTION</option>
            {Object.keys(RunTypeConst).map((key) => {
              const value = RunTypeConst[key as keyof typeof RunTypeConst];
              return (
                <option key={value} value={value}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <TableBody
          id={id}
          onCategoryNameChange={(cat) => {
            setCategoryName(cat);
          }}
          note={noteInternal}
        />
      </div>
    </div>
  );
}
