"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Photo() {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
        className="relative"
      >
        {/* الدائرة المتحركة */}
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 258 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>

        {/* الصورة داخل الدائرة */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="relative w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] rounded-full overflow-hidden">
            <Image
              priority
              quality={100}
              fill
              alt="profile image"
              className="object-cover"
              src="/assets/pct.png"
            />
            {/* لو أردت استعمال الصورة المرفوعة:
              src="/uploads/profile.png"
              تأكد أنك وضعتها داخل مجلد public/uploads
            */}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
