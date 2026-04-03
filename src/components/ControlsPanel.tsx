import type { ChangeEvent } from "react";

import type { ConfigState, ConditionOperator, ValueSource } from "../types/app";

interface ControlsPanelProps {
  config: ConfigState;
  onValueSourceChange: (value: ValueSource) => void;
  onUppercaseChange: (checked: boolean) => void;
  onConditionOperatorChange: (value: ConditionOperator) => void;
  onConditionValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function ControlsPanel({
  config,
  onValueSourceChange,
  onUppercaseChange,
  onConditionOperatorChange,
  onConditionValueChange,
}: ControlsPanelProps) {
  return (
    <div className="flex w-full flex-col gap-6 rounded-2xl bg-slate-900 p-6 text-white shadow-xl xl:w-1/3">
      <div className="space-y-1 border-b border-slate-700 pb-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Step 3
        </p>
        <h2 className="text-lg font-bold">Tell the text what to do</h2>
        <p className="text-sm text-slate-400">
          Use plain settings instead of expressions or template syntax.
        </p>
      </div>

      <section className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          What should the text show?
        </p>
        <select
          value={config.valueSource}
          onChange={(event) =>
            onValueSourceChange(event.target.value as ValueSource)
          }
          className="bg-slate-800 border border-slate-700 p-2 w-full rounded-md text-sm"
        >
          <option value="">Choose content</option>
          <option value="name">Show the name</option>
          <option value="age">Show the age</option>
          <option value="full_profile">Show name and age together</option>
        </select>

        <label className="flex items-center gap-3 cursor-pointer select-none py-1">
          <input
            type="checkbox"
            checked={config.isUppercase}
            onChange={(event) => onUppercaseChange(event.target.checked)}
            className="w-4 h-4 rounded accent-blue-500"
          />
          <span className="text-sm">Make all letters uppercase</span>
        </label>
      </section>

      <section className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          When should the text appear?
        </p>
        <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-3">
          <p className="mb-3 text-sm text-slate-300">
            Show this text when age...
          </p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            <select
              disabled
              className="rounded-md border border-slate-700 bg-slate-800 p-2 text-sm opacity-50"
            >
              <option>Age</option>
            </select>
            <select
              value={config.conditionOperator}
              onChange={(event) =>
                onConditionOperatorChange(
                  event.target.value as ConditionOperator,
                )
              }
              className="rounded-md border border-slate-700 bg-slate-800 p-2 text-sm"
            >
              <option value=">">is more than</option>
              <option value="<">is less than</option>
              <option value="==">is exactly</option>
            </select>
            <input
              type="number"
              value={config.conditionValue}
              onChange={onConditionValueChange}
              className="rounded-md border border-slate-700 bg-slate-800 p-2 text-sm"
            />
          </div>
        </div>
        <p className="text-xs italic text-slate-500">
          Example: show the text only when age is more than 18.
        </p>
      </section>
    </div>
  );
}

export default ControlsPanel;
