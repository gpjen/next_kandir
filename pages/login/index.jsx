import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import {FaHome} from "react-icons/fa"

export default function Example() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <Link className="absolute top-5 left-5 text-gray-700 p-3 rounded bg-white hover:scale-110 cursor-pointer" href="/"><FaHome/></Link>
      <Card className="w-96 mx-auto">
        <CardHeader
          variant="gradient"
          color="green"
          className="mb-4 grid h-28 place-items-center"
        >
          <Typography variant="h3" color="white">
            Masuk Akun
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 py-10">
          <Input label="Email" size="lg" color="green"/>
          <Input label="Password" size="lg" color="green" />
          <div className="-ml-2.5">
            <Checkbox label="Remember Me" color="green" />
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" color="green" fullWidth>
            Masuk
          </Button>
          <Typography variant="small" className="mt-6 flex justify-center">
            Lupa password?
            <Link href="/forgotPassword" className="text-green-700 ml-1 font-semibold"> Klik sisini </Link>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
}
