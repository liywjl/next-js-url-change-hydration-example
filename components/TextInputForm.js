const TextInputForm = ({ text, setText, title }) => (
  <>
    {text ? (
      <h2>{title}</h2>
    ) : (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setText(e.target.text.value);
        }}
      >
        <input name="text" placeholder="First Name" />
        <button type="submit">Submit</button>
      </form>
    )}
  </>
);

export default TextInputForm;
