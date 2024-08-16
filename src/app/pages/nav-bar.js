const NavBar = () => {
    return (
        <div id="navbar" className="flex flex-row gap-1 text-center h-8 border-gray-400 text-gray-100">
            <div className="flex-1 bg-blue-500 hover:bg-blue-800">
                Viewer
            </div>
            <div className="flex-1 bg-blue-500 hover:bg-blue-800">
                Converter
            </div>
        </div>
    )
}
export default NavBar