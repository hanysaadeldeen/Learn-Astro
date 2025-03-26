import React from "react";
import { motion } from "framer-motion";
import AnotherLogo from "../../assets/icons/AnotherLogo";

const Post = ({ post }: { post: string }) => {
  return (
    <div
      className="text-white  bg-[#000] text-primaryText h-screen flex justify-center items-center
  "
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold uppercase"> hello {post} fucnk</h1>
          <div className="text-center py-4">
            <AnotherLogo />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Post;
