import React from "react";
import { IconCircleLetterX } from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import { tutorialModal } from "../features/tutorialModal";

const TutorialModal = () => {
  const dispatch = useDispatch();

  const handleOpenTutorialModal = () => {
    dispatch(tutorialModal({ value: false }));
  };

  return (
    <div className="absolute flex items-center justify-center top-0 right-0 backdrop-blur-sm h-full w-full z-[10]">
      <div className="w-[80%] bg-white rounded-[12px]">
        <div className="flex flex-col items-center justify-center p-2">
          <div className="flex justify-end items-end w-full">
            <button onClick={handleOpenTutorialModal}>
              <IconCircleLetterX size={32} color="#d2b480" />
            </button>
          </div>
          <div className="h-[150px] flex items-center justify-center">
            <h1 className="text-[24px] font-bold text-[#350073]">
              Tutorial Video
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialModal;
