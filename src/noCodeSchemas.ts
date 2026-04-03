import { z } from "zod";

export const TransformationSchema = z.enum([
  "uppercase",
  "lowercase",
  "capitalize",
  "none",
]);

export const DataSourceSchema = z.object({
  componentId: z.string(),
  property: z.string().default("value"),
});

export const BindingSchema = z.object({
  id: z.string(),
  source: DataSourceSchema,
  transform: TransformationSchema.default("none"),
  combineWith: z.string().optional(),
});

export const ConditionSchema = z.object({
  targetId: z.string(),
  operator: z.enum([">", "<", "==", "contains"]),
  value: z.union([z.string(), z.number()]),
  action: z.enum(["show", "hide"]),
});

export type Binding = z.infer<typeof BindingSchema>;
export type Condition = z.infer<typeof ConditionSchema>;

export interface GlobalState {
  components: {
    [id: string]: {
      value: string | number;
      label: string;
      type: "input" | "number" | "select";
    };
  };
  bindings: Binding[];
  conditions: Condition[];
}
