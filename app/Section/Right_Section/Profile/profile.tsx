
const Profile = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center space-y-3">
                <div className="w-44 h-44 flex justify-center items-center mb-4">
                    <img
                        src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover rounded-full ring-4 ring-white ring-opacity-60 shadow-lg transition-all duration-300 ease-in-out hover:ring-8 hover:ring-pink-500 hover:scale-110 hover:shadow-2xl"
                    />
                </div>

                <div className="text-center">
                    <div className="text-lg ">นาย ธนกฤต เจริญชินภัทร</div>
                </div>
                <div className="text-center">
                    <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi nobis dolores quibusdam ad obcaecati praesentium.</div>
                </div>
            </div>
        </div>

    )
}

export default Profile;