import type { JSX } from "react";
import { BsArrowDown } from "react-icons/bs";
export default function Contact(): JSX.Element {
  return (
    <div className="center-element font-body w-full flex-col rounded-lg sm:w-xl sm:flex-row">
      <div className="flex w-full flex-col gap-3 rounded-lg bg-slate-900 px-3 py-4">
        <MessageInput
          id="name"
          labelName="Name"
          inputType="text"
          placeHolder="What's your good name?"
        />

        <MessageInput
          id="email"
          labelName="Email"
          inputType="email"
          placeHolder="Enter your email"
        />

        <MessageInput
          id="message"
          labelName="Message"
          inputType="textarea"
          placeHolder="How can I help you?"
        />
        <Button />
      </div>
    </div>
  );
}

function MessageInput({
  id,
  labelName,
  inputType,
  placeHolder,
}: {
  id: string;
  labelName: string;
  inputType: string;
  placeHolder?: string;
}): JSX.Element {
  return (
    <>
      <label className="text-white" htmlFor={id}>
        {labelName}
      </label>
      {inputType === "textarea" ? (
        <textarea
          className="contact-input resize-none"
          id={id}
          rows={4}
          placeholder={placeHolder}
        />
      ) : (
        <input
          className="contact-input"
          type={inputType}
          id={id}
          placeholder={placeHolder}
        />
      )}
    </>
  );
}

function Button() {
  return (
    <button className="center-element group w-full cursor-pointer gap-1.5 rounded-sm bg-[#d1e6ff] py-2 font-medium transition-all duration-300 hover:bg-[#d1e6ff]/90 active:scale-95">
      SEND MESSAGE{" "}
      <BsArrowDown className="mb-0.5 group-hover:animate-bounce" />{" "}
    </button>
  );
}
