import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, description, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase() + ".jpeg";
  console.log(projectTitle);
  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{description}</p> {/* Using the description prop */}
        <a href={link} target="_blank" rel="noreferrer">
          <motion.div
            whileInView={{ scale: [0, 1] }}
            whileHover={{ scale: [1, 0.9] }}
            transition={{ duration: 0.25 }}
            className="app__flex"
          >
            <button className="w-60 p-5 bg-yellow font-semibold text-deep-blue text-lg mt-5 hover:bg-red hover:text-white transition duration-500 rounded-md">
              Open
            </button>
          </motion.div>
        </a>
      </div>
      <img src={`../assets/${projectTitle}`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Welcome to my portfolio of projects, where each endeavor showcases my
          passion for technology and problem-solving. From creating dynamic web
          applications to developing efficient software solutions, these
          projects represent a journey of continuous learning and skill
          enhancement. Each one holds a story of challenges tackled, innovations
          developed, and teamwork executed, reflecting my dedication to
          excellence in the field of Full Stack Development.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project
            title="Project E commerce"
            description="This sleek e-commerce platform offers a minimalist design with a focus on product imagery, allowing users to shop with ease. The intuitive interface includes a streamlined shopping bag feature, enhancing the checkout process. It's an exemplary model of modern online retail design that balances aesthetics with user-centric functionality."
            link="https://ecommerce-kappa-pied.vercel.app/"
          />
          <Project
            title="Project Analytics"
            description="The Analytics Dashboard provides a dynamic and detailed visualization of business metrics in a dark-mode interface. It offers users real-time insights with interactive charts and maps for data-driven decision-making. The dashboard is a testament to efficient design, merging sophisticated functionality with accessibility."
            link="https://dashboard-react-uxu4.vercel.app/"
          />

          {/* ROW 2 */}
          <Project
            title="Tic Tac"
            description="The Tic-Tac-Toe project is a classic two-player game built with HTML, CSS, and JavaScript. Players take turns to align three Xs or Os horizontally, vertically, or diagonally on a 3x3 grid for a win. Enjoy interactive gameplay in a user-friendly interface."
            link="https://tic-tac-toe-xi-teal.vercel.app/"
          />
          <Project
            title="3D Shirt"
            description="Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your own style"
            link="https://project-threejs-ai-nine.vercel.app/"
          />
          {/* <Project title="Project 4" />
          <Project title="Project 5" /> */}

          {/* ROW 3 */}
          {/* <Project title="Project 1" />
          <Project title="Project 6" /> */}
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
