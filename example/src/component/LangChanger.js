import React from "react";

const locale = ['en_US', 'ko_KR'];

const LanguageItem = ({ color, title, onClick }) =>
  (
    <div
      style={{ color: color }}
      onClick={onClick}
    >
      {title}
    </div>
  );


const LangChanger = ({ selected, onSelect }) =>
  (
    <div className="Palette">
      <div className="colors">
        {locale.map(item => (
          <LanguageItem
            color={selected === item ? 'blue' : 'black'}
            title={item}
            key={item}
            onClick={() => onSelect(item)}
          />
        ))}
      </div>
    </div>
  );

export default LangChanger;
