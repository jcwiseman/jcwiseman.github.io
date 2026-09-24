import { useState } from 'react';

const portfolioProjects = [
    {
        id: 1,
        title: "Wiseguy AI",
        tags: ["Python", "AI", "Machine Learning"],
        description: "A personal artificial intelligence project currently in active development. The plan is for Wiseguy to become a comprehensive assistant capable of a wide range of tasks, from generating simple 3D models for printing to controlling the lights in my home.",
        image: "/Wiseguy.png"
    },
    {
        id: 2,
        title: "Pac-Man Search AI",
        tags: ["Python", "Algorithms", "AI"],
        description: "An artificial intelligence agent built in Python that navigates complex Pac-Man maze configurations. Implemented depth-first search, breadth-first search, and A* search algorithms, utilizing custom admissible heuristics to optimize pathfinding node expansions and efficiently clear dot patterns.",
        image: "/Pacman.png"
    },
    {
        id: 3,
        title: "House Pricing Predictor",
        tags: ["Python", "Machine Learning", "Scikit-Learn"],
        description: "A machine learning model developed to accurately forecast real estate pricing based on multidimensional feature sets. Built using standard Python data science libraries to clean, process, and analyze housing data sets.",
        image: "/HousePricing.png"
    },
    {
        id: 4,
        title: "Medical Image Viewer (MIV)",
        tags: ["C++", "OpenCV", "Qt", "DCMTK"],
        description: "A medical image viewing desktop application engineered with C++, DCMTK, OpenCV, and Qt. Designed to parse and display DICOM medical MRI scans, featuring a custom implementation of the marching cubes algorithm for interactive 3D volume rendering.",
        image: "/MIV.jpg"
    }
];

export default function Projects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const nextSlide = () => {
        setIsExpanded(false);
        setCurrentIndex((prev) => (prev === portfolioProjects.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIsExpanded(false);
        setCurrentIndex((prev) => (prev === 0 ? portfolioProjects.length - 1 : prev - 1));
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-8 h-[85vh] px-4 md:px-0">
            <h1 className="text-3xl font-bold tracking-tight text-white mt-4 md:mt-0">
                Featured <span className="text-red-600">Projects</span>
            </h1>

            <div className="relative flex-1 flex items-center justify-center overflow-hidden w-full">
                {portfolioProjects.map((project, index) => {
                    const isPrev = index === (currentIndex === 0 ? portfolioProjects.length - 1 : currentIndex - 1);
                    const isNext = index === (currentIndex === portfolioProjects.length - 1 ? 0 : currentIndex + 1);
                    const isActive = index === currentIndex;

                    let positionClasses = "opacity-0 scale-50 z-0 translate-x-0 blur-md pointer-events-none";

                    if (isActive) {
                        positionClasses = "opacity-100 scale-100 z-30 translate-x-0 blur-0 shadow-2xl shadow-red-900/40";
                    } else if (isPrev) {
                        positionClasses = "opacity-40 scale-75 z-20 -translate-x-[45%] md:-translate-x-[60%] blur-[3px] cursor-pointer hover:opacity-60";
                    } else if (isNext) {
                        positionClasses = "opacity-40 scale-75 z-20 translate-x-[45%] md:translate-x-[60%] blur-[3px] cursor-pointer hover:opacity-60";
                    }

                    return (
                        <div
                            key={project.id}
                            onClick={() => {
                                if (isPrev) prevSlide();
                                if (isNext) nextSlide();
                            }}
                            className={`absolute w-full max-w-sm md:max-w-2xl transition-all duration-700 ease-out ${positionClasses}`}
                        >
                            <div className="bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex flex-col aspect-square md:aspect-video relative">

                                <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent"></div>
                                </div>

                                <div className={`absolute bottom-0 w-full bg-neutral-950 border-t border-neutral-800 transition-all duration-500 z-10 flex flex-col ${isExpanded && isActive ? 'h-full p-8' : 'h-[50%] p-6 md:p-8 justify-end'}`}>

                                    <h2 className="text-xl md:text-2xl font-bold text-white mb-1 shrink-0">{project.title}</h2>

                                    {/* Tech Stack Badges */}
                                    <div className="flex flex-wrap gap-1.5 mb-2 shrink-0">
                                        {project.tags.map((tag, tIndex) => (
                                            <span key={tIndex} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-red-950/60 border border-red-900/50 text-red-400">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className={`text-sm md:text-base text-neutral-400 mb-3 ${isExpanded && isActive ? 'overflow-y-auto pr-2' : 'line-clamp-2'}`}>
                                        {project.description}
                                    </div>

                                    {isActive && (
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsExpanded(!isExpanded);
                                            }}
                                            className="text-red-500 font-medium text-sm hover:text-red-400 self-start mt-auto"
                                        >
                                            {isExpanded ? 'Show Less' : 'Read More...'}
                                        </button>
                                    )}
                                </div>

                            </div>
                        </div>
                    );
                })}

                <button onClick={prevSlide} className="absolute left-0 md:left-8 z-40 p-3 bg-black/60 text-white rounded-full hover:bg-red-600 transition-colors border border-neutral-700 backdrop-blur-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={nextSlide} className="absolute right-0 md:right-8 z-40 p-3 bg-black/60 text-white rounded-full hover:bg-red-600 transition-colors border border-neutral-700 backdrop-blur-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>

            <div className="flex justify-center gap-3 pb-8">
                {portfolioProjects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setIsExpanded(false);
                            setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-all duration-500 ${index === currentIndex ? 'bg-red-600 w-8' : 'bg-neutral-600 w-2 hover:bg-neutral-400'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}