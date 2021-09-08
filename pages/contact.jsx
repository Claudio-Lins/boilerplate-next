import Link from "next/link";
import ImputForm from "../components/form/InputForm";

export default function Contact(props) {
  return (
    <div>
      <div className="relative w-full mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex justify-center items-center h-40 lg:min-h-screen lg:w-[60%] bg-pink-600 rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-bold tracking-wider">
              Form
            </h2>
          </div>

          <div className="w-full flex justify-center items-center px-4">
            <form action="" className="mt-8">
              <fieldset className="flex flex-wrap justify-between items-center border border-solid border-gray-200 p-4 rounded-md shadow">
                <legend className="text-sm text-gray-400 font-light tracking-wider px-2">
                  Dados pessoais
                </legend>
                <div className="my-4 w-full lg:w-1/2 lg:px-2 relative">
                  <ImputForm
                    type="text"
                    id="firstName"
                    name="firstName"
                    field="First Name"
                    placeholder="First Name"
                    htmlFor="firstName"
                  />
                </div>
                <div className="my-4 w-full lg:w-1/2 lg:px-2 relative">
                  <ImputForm
                    type="text"
                    id="middleName"
                    name="middleName"
                    field="Middle Name"
                    placeholder="Middle Name"
                    htmlFor="middleName"
                  />
                </div>
                <div className="my-4 w-full lg:w-1/2 lg:px-2 relative">
                  <ImputForm
                    type="text"
                    id="lastName"
                    name="lastName"
                    field="Last Name"
                    placeholder="Last Name"
                    htmlFor="lastName"
                  />
                </div>
                <div className="my-4 w-full lg:w-1/2 lg:px-2 relative">
                  <ImputForm
                    type="email"
                    id="email"
                    name="email"
                    field="Email"
                    placeholder="Email"
                    htmlFor="email"
                  />
                </div>
                <div className="my-4 w-full lg:w-1/2 lg:px-2 relative ">
                  <ImputForm
                    className="appearance-none"
                    type="number"
                    id="phone"
                    name="phone"
                    field="Phone"
                    placeholder="Phone"
                    htmlFor="phone"
                  />
                </div>
              </fieldset>
              <div className="w-full flex flex-col justify-center mt-6">
                <Link href="#" passHref>
                  <button className="bg-pink-600 p-2 rounded-md w-full text-white">
                    Send
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
