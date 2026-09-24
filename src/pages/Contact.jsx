export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto flex flex-col gap-10 mt-4">

            {/* Header & Blurb */}
            <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                    Contact <span className="text-red-600">Me</span>
                </h1>

                <p className="text-neutral-300 text-lg leading-relaxed bg-neutral-900/50 p-5 border border-red-900/30 rounded-xl shadow-lg">
                    To view my <span className="font-semibold text-white">GitHub</span> projects, connect on <span className="font-semibold text-white">LinkedIn</span>, or reach out via <span className="font-semibold text-white">Discord</span>, please use the social icons in the top right of the navigation bar. For direct inquiries, feel free to use any of the methods below.
                </p>
            </div>

            {/* Contact Methods */}
            <div className="flex flex-col gap-4">

                {/* Phone */}
                <div className="flex items-center gap-6 p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-red-900/50 hover:bg-neutral-900 transition-all group">
                    <div className="p-4 bg-neutral-900 rounded-full text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-neutral-500 mb-1">Phone</p>
                        <a href="tel:8653336671" className="text-xl font-medium text-white hover:text-red-400 transition-colors">
                            (865)-333-6671
                        </a>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-6 p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-red-900/50 hover:bg-neutral-900 transition-all group">
                    <div className="p-4 bg-neutral-900 rounded-full text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-neutral-500 mb-1">Email</p>
                        <a href="mailto:justincwiseman05@gmail.com" className="text-xl md:text-2xl font-medium text-white hover:text-red-400 transition-colors break-all">
                            justincwiseman05@gmail.com
                        </a>
                    </div>
                </div>

                {/* Physical Address */}
                <div className="flex items-center gap-6 p-6 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-red-900/50 hover:bg-neutral-900 transition-all group">
                    <div className="p-4 bg-neutral-900 rounded-full text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all shadow-md">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <div>
                        <p className="text-sm font-semibold text-neutral-500 mb-1">Mailing Address</p>
                        <p className="text-xl font-medium text-white">
                            PO Box 284, Rocky Top, Tennessee
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}