import SideBar from "./Sidebar"

function Presentation() {
    return (
        <>
            <div className='flex h-screen'>
                <div>
                    <SideBar />
                </div>
                <div className={`mt-10 overflow-y-auto w-full pl-6`}>
                    <p className="text-3xl font-medium mb-5 mt-2 py- px-6">My Presentations
                    </p>
                    <ul className="space-y-2 max-h-md overflow-y-auto mb-4">
                        <li className="flex justify-between items-center px-4 py-2 mx-2 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors">
                            <a
                                href="https://your-link.com"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                OOP-Presentation
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.pdf"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz2-OOP
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-colors px-4 py-2 mx-2">
                            <a
                                href="file-path.ppt"
                                className="text-blue-600 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Quiz-DSA
                            </a>
                            <div>5/10</div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Presentation