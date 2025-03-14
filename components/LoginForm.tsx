import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import { getToken } from "@/actions/auth"

export function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form action={getToken} className="p-6 md:p-8">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col items-center text-center">
                <Image src="/images/hclcdplogo.svg" alt="HCL CDP" width={240} height={168} />
                <p className="text-muted-foreground text-balance">Login to your account</p>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input name="username" type="username" required />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                </div>
                <Input name="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </div>
          </form>
          <div className="bg-muted relative hidden md:block">
            <Image
              src="/images/login/Deployment-Flexibility.png"
              width={400}
              height={210}
              alt="HCL CDP Deployment-Flexibility"
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        Copyright HCL Technologies Ltd. {new Date().getFullYear()}. Licensed Materials - Property of HCL Technologies
        Ltd.
      </div>
    </div>
  )
}
