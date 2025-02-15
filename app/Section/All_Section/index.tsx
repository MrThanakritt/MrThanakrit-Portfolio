import LeftSection from "../Left_Section"
import RightSection from "../Right_Section"

const AllSection = () => {
    return (
        <>
            <div>
                <div className="mt-14 mx-auto max-w-6xl grid gap-y-5 lg:grid-cols-[40%_60%] ">
                    <LeftSection />
                    <RightSection />
                </div>
            </div>
        </>
    )
}

export default AllSection;