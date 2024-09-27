document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('task-input').value;
    const taskDate = document.getElementById('task-date').value;

    // Vérification si les champs sont vides
    if (taskInput === "" || taskDate === "") {
        alert('Veuillez entrer une tâche et une date.');
        return;
    }

    // Création de l'objet tâche avec la tâche et la date
    const task = {
        name: taskInput,
        date: taskDate
    };

    // Récupération des tâches depuis le localStorage
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Ajout de la nouvelle tâche
    tasks.push(task);

    // Enregistrement dans le localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));

    // Alerte de confirmation
    alert('Tâche enregistrée avec succès !');

    // Vider les champs de saisie
    document.getElementById('task-input').value = '';
    document.getElementById('task-date').value = '';
});
