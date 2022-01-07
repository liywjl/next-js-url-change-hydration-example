const StepOne = ({ value, onChange }) => {
    return (
    <div>
        <div>First name</div>
        <input name="firstName" placeholder="First Name" onChange={onChange} value={value} />

    </div>
    )
};

export default StepOne