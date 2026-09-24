import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import headshot from '../assets/headshot.jpg';

const testimonials = [
    {
        id: 1,
        quote: "Placeholder quote for the first testimonial.",
        author: "Bradley Self",
        role: "President & CEO, Interstate Mechanical Contractors"
    },
    {
        id: 2,
        quote: "Placeholder quote for the second testimonial.",
        author: "Thomas Moriarty",
        role: "VDC Director, Interstate Mechanical Contractors"
    },
    {
        id: 3,
        quote: "Placeholder quote for the third testimonial.",
        author: "Elias",
        role: "Teammate, Medical Image Viewer"
    }
];

export default function Home() {
    const [currentQuote, setCurrentQuote] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex flex-col gap-24 mt-12 lg:mt-16">

            <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="flex-1 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                        Hi, I'm <span className="text-red-600">Justin Wiseman</span>.
                    </h1>

                    <h2 className="text-xl md:text-2xl text-neutral-300 font-medium">
                        Software & AI Developer
                    </h2>

                    <p className="text-neutral-400 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                        I am a current Computer Science student at the University of Tennessee - Knoxville with a minor in Machine Learning and an expected graduation date of May 2027. I specialize in languages such as Python, C++, Javascript, among others. I also have experience in Machine Learning, Neural Networks, Web Development, and Data Analysis.
                    </p>

                    <div className="pt-4">
                        <Link
                            to="/resume"
                            className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-500 transition-all shadow-lg shadow-red-600/20 ring-1 ring-red-500/50"
                        >
                            View Resume
                        </Link>
                    </div>
                </div>

                <div className="flex-shrink-0">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-red-600/20 blur-2xl rounded-full z-0"></div>
                        <img
                            src={headshot}
                            alt="Justin Wiseman"
                            className="relative z-10 w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl ring-4 ring-neutral-900"
                        />
                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto w-full text-center pb-12">
                <h3 className="text-sm font-bold tracking-widest text-red-500 uppercase mb-8">
                    What People Say
                </h3>

                <div className="relative h-40 flex items-center justify-center">
                    {testimonials.map((testimony, index) => (
                        <div
                            key={testimony.id}
                            className={`absolute w-full transition-all duration-700 ease-in-out ${index === currentQuote
                                ? 'opacity-100 translate-y-0 z-10'
                                : 'opacity-0 translate-y-4 pointer-events-none -z-10'
                                }`}
                        >
                            <svg className="w-10 h-10 mx-auto text-neutral-800 mb-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                            </svg>
                            <p className="text-xl md:text-2xl text-neutral-300 font-medium italic mb-6 px-4">
                                "{testimony.quote}"
                            </p>
                            <div>
                                <p className="text-white font-bold">{testimony.author}</p>
                                <p className="text-neutral-500 text-sm">{testimony.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentQuote(index)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${index === currentQuote ? 'bg-red-600 w-6' : 'bg-neutral-800 w-2 hover:bg-neutral-600'
                                }`}
                        />
                    ))}
                </div>
            </section>

        </div>
    );
}