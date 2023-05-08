import { BenefitType, SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis nobis architecto et modi sapiente quaerat illo quam porro sequi iste. Iure quod amet deleniti veniam molestiae dolore earum quis ipsam.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam labore placeat inventore asperiores reiciendis laboriosam suscipit eaque reprehenderit facere! Architecto repellendus quos expedita magnam, esse voluptates earum iste dolores dolor.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nesciunt soluta sapiente delectus odit repellendus laboriosam aspernatur, quaerat eius doloribus ducimus harum. Cumque, incidunt nisi omnis quisquam praesentium neque amet.",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <div className="md:my-5 md:w-3/5">
          <HText>MORE THAN JUST A GYM</HText>
          <p className="my-5 text-sm">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </div>

        {/* benefits */}
        <div className="mt-5 items-center justify-between gap-8 md:flex">
          {benefits.map((benefit: BenefitType) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
