import React, { useEffect, useState } from "react";
import OpenAI from "openai";
import { AbsoluteImages, ProgressIndicator, Button } from "../components";
import { useNavigate } from "react-router-dom";

const SongLyricsReady = () => {
  const navigate = useNavigate();

  const [responseFromGPT, setResponeFromGPT] = useState();
  const [clicked, setClicked] = useState(false);

  const sessionData = sessionStorage.getItem("userData");
  const userDataObject = JSON.parse(sessionData);

  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_CHAT_GPT_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleFetchRespone = async () => {
    setClicked(true);
    if (userDataObject !== null) {
      try {
        const chatCompletion = await openai.chat.completions.create({
          messages: [
            {
              role: "user",
              content: `Wish a happy birthday to ${userDataObject.name}. Their pet name is
          ${userDataObject.petName}. 
          ${userDataObject.angry} makes them angry. 
          ${userDataObject.funny} makes them funniest. 
          ${userDataObject.smile} makes them special.
          ${userDataObject.movie} movie they likes/like the most.
          ${userDataObject.sport} sports they likes/like the most.
          Ensure that "Happy birthday" is mentioned at least twice in the
          lyrics, and it should rhyme. The lyrics should use simple, short,
          and easy to pronounce words as much as possible. Using the above
          information about ${userDataObject.name}, please write 16 lines of ${userDataObject.genre}
          lyrics that I can dedicate to them for their birthday. Each line can
          have maximum of 8 words or 40 characters. The lyrics generated
          should be completely unique and never written before every single
          time and should not in any way or manner infringe on any
          trademarks/copyrights or any other rights of any individual or
          entity anywhere in the world. Any references or similarity to
          existing lyrics of any song anywhere in the world needs to be
          completely avoided. Any mention of proper nouns i.e. names or places
          of any manner apart from the ones mentioned above needs to be
          completely avoided. The lyrics generated should not be insensitive
          or should not offend any person/ place/ caste/ religion/ creed/
          tribe/ country/ gender/ government/ organisation or any entity or
          individual in any manner whatsoever. Any words which might be
          construed directly or indirectly as cuss words or are offensive in
          any language should also be completely avoided.`,
            },
          ],
          model: "gpt-3.5-turbo",
        });
        setResponeFromGPT(chatCompletion);
        setClicked(false);
      } catch (error) {
        alert("Oops! Something went wrong");
      }
    } else {
      alert("Oops! Something went wrong");
    }
  };

  return (
    <div className="height_of_pages home_page_gradient relative overflow-x-hidden z-[1]">
      <div className="flex flex-col gap-[12px] items-center justify-center">
        <div className="grid gap-[12px] pt-10">
          <div className="flex justify-center">
            <ProgressIndicator filled_value={4} />
          </div>
        </div>
        {responseFromGPT !== undefined ? (
          <div className="flex justify-center">
            <h1 className=" text-[18px] text-white font-bold">
              Your song's lyrics are created!
            </h1>
          </div>
        ) : (
          <div className="flex justify-center">
            <h1 className=" text-[18px] text-white font-bold">
              Enter Create Song to create the song!
            </h1>
          </div>
        )}
        {responseFromGPT !== undefined && (
          <div className="bg-white w-[80%] p-4 rounded-[12px] max-h-[500px] overflow-y-auto border-2 border-black">
            <p className="font-bold text-[#380178]">
              {responseFromGPT?.choices[0]?.message?.content}
            </p>
          </div>
        )}
        <div className="flex gap-[12px] justify-center">
          <Button
            onClick={() => handleFetchRespone()}
            text="Regenrate Song"
            className="h-[45px]  bg-white w-[140px] rounded-[14px] font-bold"
          />
          {responseFromGPT === undefined ? (
            <Button
              onClick={() => handleFetchRespone()}
              text="Create Song"
              className="h-[45px] disabled:bg-[#f2f2f270] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
            />
          ) : (
            <Button
              onClick={() => navigate("/loading")}
              text="Next"
              className="h-[45px] disabled:bg-[#f2f2f270] bg-[#e7b463] w-[140px] rounded-[14px] font-bold"
            />
          )}
        </div>
      </div>

      {/* blobs */}
      <div className="h-[40vh] w-[40vh] rounded-full bg-[#6d00e750] absolute top-[-5%] left-[-40%] z-[-1] animate-bounce"></div>
      <div className="h-[20vh] w-[20vh] rounded-full bg-[#6d00e750] absolute bottom-5 left-2 z-[-1] animate-bounce"></div>
      <div className="h-[30vh] w-[30vh] rounded-full bg-[#6d00e750] absolute bottom-[10%] right-[-30%] z-[-1] animate-bounce"></div>
      {/* images */}
      <AbsoluteImages
        image="https://images.ctfassets.net/pmzhtobns06n/3xctc4IWO7B0ibLFI1yybi/0efe4a75fd57b5ad2cba33dbf9ab5f10/Cameos__6_.png?fm=webp&q=80"
        style=" bottom-3 h-[120px] right-0"
      />
      <AbsoluteImages
        image="https://images.ctfassets.net/pmzhtobns06n/2wC68NLrrsMn6Ze5WPiqvr/46780c41ee6f84a090d8481714bab145/Hazelnut.png?fm=webp&q=80"
        style=" bottom-[50%] h-[120px] left-0 rotate-[20deg]"
      />

      {/* loading */}
      {responseFromGPT === undefined && clicked ? (
        <div className="absolute top-0 h-full w-full flex items-center justify-center backdrop-blur-sm z-[999]">
          <p className="text-white text-[20px] text-center w-[80%] font-bold">
            Don't leave the page, Generating the Song...
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default SongLyricsReady;
