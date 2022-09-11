function Header () {
    return (
      <div className="h-auto w-full sticky top-0 p-4 bg-gray-50 z-10 items-center">
        <nav className="flex dark:bg-gray-700 justify-end rounded">
          <div className="py-3 px-4 max-w-screen-xl md:px-6">
            <div className="flex items-center">
              <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium ">
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    UTPL
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Perfil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-900 dark:text-white hover:underline"
                  >
                    Bruno Esparza
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}
export default Header;