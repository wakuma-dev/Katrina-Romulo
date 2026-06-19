import { useReducer } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const SocialMedia = {
  youtube: "youtube",
  instagram: "instagram",
  tiktok: "tiktok",
  pinterest: "pinterest",
} as const;

type SocialMedia = (typeof SocialMedia)[keyof typeof SocialMedia];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  desc: string;
  password: string;
  message: string;
  source: SocialMedia | "";
};

type FormAction =
  | { type: "SET_FIELD"; field: keyof FormState; value: string }
  | { type: "RESET" };

const initialState: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  desc: "",
  password: "",
  message: "",
  source: "",
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export default function FooterForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name as keyof FormState,
      value: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: "RESET" });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-4 w-full lg:w-1/2"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
    >
      {/* FIRST + LAST NAME */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px] font-sans">
            First Name <span className="text-gray-400">(required)</span>
          </label>
          <input
            type="text"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            className="bg-[#FCFCFC] outline-none p-3 border border-black"
          />
        </div>

        <div className="flex flex-col gap-2 w-full">
          <label className="text-[14px] font-sans">
            Last Name <span className="text-gray-400">(required)</span>
          </label>
          <input
            type="text"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            className="bg-[#FCFCFC] outline-none p-3 border border-black"
          />
        </div>
      </div>

      {/* EMAIL */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] font-sans">
          Your Lovely email <span className="text-gray-400">(required)</span>
        </label>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="bg-[#FCFCFC] outline-none p-3 border border-black"
        />
      </div>

      {/* PROJECT DESCRIPTION */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] font-sans">
          Your exciting business or project{" "}
          <span className="text-gray-400">(required)</span>
        </label>

        <p className="text-[14px] text-gray-700">
          Please describe your idea, industry, and goals.
        </p>

        <input
          type="text"
          name="desc"
          value={state.desc}
          onChange={handleChange}
          className="bg-[#FCFCFC] outline-none p-3 border border-black"
        />
      </div>

      {/* PASSWORD */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] font-sans">
          Password <span className="text-gray-400">(required)</span>
        </label>
        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          className="bg-[#FCFCFC] outline-none p-3 border border-black"
        />
      </div>

      {/* MESSAGE */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-[14px] font-sans">
          Why do you want to work together?{" "}
          <span className="text-gray-400">(required)</span>
        </label>
        <textarea
          name="message"
          value={state.message}
          onChange={handleChange}
          className="bg-[#FCFCFC] outline-none p-3 border border-black"
        />
      </div>

      {/* SOCIAL MEDIA */}
      <div className="flex flex-col gap-2 w-full relative">
        <label className="text-[14px] font-sans">
          How did you find me?{" "}
          <span className="text-gray-400">(required)</span>
        </label>

        <select
          name="source"
          value={state.source}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "source",
              value: e.target.value,
            })
          }
          className="bg-[#FCFCFC] outline-none p-3 border border-black appearance-none"
        >
          <option value="">Select an option</option>

          {Object.values(SocialMedia).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        <IoIosArrowDown
          className="absolute right-3 top-11 text-black pointer-events-none"
          size={24}
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        className="bg-[#FCFCFC] border border-black text-black px-6 py-2"
      >
        Send
      </button>
    </motion.form>
  );
};
