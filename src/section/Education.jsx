import postmanCertificate from "../assets/postman.png";
import cloudCertificate from "../assets/cloud.png";
import mongodbCertificate from "../assets/mongo1.png";
import mongodb1Certificate from "../assets/mongo.png";
import { motion }  from "framer-motion"

function Education() {
  return (
    <section className="w-full max-w-6xl mx-auto px-6 py-20 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-white mb-8">Education</h2>

      <motion.div 
            initial={{opacity: 0, y:40 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{duration: 0.1, ease: "easeOut"}}
            viewport={{once: true, amount: 0.2}}
            whileHover={{ 
              y: -10, 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.35)"
            }}
          className="w-full max-w-4xl bg-white/10 border border-white/10 rounded-2xl p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              BSc (Hons) Software Engineering
            </h3>

            <p className="text-purple-400 mt-2">
              University of Plymouth
            </p>
          </div>

          <p className="text-gray-300 font-medium">
            2023 - Present
          </p>
        </div>

        <p className="text-gray-300 mt-5 leading-7">
          Studying software engineering concepts, programming, web development,
          databases, software design, and full-stack application development.
          Currently focused on MERN stack development, REST APIs, authentication,
          and real-world software projects.
        </p>
      </motion.div>

      <h3 className="text-3xl font-bold text-white mb-8 mt-16">Certifications</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
            initial={{opacity: 0, y:40 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{duration: 0.1, ease: "easeOut"}}
            viewport={{once: true, amount: 0.2}}
            whileHover={{ 
              y: -10, 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.35)"
            }}
         className="w-full max-w-[620px] bg-white/10 border border-white/10 rounded-2xl p-6 items-center justify-center">
          <h4 className="text-xl font-semibold text-white">
            Introduction to Postman API
          </h4>

          <p className="text-purple-400 mt-2">Great Learning</p>

          <p className="text-gray-300 mt-4 leading-7">
            Covered API basics, HTTP methods, request and response handling,
            REST API testing, and using Postman to test and debug API requests.
          </p>

          <img
            src={postmanCertificate}
            alt="Introduction to Postman API Certificate"
            className="w-full h48 object-cover rounded-x1 mb-5 border border-white/10"
          />
        </motion.div>

        <motion.div 
            initial={{opacity: 0, y:40 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{duration: 0.1, ease: "easeOut"}}
            viewport={{once: true, amount: 0.2}}
            whileHover={{ 
              y: -10, 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.35)"
            }}
        className="w-full max-w-[620px] bg-white/10 border border-white/10 rounded-2xl p-6">
          <h4 className="text-xl font-semibold text-white">
            Introduction to Cloud APIs
          </h4>

          <p className="text-purple-400 mt-2">Great Learning</p>

          <p className="text-gray-300 mt-4 leading-7">
            Covered cloud API fundamentals, REST API concepts, authentication
            basics, and using APIs to connect applications with cloud services.
          </p>

          <img
            src={cloudCertificate}
            alt="Introduction to Cloud APIs Certificate"
            className="w-full h48 object-cover rounded-x1 mb-5 border border-white/10"
          />
        </motion.div>

        <motion.div 
            nitial={{opacity: 0, y:40 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{duration: 0.1, ease: "easeOut"}}
            viewport={{once: true, amount: 0.2}}
            whileHover={{ 
              y: -10, 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.35)"
            }}        
            className="w-full max-w-[620px] bg-white/10 border border-white/10 rounded-2xl p-6 items-center justify-center">
          <h4 className="text-xl font-semibold text-white">
            MongoDB Schema Design Patterns and Anti-patterns
          </h4>

          <p className="text-purple-400 mt-2">MongoDB University</p>

          <p className="text-gray-300 mt-4 leading-7">
            Covered MongoDB schema design concepts, including document structure, embedding, referencing, and common design patterns. Learned how to avoid anti-patterns and design scalable databases for real-world applications.
          </p>

          <img
            src={mongodbCertificate}
            alt="Introduction to Postman API Certificate"
            className="w-full h48 object-cover rounded-x1 mb-5 border border-white/10"
          />
        </motion.div>

        <motion.div 
            initial={{opacity: 0, y:40 }}
            whileInView={{ opacity: 1, y:0 }}
            transition={{duration: 0.1, ease: "easeOut"}}
            viewport={{once: true, amount: 0.2}}
            whileHover={{ 
              y: -10, 
              scale: 1.03, 
              boxShadow: "0 20px 40px rgba(168, 85, 247, 0.35)"
            }}
        className="w-full max-w-[620px] bg-white/10 border border-white/10 rounded-2xl p-6 items-center justify-center">
          <h4 className="text-xl font-semibold text-white">
           Relational Model (SQL) to MongoDB's Document Model
          </h4>

          <p className="text-purple-400 mt-2">MongoDB University</p>

          <p className="text-gray-300 mt-4 leading-7">
            Learned how to convert traditional SQL relational database concepts into MongoDB’s document model. Covered collections, documents, relationships, and how to structure data effectively in a NoSQL database.
          </p>

          <img
            src={mongodb1Certificate}
            alt="Introduction to Postman API Certificate"
            className="w-full h48 object-cover rounded-x1 mb-5 border border-white/10"
          />
        </motion.div>
        
      </div>
    </section>
  );
}

export default Education;