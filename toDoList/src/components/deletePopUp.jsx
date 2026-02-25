import "./deletePopUp.css";

export default function DeletePopUp({ deleteTask, index, setIsDisplayed }) {
  return (
    <div class="card" id="deletePopUp">
      <h2 id="popupText"> Are you sure you want to delete this task? </h2>
      <div id="popUpButtons">
        <button class="popupButton" onClick={() => deleteTask(index)}>
          Yes
        </button>
        <button class="popupButton" onClick={() => setIsDisplayed(false)}>
          No
        </button>
      </div>
    </div>
  );
}
