import List from "./list";
import "./board.css";

const Info = [
  {
    img: "https://i.pinimg.com/736x/f4/70/86/f47086d17c2fcaeb24920e92db136ceb.jpg",
    name: "Shashwat",
    Birthday: "2000-08-16",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JnxPtIQ0NnOlYmhJc5Q61rmpHlESBqx96w&s",
    name: "Chhaya",
    Birthday: "2002-08-18",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JnxPtIQ0NnOlYmhJc5Q61rmpHlESBqx96w&s",
    name: "snaya",
    Birthday: "2002-12-31",
  },
];

export default function Board() {
  return (
    <main id="site-main">
      <h1 className="text-dark title">Birthday Reminder</h1>
      <div className="board">
        <List info={Today(Info)} />
        <h2 className="upcoming text-dark">Upcoming</h2>
        <List info={Upcoming(Info)} />
      </div>
    </main>
  );
}

function Today(person) {
  const today = new Date();
  const currentDay = today.getDate();
  const currentMonth = today.getMonth();

  return person.filter((data) => {
    const birthday = new Date(data.Birthday);
    return (
      birthday.getDate() === currentDay && birthday.getMonth() === currentMonth
    );
  });
}

function Upcoming(person) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  return person.filter((data) => {
    const birthday = new Date(data.Birthday);
    const month = birthday.getMonth();
    const day = birthday.getDate();

    const diff = (month - currentMonth + 12) % 12;

    return (diff > 0 && diff <= 2) || (diff === 0 && day > currentDay);
  });
}
