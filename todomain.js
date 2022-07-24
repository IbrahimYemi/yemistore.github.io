window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		if (input.value==''){
			alert("please fill the field")
		}else{
		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');
		task_el.classList.add('display');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('words');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'EDIT';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'DELETE';

		task_content_el.appendChild(task_edit_el);
		task_content_el.appendChild(task_delete_el);
		
		task_el.appendChild(task_content_el);
		
		list_el.appendChild(task_el);
		
		input.value = '';
		
		task_edit_el.addEventListener('click', (e) => {
		if (task_edit_el.innerText.toLowerCase() == "edit") {
		task_edit_el.innerText = "SAVE";
		task_input_el.removeAttribute("readonly");
		task_input_el.focus();
		} else {
		task_edit_el.innerText = "EDIT";
		task_input_el.setAttribute("readonly", "readonly");
		}
		});
		
		task_delete_el.addEventListener('click', (e) => {
		list_el.removeChild(task_el);
		});
	};
	});
});