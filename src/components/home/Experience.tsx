import { experienceData } from "@/data/site";
import bgStyles from "@/styles/backgrounds.module.scss";
import clsx from "clsx";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useState } from "react";

interface ExperienceCardProp {
  companyName: string;
  position: string;
  contractStatus: string;
  startDate: string;
  endDate?: string | null;
  icon: string;
  descriptionList: string[];
  isHightlighted?: boolean;
}

const ExperienceCard = ({
  companyName,
  position,
  contractStatus,
  startDate,
  endDate,
  icon,
  descriptionList,
  isHightlighted,
}: ExperienceCardProp) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((prev) => !prev);
  return (
    <div className="flex items-start gap-10 mt-12">
      <div className="relative hidden md:block rounded-full aspect-square bg-white flex-shrink-0 w-24 p-4" data-aos="zoom-in">
        <img
            src={icon}
            loading="lazy"
            alt={`icon-${companyName}`}
            className={"hidden md:block w-ful flex-shrink-0 h-full object-fit"}
          />
          {
            isHightlighted && (
              <div className="rounded-full w-[110%] h-[110%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-[#7BFFCF]"/>
            )
          }
      </div>
      <div className="flex-grow">
        <div className="grid grid-cols-2">
          <h5 className="col-span-1 text-xl md:text-3xl" data-aos="fade-right">
            {startDate} -{" "}
            {endDate || <span className="text-[#7BFFCF]">Present</span>}
          </h5>
          <p className="col-span-1 text-end text-lg md:text-2xl" data-aos="fade-left">{contractStatus}</p>
        </div>
        <div
          className={clsx(
            "mt-6 flex items-stretch rounded-lg overflow-clip border border-[rgb(255,255,255,0.05)]",
            bgStyles.cardExperienceBg
          )}
          data-aos="fade-up"
        >
          <img
            src={icon}
            loading="lazy"
            alt={`icon-${companyName}`}
            className={"md:hidden bg-white w-16 p-3 object-contain"}
          />
          <div className="flex flex-col ps-4 pe-6 md:px-6 py-3 md:py-4">
            <h6 className="text-lg md:text-2xl">{position}</h6>
            <p className="md:text-xl">{companyName}</p>
          </div>
        </div>
        <div data-aos="fade-up">
          <LayoutGroup>
            <motion.ul
              layout
              className={clsx(
                bgStyles.cardDescriptionBg,
                "border border-[rgb(255,255,255,0.05)] rounded-lg overflow-clip mt-6"
              )}
            >
              <AnimatePresence>
                {descriptionList
                  .slice(0, (!expanded && 3) || descriptionList.length)
                  .map((description, i) => (
                    <motion.li
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      key={i}
                      className={clsx(
                        "px-6 py-2 md:py-3",
                        i != description.length - 1 &&
                          "border-b border-[rgb(255,255,255,0.05)]"
                      )}
                    >
                      {description}
                    </motion.li>
                  ))}
              </AnimatePresence>

              {descriptionList.length > 3 && (
                <motion.li
                  className={clsx(
                    "text-right font-bold text-white cursor-pointer px-6 py-2 md:py-3 border-b border-t border-[rgb(255,255,255,0.05)]"
                  )}
                  onClick={toggleExpanded}
                >
                  {(expanded && "See less...") || "See more..."}
                </motion.li>
              )}
            </motion.ul>
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
};

export default function Experience({ ...rest }) {
  return (
    <section
      id="experience"
      className="min-h-[100vh] w-full overflow-hidden px-6 sm:px-10"
      style={{ boxShadow: "0 0 100px -50px black" }}
      {...rest}
    >
      <div className="max-w-screen-lg py-12 mx-auto">
        <h1 className="text-4xl sm:text-6xl  font-bold text-[#7BFFCF]" data-aos="fade-right">
          Experience
        </h1>
        <ul className="mt-10 md:mt-32 max-w-screen-md">
          {experienceData?.map((item, i) => (
            <ExperienceCard
              key={item.companyName + item.startDate + item.endDate}
              companyName={item.companyName}
              contractStatus={item.contractStatus}
              descriptionList={item.descriptionList}
              icon={item.icon}
              position={item.position}
              startDate={item.startDate}
              endDate={item.endDate}
              isHightlighted={i == 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
