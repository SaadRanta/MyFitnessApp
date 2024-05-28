import { useState, ChangeEvent, KeyboardEvent } from "react";
import { Food } from "./types";
import "./AutoCompleteText.css";

interface Props {
  items: Food[];
  onSelect: (shortDesc: string) => void;
}

const AutoCompleteText = ({ items, onSelect }: Props) => {
  const [text, setText] = useState("");
  const [suggestions, setSuggestions] = useState<Food[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onTextChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    let filteredSuggestions: Food[] = [];

    if (value.length > 0) {
      const regex = new RegExp(`${value}`, "i");
      filteredSuggestions = items.filter((item) => regex.test(item.Shrt_Desc));
    }

    setText(value);
    setSuggestions(filteredSuggestions);
    setSelectedIndex(0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown" && selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === "ArrowUp" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === "Escape") {
      setSuggestions([]);
      setText("");
      setSelectedIndex(0);
    } else if (e.key === "Enter" && suggestions.length > 0) {
      suggestionSelected(suggestions[selectedIndex]);
    }
  };

  const suggestionSelected = (value: Food) => {
    setText(value.Shrt_Desc);
    setSuggestions([]);
    onSelect(value.Shrt_Desc); // Send the selected value to the parent component
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <ul>
        {suggestions.map((item, index) => (
          <li
            key={index}
            onClick={() => suggestionSelected(item)}
            className={index === selectedIndex ? "selected" : ""}
          >
            {item.Shrt_Desc}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="AutoCompleteText">
      <input
	  className="border-2 border-black rounded-xl p-1 w-full"
        value={text}
        onChange={onTextChanged}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Search for food..."
      />
      {renderSuggestions()}
    </div>
  );
};

export default AutoCompleteText;
