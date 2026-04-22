import type { JSX } from "react";
import { BsArrowDown } from "react-icons/bs";
import { Canvas } from "@react-three/fiber";
import {
  Center,
  ContactShadows,
  Environment,
  Float,
  OrbitControls,
} from "@react-three/drei";
import { ComputerContact } from "../components/models/ComputerContact";

export default function Contact(): JSX.Element {
  return (
    <div className="font-body flex flex-1 flex-col items-stretch rounded-lg sm:grid sm:w-xl sm:grid-cols-2 sm:gap-3 md:w-full">
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

      <div className="relative h-64 w-full flex-1 cursor-grab overflow-hidden rounded-lg active:cursor-grabbing sm:h-auto">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <ambientLight intensity={1} />

          <color attach="background" args={["#e67e22"]} />

          <OrbitControls
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
          />

          <Center position={[0, 0, 0]}>
            <ComputerContact scale={0.02} />
          </Center>

          <ContactShadows
            far={4}
            scale={8}
            position={[0, -0.8, 0.1]}
            opacity={0.3}
          />
        </Canvas>
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
          required
          placeholder={placeHolder}
        />
      ) : (
        <input
          minLength={inputType === "email" ? 7 : 3}
          className="contact-input"
          type={inputType}
          id={id}
          required
          placeholder={placeHolder}
        />
      )}
    </>
  );
}

function Button() {
  return (
    <button className="center-element group bg-white-50 w-full cursor-pointer gap-1.5 rounded-sm py-2 font-medium transition-all duration-300 hover:bg-[#d1e6ff]/90 active:scale-95">
      SEND MESSAGE{" "}
      <BsArrowDown className="mb-0.5 group-hover:animate-bounce" />{" "}
    </button>
  );
}
