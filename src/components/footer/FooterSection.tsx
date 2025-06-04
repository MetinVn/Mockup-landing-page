import React from "react";

interface FooterSectionProps {
  header: string;
  items: string[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ header, items }) => (
  <div>
    <h2 className="font-medium text-lg mb-2">{header}</h2>
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx}>
          <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </div>
);
