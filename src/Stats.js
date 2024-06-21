

export default function Stats({ items }) {
    if (!items.length)
      return (
        <footer className="stats">
          <p> Start adding some items to yout packing list </p>
        </footer>
      );
  
    const countItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const percentPacked = Math.round((numPacked * 100) / countItems);
  
    return (
      <footer className="stats">
        <em>
          {" "}
          {percentPacked === 100
            ? "You got everithing! Ready to go 🚀"
            : `You have ${countItems} items on your list, and you already packed ${numPacked} (${percentPacked}%)`}{" "}
        </em>
      </footer>
    );
  }