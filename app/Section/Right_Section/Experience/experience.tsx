const Experience = () => {

    return (
        <div>
            {/* Title */}
            <h2 className="text-2xl font-bold py-1">Experience</h2>




            <div className="space-y-6">
                {/* Experience Section */}
                {[
                    {
                        date: "April 2024",
                        img: "/intern.jpg",
                        title: "ฝึกงาน คลินิกเสริมความงาม ซีคอนบางแค",
                        description:
                            "หน้าที่ที่ได้รับมอบหมาย \nดูแลและตรวจเช็คคอมพิวเตอร์ภายในคลินิก \nทำบัญชีรายรับ-รายจ่ายของทางคลินิก",
                        techs: [
                            { name: "Excel", color: "text-green-400 group-hover:border-green-400" },
                            { name: "IT Support", color: "text-blue-500 group-hover:border-blue-500" },
                        ],
                    },
                    {
                        date: "SIT 2024",
                        img: "/op-sf.jpg",
                        title: "เข้าร่วมกิจกรรม Open House\nมหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี คณะ SIT",
                        description: "เข้าร่วมกิจกรรม Workshop Software Developer101",
                        techs: [
                            { name: "KMUTT", color: "text-orange-600 group-hover:border-orange-600" },
                            { name: "SIT Openhouse", color: "text-yellow-300 group-hover:border-blue-500" },
                        ],
                    },
                ].map((exp, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-[auto_1fr] gap-6 items-start px-5 py-6 rounded-lg transition duration-300 hover:bg-gray-700 group"
                    >
                        {/* Left Section */}
                        <div className="flex flex-col items-center min-w-[10rem]">
                            <div className="text-lg font-semibold text-gray-400 transition duration-300 group-hover:text-white">
                                {exp.date}
                            </div>
                            <img src={exp.img} className="w-full max-w-[10rem] h-24 rounded-md object-cover" alt="Experience" />
                        </div>

                        {/* Right Section */}
                        <div className="flex-grow space-y-3">
                            <h3 className="text-lg font-semibold text-gray-400 transition duration-300 group-hover:text-white whitespace-pre-line">
                                {exp.title}
                            </h3>
                            <p className="text-base text-gray-400 transition duration-300 group-hover:text-gray-200 whitespace-pre-line">
                                {exp.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-3 text-sm font-medium">
                                {exp.techs.map((tech, i) => (
                                    <span
                                        key={i}
                                        className={`px-2 py-1 text-gray-400 border border-gray-400 rounded transition duration-300 group-hover:${tech.color}`}
                                    >
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>



        </div>

    );
};

export default Experience;
