const TrueOrFalseInteractionStudio = () => {
  return (
    <div className="flex flex-col gap-3">
      <span>answer</span>
      <div className="flex gap-5">
        <div className="flex gap-2">
          <input type="radio" id="true" name="answer" value="true" />
          <label htmlFor="true">true</label>
        </div>
        <div className="flex gap-2">
          <input type="radio" id="false" name="answer" value="false" />
          <label htmlFor="false">false</label>
        </div>
      </div>
    </div>
  );
};
export default TrueOrFalseInteractionStudio;
