import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const { toast } = useToast()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement Supabase authentication here after connection
    toast({
      title: "Authentication required",
      description: "Please connect to Supabase to enable authentication.",
      variant: "destructive",
    })
  }

  return (
    <div className="min-h-screen bg-zenDark flex items-center justify-center">
      <Card className="w-[400px] bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-white">Admin Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white"
              />
            </div>
            <Button type="submit" className="w-full bg-zenPurple hover:bg-zenPurple/90">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login