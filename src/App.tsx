import { NoteCard } from "./modules";

const App = () => {
  return (
    <div
      style={{
        height: 500,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 15,
        margin: 50,
      }}
    >
      <NoteCard
        date="Yesterday"
        time="12:23"
        author="Javad Zaeri"
        title="USB is broken"
        tag={{ variant: "info", text: "IT" }}
        description="This device needs repair for it’s USB sockets"
      />
    </div>
  );
};

export default App;
