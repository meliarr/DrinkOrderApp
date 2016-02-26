function updateStatus(newStatus) {
	var attendeeForm = document.getElementById("attendeeForm");
	var selectedAttendeeValue = attendeeForm.elements["attendees"].value;
	var selectedAttendeeElement = document.getElementById(selectedAttendeeValue);
	selectedAttendeeElement.className = newStatus;
}