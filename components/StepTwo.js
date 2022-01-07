const StepTwo = ({ value, onChange }) => {
    return (
    <div>
        <div>Last name</div>
        <input name="lastName" placeholder="Last Name" onChange={onChange} value={value} />

    </div>
    )
};

export default StepTwo