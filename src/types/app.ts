export type ConditionOperator = ">" | "<" | "==";
export type ValueSource = "name" | "age" | "full_profile" | "";

export interface InputsState {
  name: string;
  age: string;
}

export interface ConfigState {
  valueSource: ValueSource;
  conditionField: "age" | "name";
  conditionOperator: ConditionOperator;
  conditionValue: string | number;
  isUppercase: boolean;
}
