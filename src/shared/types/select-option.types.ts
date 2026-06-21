export type SelectOption<TValue extends string | number = string> = {
  label: string
  value: TValue
  description?: string
  disabled?: boolean
}
