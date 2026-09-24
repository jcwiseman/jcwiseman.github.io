import { useState, useEffect } from 'react';

// --- TIMELINE DATA ---
const logEntries = [
    {
        id: 1,
        date: "Sep 2026",
        title: "Wiseguy AI Project",
        category: "Projects",
        content: "Began production on personal AI project Wiseguy. Details to come."
    },
    {
        id: 2,
        date: "Sep 2026",
        title: "Pac-Man Maze Analysis",
        category: "Projects",
        content: "Created a Pac-Man Maze Analysis AI with a team for CS423: Artificial Intelligence."
    },
    {
        id: 3,
        date: "Aug 2026",
        title: "Senior Design Project",
        category: "Projects",
        content: "Began Senior Design Project focused on Tokenized Liquidity. Details to come."
    },
    {
        id: 4,
        date: "May 2026",
        title: "Dean's List Honors",
        category: "Awards",
        content: "Named to the Dean's List for the Spring 2026 academic term at UTK."
    },
    {
        id: 5,
        date: "Apr 2026",
        title: "House Pricing Predictor",
        category: "Projects",
        content: "Created a House Pricing Predictor with a team for CS325: Machine Learning."
    },
    {
        id: 6,
        date: "Oct 2025",
        title: "Medical Image Viewer",
        category: "Projects",
        content: "Created MIV with a team for CS340: Software Engineering."
    },
    {
        id: 7,
        date: "May 2025",
        title: "Dean's List Honors",
        category: "Awards",
        content: "Named to the Dean's List for the Spring 2025 academic term at UTK."
    },
    {
        id: 8,
        date: "Apr 2025",
        title: "Wallflower",
        category: "Projects",
        content: "Created Wallflower with a team for CS302: Data Structures & Algorithms II."
    },
    {
        id: 9,
        date: "Nov 2024",
        title: "Tetrix",
        category: "Projects",
        content: "Created Tetrix with a team for CS202: Data Structures & Algorithms."
    },
    {
        id: 10,
        date: "Aug 2023",
        title: "University of Tennessee",
        category: "Academic",
        content: "Began my Computer Science education at the University of Tennessee - Knoxville."
    },
    {
        id: 11,
        date: "Jul 2023",
        title: "UTK Scholarships",
        category: "Awards",
        content: "Admitted to UTK and provided with the Volunteer Scholarship, the John & Manora Viles Scholarship, and the Hope Scholarship with Merit Supplement."
    },
    {
        id: 12,
        date: "May 2023",
        title: "High School Graduation",
        category: "Academic",
        content: "Graduated Anderson County HS with honors, distinction, and Summa Cum Laude."
    }
];

export default function Updates() {
    const [activeFilter, setActiveFilter] = useState('All');
    const filters = ['All', 'Academic', 'Awards', 'Projects'];

    const filteredEntries = activeFilter === 'All'
        ? logEntries
        : logEntries.filter(entry => entry.category === activeFilter);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://elfsightcdn.com/platform.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-0">

            {/* items-stretch ensures both columns mirror each other's overall height */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

                {/* LEFT COLUMN: Activity Log */}
                <div className="flex flex-col gap-8">

                    {/* Header & Filters Stacked */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold tracking-tight text-white leading-none">
                            Activity <span className="text-red-600">Log</span>
                        </h1>

                        <div className="flex flex-wrap gap-2">
                            {filters.map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${activeFilter === filter
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-600/20 ring-1 ring-red-500/50'
                                            : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-white border border-neutral-800'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Timeline Feed */}
                    <div className="flex flex-col">
                        {filteredEntries.length === 0 ? (
                            <p className="text-neutral-500 italic py-8">No updates in this category yet.</p>
                        ) : (
                            filteredEntries.map((entry, index) => {
                                const isLatest = index === 0;

                                return (
                                    <div key={entry.id} className="flex gap-4 md:gap-6">
                                        <div className="hidden sm:block w-20 shrink-0 text-right pt-2">
                                            <span className={`text-xs font-bold ${isLatest ? 'text-red-500' : 'text-neutral-500'}`}>
                                                {entry.date}
                                            </span>
                                        </div>

                                        <div className="relative flex flex-col items-center">
                                            <div className={`w-px h-full ${index === filteredEntries.length - 1
                                                    ? 'bg-gradient-to-b from-neutral-800 to-transparent'
                                                    : 'bg-neutral-800'
                                                }`}></div>
                                            <div className={`absolute rounded-full ring-4 ring-black ${isLatest
                                                    ? 'top-1.5 w-3.5 h-3.5 bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.6)]'
                                                    : 'top-2 w-2.5 h-2.5 bg-neutral-700'
                                                }`}></div>
                                        </div>

                                        <div className={`flex-1 pb-10 ${isLatest ? '-mt-2' : ''}`}>
                                            <div className="sm:hidden mb-1 pl-2">
                                                <span className={`text-xs font-bold ${isLatest ? 'text-red-500' : 'text-neutral-500'}`}>
                                                    {entry.date}
                                                </span>
                                            </div>

                                            <div className={isLatest ? "bg-neutral-900/60 border border-red-900/30 p-5 rounded-2xl shadow-lg" : "pt-0.5 pl-2"}>
                                                <div className="flex items-center gap-3 mb-2">
                                                    <h2 className={`font-bold text-white ${isLatest ? 'text-xl' : 'text-lg'}`}>
                                                        {entry.title}
                                                    </h2>
                                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 uppercase tracking-wider">
                                                        {entry.category}
                                                    </span>
                                                </div>
                                                <p className={`text-neutral-400 ${isLatest ? 'text-sm leading-relaxed' : 'text-sm leading-relaxed'}`}>
                                                    {entry.content}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>

                {/* RIGHT COLUMN: Live LinkedIn Feed */}
                <div className="flex flex-col gap-8 h-full">

                    {/* Header & Invisible Spacer Stacked */}
                    <div className="flex flex-col gap-3">
                        <h1 className="text-3xl font-bold tracking-tight text-white leading-none">
                            LinkedIn <span className="text-red-600">Feed</span>
                        </h1>

                        {/* This invisible button perfectly matches the height of the filters row */}
                        <div className="hidden lg:block">
                            <button className="px-3 py-1.5 text-xs opacity-0 pointer-events-none" aria-hidden="true">
                                Spacer
                            </button>
                        </div>
                    </div>

                    {/* flex-1 stretches this white box to the exact bottom of the grid */}
                    <div className="bg-white rounded-2xl overflow-hidden flex-1 min-h-[500px]">
                        <div className="elfsight-app-dd9e0fee-172b-456e-8407-efbabcd29f14 w-full h-full" data-elfsight-app-lazy></div>
                    </div>

                </div>
            </div>
        </div>
    );
}