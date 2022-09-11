const Actions = ({setOpenOptions}) => {
  return (
    <div className="absolute z-20 h-screen w-full"
    onClick={() => setOpenOptions(false)}
    >
      <div
        className="absolute z-30 right-16 top-56 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Settings
            </a>
          </li>
        </ul>
      </div>
      </div>
  );
};
 export default Actions;