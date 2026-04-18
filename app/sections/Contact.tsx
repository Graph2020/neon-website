import type { JSX } from "react";

export default function Contact(): JSX.Element {
  return (
    <div className="center-element font-body w-full flex-col rounded-lg border border-white sm:w-xl sm:flex-row">
      <div className="flex w-1/2 flex-col gap-3 bg-slate-900">
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
          className="contact-input"
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
