"use client";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "30%",
    scale: 0.93,
    transition: { delay: 0.5, duration: 0.12, type: "tween" },
  },
  visible: {
    opacity: 1,
    y: "0%",
    scale: 1,
    transition: {
      type: "spring",
      damping: 6,
      mass: 0.1,
      stiffness: 90,
    },
  },
};

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Modal = () => {
  return (
    <motion.div
      //   exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-end justify-center sm:px-6 sm:items-center sm:justify-center"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0, y: "60%", scale: 0.92 }}
        variants={modalVariants}
        className="relative z-50 px-12 py-10 rounded-2xl bg-base-100 "
      >
        <div className="flex flex-col md:flex-row justify-center gap-x-16 gap-y-8 text-center">
          <div className="flex flex-col md:pb-12 justify-center">
            <h3 className="pt-2 pb-3 text-2xl font-bold uppercase text-neutral md:text-3xl xl:text-4xl">
              Welcome!
            </h3>
            <span className="font-light leading-tight max-w-96 text-balance">
              Sign in or create an account to view your orders and check out
              faster.
            </span>
          </div>
          <div className="flex flex-col justify-center gap-2 min-w-64 lg:min-w-80">
            <div className="flex flex-col gap-6">
              <form className="py-1 ">
                <div className="flex flex-col justify-center w-full gap-3">
                  <label className="w-full max-w-xl mx-auto form-control">
                    <div className="label py-0.5">
                      <span className="label-text text-lg font-semibold opacity-50">
                        Email
                      </span>
                    </div>
                    <input
                      type="email"
                      placeholder=""
                      name="email"
                      id="email"
                      className="w-full input input-bordered py-7"
                    />
                  </label>
                  <div className="flex flex-col justify-start gap-0.5 text-start">
                    <label className="w-full max-w-xl mx-auto form-control">
                      <div className="label py-0.5">
                        <span className="label-text text-lg font-semibold opacity-50">
                          Password
                        </span>
                      </div>
                      <input
                        type="password"
                        placeholder=""
                        name="password"
                        id="password"
                        className="w-full input input-bordered py-7"
                      />
                    </label>
                    <Link href="/">
                      <span className=" cursor-pointer hover:text-warning underline-offset-4 opacity-70 hover:opacity-100">
                        Forgot password?
                      </span>
                    </Link>
                  </div>
                </div>
              </form>

              <button className="px-6 text-lg font-bold tracking-wider uppercase text-base-100 btn btn-md btn-accent">
                Sign in
              </button>
            </div>
            <div className="w-3/4 mx-auto divider">or</div>
            <button className="px-4 py-2 mx-auto text-lg font-bold tracking-wider uppercase transition-all border-2 hover:bg-accent hover:text-base-100 text-accent border-accent rounded-xl">
              Sign Up
            </button>
          </div>
        </div>
      </motion.div>
      <Link href="/">
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 w-full h-screen shadow-sm bg-opacity-30 bg-neutral backdrop-blur-sm"
        ></motion.div>
      </Link>
    </motion.div>
  );
};

export default Modal;
