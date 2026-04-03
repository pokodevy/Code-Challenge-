import type { ChangeEvent } from "react";

import type { InputsState } from "../types/app";

interface UserDataPanelProps {
  inputs: InputsState;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function UserDataPanel({ inputs, onInputChange }: UserDataPanelProps) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm xl:w-1/4">
      <div className="space-y-1 border-b pb-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Step 1
        </p>
        <h2 className="text-lg font-bold">Enter sample data</h2>
        <p className="text-sm text-slate-500">
          This simulates what an end user types into the app.
        </p>
      </div>
      <div className="space-y-4">
        <label className="block text-sm font-medium">
          Name
          <input
            name="name"
            value={inputs.name}
            onChange={onInputChange}
            placeholder="Type a name"
            className="border p-2 w-full mt-1 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </label>
        <label className="block text-sm font-medium">
          Age
          <input
            name="age"
            type="number"
            value={inputs.age}
            onChange={onInputChange}
            placeholder="Type an age"
            className="border p-2 w-full mt-1 rounded-md bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </label>
      </div>
    </div>
  );
}

export default UserDataPanel;
