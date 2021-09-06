import Link from "next/link";
import ImputForm from "../components/form/InputForm";

export default function Contact(props) {
  return (
    <div>
      <div className="relative w-full px-2 mt-4 sm:container mx-auto">
        <div className="p-2 flex flex-col sm:flex-row">
          <div className="flex justify-center items-center h-40 sm:min-h-screen sm:w-[60%] bg-pink-600 rounded-lg shadow-md">
            <h2 className="text-2xl text-white font-bold tracking-wider">
              Form
            </h2>
          </div>

          <div className="w-full flex justify-center items-center sm:px-10">
            <form action="" className="w-full mt-4">
              <div className="flex flex-col justify-center items-center p-2 border rounded-md shadow">
                <p className="text-gray-400 uppercase">Dados pessoais</p>
                <div className="flex w-full space-x-5">
                  <div className="my-4 relative w-full">
                    <ImputForm
                      type="text"
                      id="firstName"
                      name="firstName"
                      field="First Name"
                      placeholder="First Name"
                      htmlFor="firstName"
                    />
                  </div>
                  <div className="my-4 relative w-full">
                    <ImputForm
                      type="text"
                      id="middleName"
                      name="middleName"
                      field="Middle Name"
                      placeholder="Middle Name"
                      htmlFor="middleName"
                    />
                  </div>
                  <div className="my-4 relative w-full">
                    <ImputForm
                      type="text"
                      id="lastName"
                      name="lastName"
                      field="First Name"
                      placeholder="Last Name"
                      htmlFor="lastName"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 relative">
                <ImputForm
                  type="password"
                  id="password"
                  name="password"
                  field="Password"
                  placeholder="Password"
                  htmlFor="password"
                />
              </div>
              <div className="mt-6 relative">
                <ImputForm
                  type="text"
                  id="campo"
                  name="Campo"
                  field="Campo"
                  placeholder="Campo"
                  htmlFor="Campo"
                />
              </div>

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
