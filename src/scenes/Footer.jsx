import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="h-50 bg-nav-footer-blue p-5">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            Odie Jamsranjav
          </p>
          <p className="font-playfair text-md text-yellow">
            ©{currentYear} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;