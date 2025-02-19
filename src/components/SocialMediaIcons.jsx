const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/odie-jamsranjav/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://docs.google.com/document/d/1YWY86IJx_03uLUHcfqwHFMbrAQ4ESodF/edit?usp=sharing&ouid=105068690803435577072&rtpof=true&sd=true"
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
