export type AppRoute = {
  id: string
  path: string
  label: string
  children?: AppRoute[]
  permissions?: string[]
  roles?: string[]
}
