import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

function App() {
  type FormData = {
    firstName: string;
    lastName: string;
    gender: string;
    age: number;
    phone: string;
    email: string;
    password: string;
    confirmPassword: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log(errors);
    console.log(formData);
  };

  const password = watch("password");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
          React Hook Form
        </h1>
        <form
          className="space-y-4 text-blue-600"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: true, minLength: 5 })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.firstName?.type === "required" && (
            <p className="text-red-500">First Name is required</p>
          )}
          {errors.firstName?.type === "minLength" && (
            <p className="text-red-500">
              First Name must be at least 5 characters
            </p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: true, minLength: 5 })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.lastName?.type === "required" && (
            <p className="text-red-500">Last Name is required</p>
          )}
          {errors.lastName?.type === "minLength" && (
            <p className="text-red-500">
              Last Name must be at least 5 characters
            </p>
          )}

          <select
            {...register("gender", {
              required: true,
              validate: (value) => value !== "select",
            })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={"select"}>Select</option>
            <option value={"male"}>Male</option>
            <option value={"female"}>Female</option>
            <option value={"other"}>Other</option>
            <option value={"prefer not to say"}>Prefer not to say</option>
          </select>
          {errors.gender && (
            <p className="text-red-500">Please select a valid gender</p>
          )}

          <input
            type="number"
            placeholder="Age"
            {...register("age", { required: true, min: 18 })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.age?.type === "required" && (
            <p className="text-red-500">Age is required</p>
          )}
          {errors.age?.type === "min" && (
            <p className="text-red-500">Age must be at least 18</p>
          )}

          <input
            type="tel"
            placeholder="Phone"
            {...register("phone", { required: true, pattern: /^[0-9]{10}$/ })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone?.type === "required" && (
            <p className="text-red-500">Phone is required</p>
          )}
          {errors.phone?.type === "pattern" && (
            <p className="text-red-500">Phone must be 10 digits</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/ })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className="text-red-500">Email is invalid</p>
          )}

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true, minLength: 8 })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 8 characters
            </p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              minLength: 8,
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword?.type === "required" && (
            <p className="text-red-500">Confirm Password is required</p>
          )}
          {errors.confirmPassword?.type === "minLength" && (
            <p className="text-red-500">
              Confirm Password must be at least 8 characters
            </p>
          )}
          {errors.confirmPassword?.message && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Submit
            </button>
            <button
              type="reset"
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
