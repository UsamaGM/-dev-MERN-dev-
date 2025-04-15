import ProgressBar from "./ProgressBar"

function RightSideBar() {
    return (
        <>
            <div className="bg-slate-100 flex flex-col w-55 py-6 text-sky-700 line text-lg/6 h-[517px] border-l-1">
                <ProgressBar />
                <div className="">
                    <p className="text-3xl font-medium mb-5 mt-2 py- px-6">Upcoming Activities
                    </p>
                    <ul className="space-y-2 max-h-[120px] overflow-y-auto mb-4">
                        <li className="flex justify-between items-center px-4 py-2 mx-2 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                            <a
                                href="https://your-link.com"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OOP-Presentation
                            </a>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.pdf"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz2-OOP
                            </a>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}
export default RightSideBar