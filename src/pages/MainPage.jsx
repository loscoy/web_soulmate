import soulmateIcon from "../assets/soulmate_icon.svg";
import iosIcon from "../assets/ios_icon.webp";
import androidIcon from "../assets/android_icon.webp";
import people from "../assets/people.webp";
import lifeLike from "../assets/life_like.webp";
import hottie from "../assets/hottie.webp";
import bg from "@/assets/background_mix.png";
import avatar_0 from "../assets/avatar_0.webp";
import avatar_1 from "../assets/avatar_1.webp";
import avatar_2 from "../assets/avatar_2.webp";
import avatar_3 from "../assets/avatar_3.webp";
import avatar_4 from "../assets/avatar_4.webp";
import avatar_5 from "../assets/avatar_5.webp";
import avatar_6 from "../assets/avatar_6.webp";
import avatar_7 from "../assets/avatar_7.webp";
import { useCallback } from "react";

const images = [avatar_0, avatar_1, avatar_2, avatar_3, avatar_4, avatar_5, avatar_6, avatar_7];

const Avatar = (context) => {
  const { src } = context;
  return <img className="w-[80px] h-[80px] object-cover rounded-full" src={src} alt="" />;
};

const Tag = (context) => {
  const { icon, name } = context;
  return (
    <div className="h-[38px] px-3 py-1 bg-white rounded-lg shadow justify-start items-center gap-1.5 inline-flex">
      <div className="h-7 pb-1 justify-center items-center flex">
        <img className="w-7 h-7" src={icon} />
      </div>
      <div className="text-slate-800 text-base font-normal font-['Poppins-Italic'] leading-[30px]">
        {name}
      </div>
    </div>
  );
};

const MainPage = () => {
  const onTapAppStore = useCallback(() => {
    window.open(
      "https://apps.apple.com/cn/app/soulmate-ai%E5%A5%B3%E5%8F%8B%E8%99%9A%E6%8B%9F%E6%81%8B%E7%88%B1%E5%AF%B9%E8%AF%9D%E8%81%8A%E5%A4%A9-%E7%81%B5%E9%AD%82%E4%BC%B4%E4%BE%A3%E6%A8%A1%E6%8B%9F%E6%81%8B%E7%88%B1/id6451964936"
    );
  });
  const onTapPlayStore = useCallback(() => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.ai.chatbot.roleplay.soulmate&hl=en&gl=US"
    );
  });
  return (
    <>
      <div className="w-[100vw] h-[100vh]">
        <div className="md:h-full md:w-full  bg-cover bg-no-repeat bg-right-bottom pt-[50px] pl-[30px] pr-[30px] pb-[30px] md:pt-[160px] md:pl-[100px] md:pr-[30px] md:pb-[100px]">
          <img
            className="fixed w-full h-full right-0 bottom-0 left-0 top-0 object-cover"
            src={bg}
            alt="people"
          />
          <img
            className="fixed right-10 bottom-0 w-[60vw] object-cover"
            src={people}
            alt="people"
          />
          <div className="relative flex md:flex-row flex-col justify-center items-center overflow-y-scroll md:overflow-hidden">
            <div className="flex-1">
              <div className="flex items-center">
                <img src={soulmateIcon} alt="icon" />
                <div className="text-slate-800 text-2xl font-normal font-['Sriracha'] leading-[31.20px] pl-2">
                  Soulmate AI
                </div>
              </div>

              <div className="mt-6 text-slate-800 text-[32px] md:text-[64px] font-['Montserrat-SemiBold'] leading-[40px] md:leading-[64px] text-center md:text-start">
                Jump into <br />
                your desires with <br />
                Soulmate AI.
              </div>

              <div className="flex items-center md:items-start md:flex-row flex-col mt-6 gap-10 md:gap-0">
                <div>
                  <div className=" text-slate-800 text-opacity-60 text-base font-medium font-['Montserrat-Medium'] leading-relaxed  text-center md:text-start">
                    Naughty Chat, Romantic Date, Forever Love.
                    <br />
                    Explore endless possibilities with your AI soulmate.
                  </div>
                  <div className="flex justify-center md:justify-start items-center mt-10">
                    <img
                      onClick={onTapAppStore}
                      className="w-[155px] h-[52px] cursor-pointer"
                      src={iosIcon}
                      alt="app store"
                    />
                    <div className="w-[40px]"></div>
                    <img
                      onClick={onTapPlayStore}
                      className="w-[155px] h-[52px] cursor-pointer"
                      src={androidIcon}
                      alt="app store"
                    />
                  </div>
                </div>

                <div className="grow"></div>

                <div className="relative self-end justify-self-end">
                  <div className="mb-[38px] pl-[53px] pr-[53px]">
                    <div className="flex justify-center md:justify-start">
                      <Tag icon={hottie} name="Hottie"></Tag>
                    </div>
                    <div className="h-[5px]"></div>
                    <div className="flex justify-center md:justify-end">
                      <Tag icon={lifeLike} name="Life-like"></Tag>
                    </div>
                  </div>
                  <div className="flex gap-5 flex-wrap justify-center">
                    {images.map((img, index) => (
                      <div
                        key={img}
                        className={`${
                          index == 0 || index == images.length - 1
                            ? "md:opacity-20"
                            : index == 1 || index == images.length - 2
                            ? "md:opacity-60"
                            : "md:opacity-100"
                        }`}
                      >
                        <Avatar src={img} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
