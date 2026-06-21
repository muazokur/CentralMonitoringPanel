import { zodResolver } from "@hookform/resolvers/zod"
import { AlertCircle, LoaderCircle, LogIn } from "lucide-react"
import { useForm } from "react-hook-form"

import { useLogin } from "@/features/auth/hooks/use-login"
import {
  loginSchema,
  type LoginFormValues,
} from "@/features/auth/schemas/login-schema"
import { Button, Input } from "@/shared/components/ui"
import { FormField } from "@/shared/components/form"
import { normalizeApiError } from "@/shared/api"

export function LoginForm() {
  const loginMutation = useLogin()
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const apiError = loginMutation.error
    ? normalizeApiError(loginMutation.error)
    : null

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit((values) => loginMutation.mutate(values))}
    >
      {apiError ? (
        <div
          className="flex gap-2 rounded-md border border-destructive/25 bg-destructive/10 p-3 text-sm text-destructive"
          role="alert"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <p>{apiError.message}</p>
        </div>
      ) : null}

      <FormField
        error={errors.email?.message}
        htmlFor="email"
        label="Email"
      >
        <Input
          autoComplete="email"
          id="email"
          inputMode="email"
          placeholder="operator@factory.local"
          {...register("email")}
        />
      </FormField>

      <FormField
        error={errors.password?.message}
        htmlFor="password"
        label="Password"
      >
        <Input
          autoComplete="current-password"
          id="password"
          placeholder="Enter your password"
          type="password"
          {...register("password")}
        />
      </FormField>

      <Button
        className="w-full"
        disabled={loginMutation.isPending}
        type="submit"
      >
        {loginMutation.isPending ? (
          <LoaderCircle className="animate-spin" />
        ) : (
          <LogIn />
        )}
        Sign in
      </Button>
    </form>
  )
}
