import Cross from "./Cross";

export default function ButtonContainer({ count }: { count: number }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        style={{
          order: i,
          flexGrow: 1,
          padding: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
        }}
      >
        <Cross />
      </button>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        width: "100%",
        height: "100%",
      }}
    >
      {buttons}
    </div>
  );
}
