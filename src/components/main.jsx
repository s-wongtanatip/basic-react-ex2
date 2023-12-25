import UserCard from "./userCard";

export default function Main({ userData, textSearch }){
    return (
        <div className="main">
        <div className="relative top-[-20px] h-full mx-5 px-5 bg-white rounded-lg overflow-scroll drop-shadow-md">
          <ul>
            {userData
              .filter((person) => {
                return (
                  person.first_name.toLowerCase().includes(textSearch.toLowerCase()) ||
                  person.last_name.toLowerCase().includes(textSearch.toLowerCase())
                );
              })
              .map((person) => {
                return (
                  <li key={person.id}>
                    <UserCard {...person} />
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    )
}