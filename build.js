function addExercise() {
    var exercise = document.getElementById('exercise').value;
    var sets = document.getElementById('sets').value;
    var reps = document.getElementById('reps').value;
    var duration = document.getElementById('duration').value;

    var listItem = document.createElement('li');
    listItem.textContent = exercise + ' - ' + sets + ' sets x ' + reps + ' reps (' + duration + ' min)';

    var exerciseList = document.getElementById('exerciseList');
    exerciseList.appendChild(listItem);

    updateTotalDuration(parseInt(duration));
    clearForm();
}

function updateTotalDuration(duration) {
    var totalDurationElement = document.getElementById('totalDuration');
    var currentTotalDuration = parseInt(totalDurationElement.textContent);
    totalDurationElement.textContent = currentTotalDuration + duration;
}

function clearForm() {
    document.getElementById('exercise').value = '';
    document.getElementById('sets').value = '';
    document.getElementById('reps').value = '';
    document.getElementById('duration').value = '';
}