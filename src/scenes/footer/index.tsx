import Logo from "@/assets/Logo.png";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={Logo} alt="logo" />
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            accusamus assumenda animi, consectetur delectus molestiae vero in at
            labore, sequi esse tempore asperiores, quod consequatur quis est
            aliquam placeat doloribus.
          </p>
          <p>© Evogym All Rights Reserved</p>
        </div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
