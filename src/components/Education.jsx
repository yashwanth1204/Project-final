function Skills() {
    const skills = [
        "C", "C++", "Java", "Python",
        "ReactJS", "Tailwind CSS", "JavaScript",
        "Responsive Design", "Git & GitHub"
    ];

    return (
        <section className="p-10 bg-gray-900 text-white text-center">
            <h2 className="text-4xl font-bold mb-6 text-cyan-400">Technical Skills</h2>
            <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto">
                {skills.map((skill) => (
                    <div
                        key={skill}
                        className="backdrop-blur-lg bg-white/20 border border-white/30 rounded-full 
                        w-40 h-40 mx-auto flex items-center justify-center 
                        shadow-xl hover:scale-105 hover:shadow-[0_0_20px_#22d3ee] transition 
                        text-white font-semibold text-lg"
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;
