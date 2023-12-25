export default function Header({ onSearch }) {
  return (
    <div className="header bg-blue-300 text-center p-5">
      <div className="flex flex-col h-full justify-between pb-3">
        <div className="relative text-sm font-bold text-white">
          <div className="absolute left-0 top-[-3px] bg-gray-200 h-7 w-7 rounded-full flex justify-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="img"
                width="14px"
                height="14px"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#878787"
                  d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"
                ></path>
              </svg>
            </button>
          </div>
          Supasit Wongtanatip
        </div>
        <div className="font-light text-xs text-white">Bangkok, Thailand</div>
        <input
          type="text"
          placeholder="Search"
          onChange={onSearch}
          className="text-xs w-full focus:outline-none p-2 rounded-md pl-3"
        />
      </div>
    </div>
  );
}
