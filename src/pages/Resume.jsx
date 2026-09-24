export default function Resume() {
    return (
        <div className="max-w-4xl mx-auto flex flex-col gap-6 h-[85vh]">

            {/* Header & Download Button */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <h1 className="text-3xl font-bold tracking-tight text-white">
                    My <span className="text-red-600">Resume</span>
                </h1>

                <a
                    href="/resume.pdf"
                    download="Justin_Wiseman_Resume.pdf"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-neutral-900 border border-red-600/50 rounded-lg hover:bg-red-600 transition-all shadow-lg hover:shadow-red-600/20"
                >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                </a>
            </div>

            {/* PDF Embed */}
            <div className="flex-1 w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl">
                <iframe
                    src="/resume.pdf"
                    className="w-full h-full"
                    title="Justin Wiseman Resume"
                />
            </div>

        </div>
    );
}