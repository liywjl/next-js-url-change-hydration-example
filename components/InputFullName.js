const InputFullName = ({ fullName, setFullName }) => (
  <>
    {fullName ? (
      <h1>Welcome {fullName}</h1>
    ) : (
      <form
        onSubmit={(e) => {
          e.preventDefault();

          setFullName(e.target.fullName.value);
        }}
      >
        <div>Full name</div>
        <input name="fullName" placeholder="First Name" />
        <button type="submit">Submit</button>
      </form>
    )}
  </>
);

export default InputFullName;
