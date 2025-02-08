"use client";
import React, { useState } from "react";
import Image from "next/image";

const FAQBox = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-300 p-4 sm:p-6 rounded-md shadow-sm bg-[#FAF7F2]">
      <div className="flex justify-between items-center">
        {/* Question */}
        <h1 className="text-[#333333] font-bold text-lg sm:text-xl">{question}</h1>
        {/* Toggle Icon */}
        <button
          onClick={toggleBox}
          className="text-lg sm:text-xl font-bold text-[#333333] cursor-pointer focus:outline-none"
          aria-label="Toggle FAQ"
        >
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {/* Collapsible Answer */}
      {isOpen && (
        <p className="font-normal text-sm sm:text-base leading-6 text-[#4F4F4F] mt-2">
          {answer}
        </p>
      )}
    </div>
  );
};

const Page = () => {
  const faqData = [
    {
      question: "How we serve food?",
      answer:
        "We serve food with high-quality ingredients, cooked fresh daily, ensuring delicious taste and hygiene.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "You can contact us via email, phone, or visit our website’s contact page for further details.",
    },
    {
      question: "How is our food quality?",
      answer:
        "Our food quality is top-notch, verified by regular quality checks and customer feedback.",
    },
    {
      question: "What will be delivered? And when?",
      answer:
        "We deliver all menu items promptly within 30 minutes to 1 hour, depending on your location.",
    },
    {
      question: "How do we give home delivery?",
      answer:
        "Our delivery team ensures timely and safe delivery with eco-friendly packaging.",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer:
        "Yes, we are open 24/7 to serve you delicious meals anytime you crave them.",
    },
  ];

  return (
    <div>
      <div className="relative">
        {/* First Image */}
        <Image
          src="/pictures/ourmenu.png"
          alt="menu"
          width={1920}
          height={550}
          className="w-full object-cover"
        />

        {/* Second Image (Centered) */}
        <div className="absolute inset-0 flex justify-center items-center">
          <Image
            src="/pictures/faq.png"
            alt="ourmenu"
            width={160}
            height={104}
            className="max-w-full h-auto"
          />
        </div>
      </div>

      <div className="px-4 py-10 sm:px-10 lg:p-28">
        <div className="text-center">
          <h1 className="text-[#333333] font-bold text-3xl sm:text-4xl leading-[1.2]">
            Questions Look Here
          </h1>
          <p className="text-[#4F4F4F] font-normal text-base sm:text-lg leading-6 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
          {faqData.map((faq, index) => (
            <FAQBox key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
