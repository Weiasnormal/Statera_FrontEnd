'use client';

import { useState, useEffect } from 'react';
import Form_2 from "./form_2";
import LoadingPage from "@/app/components/loading/LoadingPage";
import UpperDesign from "@/app/components/ui/Upper_Design";
import Footer from "@/app/components/layout/footer";

export default function Form1() {
    const [showForm2, setShowForm2] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    useEffect(() => {
        if (showLoading) {
            const timer = setTimeout(() => {
                setShowLoading(false);
                setShowForm2(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [showLoading]);

    if (showLoading) {
        return <LoadingPage />;
    }

    if (showForm2) {
        return <Form_2 onNext={() => console.log('Form 2 next clicked')} />;
    }
    return (
        <div className="min-h-screen bg-white">
            <UpperDesign />
            <section className="px-4 py-16 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-4 mb-8">
                        <p className="text-sm text-gray-500 font-inter">Step 1 of 2</p>
                        <div className="flex-1 max-w-xs h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-[#0099C0] rounded-full"></div>
                        </div>
                    </div>

                    <div className="max-w-md">
                        <h2 className="text-2xl font-bold text-gray-700 mb-6 font-poppins">
                            What&apos;s your General Weighted Average (GWA)?
                        </h2>

                        <div className="mb-6 font-inter">
                            <label className="block text-sm font-medium text-gray-900 mb-2">
                                GWA
                            </label>
                            <input
                                type="number"
                                placeholder="Ex. 1.32"
                                step="0.01"
                                min="1.00"
                                max="5.00"
                                className="w-full px-4 py-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-black placeholder-gray-500 text-black"
                            />
                        </div>

                        <button 
                            onClick={() => setShowLoading(true)}
                            className="px-6 py-2 bg-[#006B8F] text-white font-semibold rounded-full hover:bg-teal-700 transition-colors flex items-center gap-2 font-inter"
                        >
                            Next
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}