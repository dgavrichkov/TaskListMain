type TextFieldType = {
  title: string;
  tag?: "input" | "textarea";
};

export const TextField = ({ title, tag = "input" }: TextFieldType) => {
  return (
    <div className="text-field">
      <b className="text-field__title">{title}</b>
      {tag === "input" ? <input type="text" /> : <textarea></textarea>}
      <i className="text-field__message">message</i>
    </div>
  );
};
