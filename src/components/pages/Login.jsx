import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";
import {Toast} from "radix-ui";

const TempMatchFound = {
  email: "satheeshsubbu1612@gmail.com",
  password: "Satheesh",
}

const datas = {
  email: "",
  password: "",
}

function Login() {
  
  const [inputFields, setInputFields] = useState(datas);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInputFields({...inputFields, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {email, password} = inputFields;
      console.log(email, password);
        let values = email === TempMatchFound.email && password === TempMatchFound.password;
    
        if(values) {
         setToastMessage("Successfully Logged In!");
      setToastOpen(true);
        }
        else {
      setToastMessage("Invalid credentials. Try again.")
      setToastOpen(true)
    }
    }

  return (
    <div className="background-cover">
    <div className="flex justify-center mt-35">

    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" type="password" name="password" required onChange={handleChange}/>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" onClick={handleSubmit} className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
    </div>
    <Toast.Provider>
        <Toast.Root
          open={toastOpen}
          onOpenChange={setToastOpen}
          className="bg-white border rounded-md p-4 shadow-lg"
        >
          <Toast.Title className="font-bold">{toastMessage}</Toast.Title>
          <Toast.Close className="ml-auto mt-2 text-sm underline">Close</Toast.Close>
        </Toast.Root>
        <Toast.Viewport className="fixed right-5 bottom-5 z-50 flex flex-col gap-2 w-96 max-w-full" />
      </Toast.Provider>
    </div>
  )
}

export default Login;
