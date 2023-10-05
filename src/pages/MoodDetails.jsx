import React, { useState, useEffect } from "react";
import { InputField, Button, AbsoluteImages } from "../components";
import { useNavigate } from "react-router-dom";

const MoodDetails = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState("Happy");
  const [genre, setGenre] = useState("Pop");
  const [voice, setVoice] = useState("Male");

  //constants
  const moodOptions = [
    {
      text: "Happy",
      emoji:
        "https://www.reshot.com/preview-assets/icons/GZVEFWBYDU/glasses-happy-GZVEFWBYDU.svg",
    },
    {
      text: "Romantic",
      emoji:
        "https://www.reshot.com/preview-assets/icons/U63YHWCBJX/love-U63YHWCBJX.svg",
    },
    {
      text: "Funny",
      emoji:
        "https://www.reshot.com/preview-assets/icons/87DJ5GSTHB/laughing-87DJ5GSTHB.svg",
    },
    {
      text: "Motivational",
      emoji:
        "https://www.reshot.com/preview-assets/icons/JHBED7C26Z/starstruck-JHBED7C26Z.svg",
    },
    {
      text: "Cute",
      emoji:
        "https://www.reshot.com/preview-assets/icons/FHR4VE3T2C/cute-FHR4VE3T2C.svg",
    },
  ];

  const genreOptions = [
    {
      text: "Rap",
      emoji:
        "https://www.reshot.com/preview-assets/icons/SAR9KDLH2G/speakers-SAR9KDLH2G.svg",
    },
    {
      text: "Rock",
      emoji:
        "https://www.reshot.com/preview-assets/icons/KPHRANX2QF/electric-guitar-KPHRANX2QF.svg",
    },
    {
      text: "Pop",
      emoji:
        "https://www.reshot.com/preview-assets/icons/U8HVC3K4YG/mic-U8HVC3K4YG.svg",
    },
    {
      text: "Desi",
      emoji:
        "https://www.reshot.com/preview-assets/icons/M8EGV467YS/sitar-M8EGV467YS.svg",
    },
    {
      text: "EDM",
      emoji:
        "https://www.reshot.com/preview-assets/icons/VC9WF28ABU/dj-controller-VC9WF28ABU.svg",
    },
  ];

  const voiceOptions = [
    {
      text: "Male",
      emoji:
        "https://www.reshot.com/preview-assets/icons/TQKZX7YS5U/male-professor-TQKZX7YS5U.svg",
    },
    {
      text: "Female",
      emoji:
        "https://www.reshot.com/preview-assets/icons/FZYJW4CG3P/female-student-FZYJW4CG3P.svg",
    },
  ];

  //functions
  const handleMoodOptions = (mood) => {
    setMood(mood);
  };
  const handleGenreOptions = (genre) => {
    setGenre(genre);
  };
  const handleVoiceOptions = (voice) => {
    setVoice(voice);
  };

  const sessionData = sessionStorage.getItem("userData");
  let userData = {};

  if (sessionData !== null) {
    userData = JSON.parse(sessionData);
  }

  const handleOnSubmit = () => {
    userData = { ...userData, mood, genre, voice };

    sessionStorage.setItem("userData", JSON.stringify(userData));
    navigate("/loved-one-info/additonal-details");
  };

  return (
    <div className="flex flex-col items-center py-10">
      <div className="flex flex-col gap-[12px] w-full items-center justify-center">
        {/* mood options */}
        <div className="h-[150px] w-[80%] border-4 rounded-[12px] border-[#e8b460]">
          <div className="w-full h-[40px] bg-[#e8b460] flex items-center justify-center">
            <h1 className="font-bold text-[24px]">Mood</h1>
          </div>
          <div className="grid grid-cols-5 h-full w-full gap-[12px] p-4">
            {moodOptions.map((moodOpt, idx) => {
              return (
                <button
                  onClick={() => handleMoodOptions(moodOpt.text)}
                  key={idx}
                  className="h-full flex flex-col justify-start items-center"
                >
                  <img
                    src={moodOpt.emoji}
                    alt={moodOpt.text}
                    className={`bg-white p-2 rounded-full object-fit h-[44px]`}
                  />
                  <p
                    className={`font-[600] text-[12px] ${
                      mood === moodOpt.text ? "text-[#e8b460]" : "text-white"
                    }`}
                  >
                    {moodOpt.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
        {/* genre options */}
        <div className="h-[150px] w-[80%] border-4 rounded-[12px] border-[#e8b460]">
          <div className="w-full h-[40px] bg-[#e8b460] flex items-center justify-center">
            <h1 className="font-bold text-[24px]">Genre</h1>
          </div>
          <div className="grid grid-cols-5 h-full w-full gap-[12px] p-4">
            {genreOptions.map((genreOpt, idx) => {
              return (
                <button
                  onClick={() => handleGenreOptions(genreOpt.text)}
                  key={idx}
                  className="h-full  flex flex-col justify-start items-center"
                >
                  <img
                    src={genreOpt.emoji}
                    alt={genreOpt.text}
                    className="bg-white p-2 rounded-full object-fit h-[44px]"
                  />
                  <p
                    className={`font-[600] text-[12px] ${
                      genre === genreOpt.text ? "text-[#e8b460]" : "text-white"
                    }`}
                  >
                    {genreOpt.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
        {/* voice options */}
        <div className="h-[150px] w-[80%] border-4 rounded-[12px] border-[#e8b460]">
          <div className="w-full h-[40px] bg-[#e8b460] flex items-center justify-center">
            <h1 className="font-bold text-[24px]">Singer's Voice</h1>
          </div>
          <div className="grid grid-cols-2 overflow-hidden h-auto w-full gap-[12px] p-4">
            {voiceOptions.map((voiceOpt, idx) => {
              return (
                <button
                  onClick={() => handleVoiceOptions(voiceOpt.text)}
                  key={idx}
                  className="flex h-auto flex-col justify-start items-center"
                >
                  <img
                    src={voiceOpt.emoji}
                    alt={voiceOpt.text}
                    className="bg-white p-2 rounded-full object-fit h-[64px]"
                  />
                  <p
                    className={`font-[600] text-[12px] ${
                      voice === voiceOpt.text ? "text-[#e8b460]" : "text-white"
                    }`}
                  >
                    {voiceOpt.text}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <span className="h-[100px]"></span>
      <div className="flex justify-center fixed bottom-0 bg-black w-full h-[120px] items-center bottom_buttom_gradient">
        <Button
          onClick={handleOnSubmit}
          text="Proceed"
          className="h-[45px] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
        />
      </div>
    </div>
  );
};

export default MoodDetails;
