const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/odgerel-jamsranjav/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://drive.google.com/file/d/1hIsczx5AAaDtTZq_IuCmHSi-DHfgiFUJ/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="resume-link" src="../assets/resume.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/OdgerelJ"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="../assets/github-mark-white.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
