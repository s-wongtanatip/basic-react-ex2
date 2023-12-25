export default function UserCard({ first_name, last_name, email, avatar }) {
    return (
        <div className="py-3 border-b border-gray-200 grid grid-cols-[80px_auto_1fr] gap-3 items-center">
            <img src={avatar} className="rounded-full"/>
            <div className="flex flex-col">
                <div className="text-neutral-700 text-xs font-semibold">{first_name + ' ' + last_name}</div>
                <div className="text-neutral-400 text-xs font-light">{email}</div>
            </div>
            <div className="justify-self-end">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#c3c3c3" d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586L9.414 16H5V4h14v12z"></path><path fill="#c3c3c3" d="M7 7h10v2H7zm0 4h7v2H7z"></path></svg>
            </div>
        </div>
    )
}