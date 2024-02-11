export const Button: React.FC<{
  onClick: () => void
  className: string
  children: React.ReactNode
}>

export const InputField: React.FC<{
  label: string
  className: string
  id: string
  type: string
  placeholder: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}>
