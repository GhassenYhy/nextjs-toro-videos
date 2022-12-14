import React from "react";
import { BiCommentX } from "react-icons/bi";
import { MdVideocamOff } from "react-icons/md";

interface IProps {
  text: string;
}

const NoResults = ({ text }: IProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">
        {text === "No Comments yet" ? <BiCommentX /> : <MdVideocamOff />}
      </p>
      <p className="text-2xl text-center">{text}</p>
    </div>
  );
};

export default NoResults;
