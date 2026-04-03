import { useState } from "react";

import ControlsPanel from "./components/ControlsPanel";
import PreviewPanel from "./components/PreviewPanel";
import UserDataPanel from "./components/UserDataPanel";
import type {
  ConfigState,
  ConditionOperator,
  InputsState,
  ValueSource,
} from "./types/app";

function App() {
  const [inputs, setInputs] = useState<InputsState>({
    name: "",
    age: "",
  });
  const [config, setConfig] = useState<ConfigState>({
    valueSource: "name",
    conditionField: "age",
    conditionOperator: ">",
    conditionValue: 18,
    isUppercase: false,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  const isVisible = () => {
    const fieldValue =
      config.conditionField === "age" ? Number(inputs.age) : inputs.name.length;
    const threshold = Number(config.conditionValue);

    switch (config.conditionOperator) {
      case ">":
        return fieldValue > threshold;
      case "<":
        return fieldValue < threshold;
      case "==":
        return fieldValue === threshold;
      default:
        return true;
    }
  };

  const getDisplayedText = () => {
    if (!config.valueSource) return "No data source selected";

    let result = "";
    if (config.valueSource === "name") result = inputs.name || "Empty Name";
    if (config.valueSource === "age") result = inputs.age || "0";
    if (config.valueSource === "full_profile") {
      result = `${inputs.name} (Age: ${inputs.age})`;
    }

    return config.isUppercase ? result.toUpperCase() : result;
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8 font-sans text-slate-800 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <header className="space-y-2">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            No-code text builder
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Connect form inputs to a text element without writing code
          </h1>
          <p className="max-w-3xl text-sm text-slate-600">
            Pick what the text should show, choose when it appears, and apply a
            simple transformation using plain language controls.
          </p>
        </header>

        <div className="flex flex-col gap-6 xl:flex-row">
          <UserDataPanel inputs={inputs} onInputChange={handleInputChange} />
          <PreviewPanel
            isVisible={isVisible()}
            displayedText={getDisplayedText()}
          />
          <ControlsPanel
            config={config}
            onValueSourceChange={(value) =>
              setConfig({ ...config, valueSource: value as ValueSource })
            }
            onUppercaseChange={(checked) =>
              setConfig({ ...config, isUppercase: checked })
            }
            onConditionOperatorChange={(value) =>
              setConfig({
                ...config,
                conditionOperator: value as ConditionOperator,
              })
            }
            onConditionValueChange={(event) =>
              setConfig({ ...config, conditionValue: event.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
