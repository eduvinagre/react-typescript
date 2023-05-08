import HText from "@/shared/HText";
import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Wheight Training Classes",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint aspernatur, aliquid obcaecati eveniet nobis quidem adipisci nam amet sit harum blanditiis ipsam perspiciatis nihil culpa quisquam optio eum impedit minima!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius iure incidunt inventore eaque illo voluptatibus laboriosam voluptatem, quos minus voluptates. Unde odit totam ullam minima eum asperiores suscipit sequi nobis.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam provident nemo, ea quaerat eum veniam? Molestias vitae deserunt impedit minima, temporibus accusamus ea, dignissimos enim porro repudiandae suscipit hic magni!",
    image: image3,
  },
  {
    name: "Crossfit Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab libero exercitationem suscipit doloremque cupiditate. Repellat veritatis voluptate iste, perferendis sit, voluptatibus sequi atque obcaecati aliquid, cum veniam a. Voluptatum, praesentium.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro sit aliquid cupiditate! Vel, aspernatur vero aperiam minima voluptas officia magnam maiores at atque libero et voluptatibus. Obcaecati, porro. Quas, praesentium.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et minus eius, necessitatibus delectus quod dignissimos qui perspiciatis quis quisquam ducimus saepe quaerat vero rem dolorum ea ad iure labore quasi.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus dolores autem nihil veniam quia cumque itaque
              molestias, veritatis explicabo pariatur praesentium suscipit
              animi. Incidunt eveniet beatae fugit, ullam accusamus quo.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
