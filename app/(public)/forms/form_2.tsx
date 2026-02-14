"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import UpperDesign from "@/app/components/ui/Upper_Design";
import Footer from "@/app/components/layout/footer";

interface Form2Props {
  onNext?: () => void;
}

export default function Form2({ onNext }: Form2Props) {
  const router = useRouter();
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, string>
  >({});

  const questions = [
    {
      id: "productivity",
      text: "How often do you use productivity apps (e.g., notes, planners, learning tools)?",
    },
    {
      id: "social_media",
      text: "How often do you use social media apps?",
    },
    {
      id: "entertainment",
      text: "How often do you use entertainment or leisure apps (e.g., video, music, games)?",
    },
    {
      id: "overall",
      text: "How would you describe your overall app usage?",
    },
  ];

  const options = [
    { value: "low", label: "Low (< 1 hour)" },
    { value: "medium", label: "Medium (1-3 hours)" },
    { value: "high", label: "High (3+ hours)" },
  ];

  const handleSelect = (questionId: string, value: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <UpperDesign />
      <section className="px-4 ml-4 py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-12">
              <p className="text-sm text-gray-500 font-inter">Step 2 of 2</p>
              <div className="flex-1 max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full w-full bg-[#0099C0] rounded-full"></div>
              </div>
            </div>

            <div className="space-y-10">
              {questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <h3 className="text-base font-semibold text-gray-900 font-inter">
                    {question.text}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(question.id, option.value)}
                        className={`px-6 py-3 rounded-full font-medium text-sm transition-all font-inter cursor-pointer ${
                          selectedAnswers[question.id] === option.value
                            ? "bg-[#0099C0] text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => router.push("/results")}
              className="mt-12 px-6 py-2.5 bg-[#006B8F] text-white font-semibold rounded-full hover:bg-teal-700 cursor-pointer transition-colors flex items-center gap-2 font-inter"
            >
              Results
              <span>→</span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
