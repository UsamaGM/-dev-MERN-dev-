import { Button } from "flowbite-react";

function CreateButtons() {
    return (
        <>
            <div className="p-5 p min-w-full justify-between bg-slate-100 pb-10">
                <div className="bg-amber-50 p-5 my-5 mx-5 rounded-2xl min-w-3xl overflow-hidden shadow-2xl flex flex-row justify-around items-center ">
                        <Button className="cursor-pointer h-12 w-45 bg-gradient-to-br from-sky-500 to-blue-800 text-white hover:bg-gradient-to-bl focus:ring-blue-300 ">
                            Create Course
                        </Button>
                        <Button className="cursor-pointer h-12 w-45 bg-gradient-to-br from-sky-500 to-blue-800 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                            Create Presentation
                        </Button>
                        <Button className="cursor-pointer h-12 w-45 bg-gradient-to-br from-sky-500 to-blue-800 text-white hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800">
                            Create Quiz
                        </Button>
                    </div>
            </div>
        </>
    );
}
export default CreateButtons;
