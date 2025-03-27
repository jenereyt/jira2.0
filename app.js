let tasks = [
    {
        id: 1,
        dateSet: "2025-03-25",
        project: "Afrosiyob paranda",
        theme: "Разработка UI",
        description: "Создать интерфейс главной страницы",
        completed: true,
        executors: ["Иван Иванов", "Пётр Сидоров"],
        dateCompleted: "2025-03-26",
        accepted: "Да",
        files: [{ name: "project_alpha_ui_mockup.pdf", url: "https://example.com/files/project_alpha_ui_mockup.pdf" }]
    },
    { id: 2, dateSet: "2025-03-24", project: "Заказчик Beta", theme: "Исправление багов", description: "Пофиксить ошибку в авторизации", completed: false, executors: [], dateCompleted: "", accepted: "Нет", files: [{ name: "project_alpha_ui_mockup.pdf", url: "https://example.com/files/project_alpha_ui_mockup.pdf" }, { name: "project_alpha_ui_mockup.pdf", url: "https://example.com/files/project_alpha_ui_mockup.pdf" }] },
    { id: 3, dateSet: "2025-03-20", project: "Проект Gamma", theme: "Тестирование API", description: "Проверить все эндпоинты", completed: false, executors: ["Анна Смирнова"], dateCompleted: "", accepted: "Нет" },
    { id: 4, dateSet: "2025-03-22", project: "Заказчик Delta", theme: "Дизайн логотипа", description: "Разработать новый логотип компании", completed: true, executors: ["Мария Петрова", "Алексей Кузнецов"], dateCompleted: "2025-03-24", accepted: "Да" },
    { id: 5, dateSet: "2025-03-23", project: "Проект Epsilon", theme: "Оптимизация кода", description: "Ускорить загрузку страницы", completed: false, executors: ["Дмитрий Соколов", "Ольга Николаева"], dateCompleted: "", accepted: "Нет" },
    { id: 6, dateSet: "2025-03-26", project: "Проект Zeta", theme: "Аналитика", description: "Собрать данные по пользователям", completed: false, executors: ["Сергей Морозов"], dateCompleted: "", accepted: "Нет" },
    { id: 7, dateSet: "2025-03-27", project: "Заказчик Eta", theme: "Дизайн", description: "Обновить баннеры на сайте", completed: true, executors: ["Екатерина Иванова"], dateCompleted: "2025-03-28", accepted: "Да" },
    { id: 8, dateSet: "2025-03-28", project: "Проект Theta", theme: "Разработка", description: "Добавить фильтр в таблицу", completed: false, executors: ["Андрей Петров"], dateCompleted: "", accepted: "Нет" },
    { id: 9, dateSet: "2025-03-29", project: "Заказчик Iota", theme: "Тестирование", description: "Провести нагрузочное тестирование", completed: false, executors: ["Олег Сидоров"], dateCompleted: "", accepted: "Нет" },
    { id: 10, dateSet: "2025-03-30", project: "Проект Kappa", theme: "Оптимизация", description: "Уменьшить время ответа сервера", completed: true, executors: ["Наталья Козлова"], dateCompleted: "2025-03-31", accepted: "Да" },
    { id: 11, dateSet: "2025-04-01", project: "Проект Lambda", theme: "Интеграция", description: "Подключить API платежной системы", completed: false, executors: ["Владимир Соколов"], dateCompleted: "", accepted: "Нет" },
    { id: 12, dateSet: "2025-04-02", project: "Заказчик Mu", theme: "Дизайн", description: "Создать макет мобильного приложения", completed: true, executors: ["Елена Васильева"], dateCompleted: "2025-04-03", accepted: "Да" },
    { id: 13, dateSet: "2025-04-03", project: "Проект Nu", theme: "Разработка", description: "Реализовать авторизацию через OAuth", completed: false, executors: ["Игорь Николаев"], dateCompleted: "", accepted: "Нет" },
    { id: 14, dateSet: "2025-04-04", project: "Заказчик Xi", theme: "Тестирование", description: "Проверить совместимость с iOS", completed: false, executors: ["Татьяна Морозова"], dateCompleted: "", accepted: "Нет" },
    { id: 15, dateSet: "2025-04-05", project: "Проект Omicron", theme: "Оптимизация", description: "Сжать изображения на сайте", completed: true, executors: ["Павел Кузнецов"], dateCompleted: "2025-04-06", accepted: "Да" },
    { id: 16, dateSet: "2025-04-06", project: "Заказчик Pi", theme: "Аналитика", description: "Настроить Google Analytics", completed: false, executors: ["Юлия Соколова"], dateCompleted: "", accepted: "Нет" },
    { id: 17, dateSet: "2025-04-07", project: "Проект Rho", theme: "Разработка", description: "Добавить форму обратной связи", completed: true, executors: ["Максим Иванов"], dateCompleted: "2025-04-08", accepted: "Да" },
    { id: 18, dateSet: "2025-04-08", project: "Заказчик Sigma", theme: "Дизайн", description: "Обновить цветовую схему", completed: false, executors: ["Алина Петрова"], dateCompleted: "", accepted: "Нет" },
    { id: 19, dateSet: "2025-04-09", project: "Проект Tau", theme: "Тестирование", description: "Проверить кроссбраузерность", completed: false, executors: ["Константин Сидоров"], dateCompleted: "", accepted: "Нет" },
    { id: 20, dateSet: "2025-04-10", project: "Заказчик Upsilon", theme: "Интеграция", description: "Подключить CRM систему", completed: true, executors: ["Оксана Морозова"], dateCompleted: "2025-04-11", accepted: "Да" },
    { id: 21, dateSet: "2025-04-11", project: "Проект Phi", theme: "Разработка", description: "Создать админ-панель", completed: false, executors: ["Артём Кузнецов"], dateCompleted: "", accepted: "Нет" },
    { id: 22, dateSet: "2025-04-12", project: "Заказчик Chi", theme: "Оптимизация", description: "Ускорить загрузку видео", completed: false, executors: ["Евгений Соколов"], dateCompleted: "", accepted: "Нет" },
    { id: 23, dateSet: "2025-04-13", project: "Проект Psi", theme: "Дизайн", description: "Разработать иконки для меню", completed: true, executors: ["Светлана Иванова"], dateCompleted: "2025-04-14", accepted: "Да" },
    { id: 24, dateSet: "2025-04-14", project: "Заказчик Omega", theme: "Тестирование", description: "Проверить работу чата", completed: false, executors: ["Денис Петров"], dateCompleted: "", accepted: "Нет" },
    { id: 25, dateSet: "2025-04-15", project: "Проект Alpha-2", theme: "Разработка", description: "Добавить поиск по сайту", completed: true, executors: ["Иван Иванов"], dateCompleted: "2025-04-16", accepted: "Да" },
    { id: 26, dateSet: "2025-04-16", project: "Заказчик Beta-2", theme: "Аналитика", description: "Проанализировать конверсии", completed: false, executors: ["Анна Смирнова"], dateCompleted: "", accepted: "Нет" },
    { id: 27, dateSet: "2025-04-17", project: "Проект Gamma-2", theme: "Интеграция", description: "Подключить уведомления", completed: false, executors: ["Пётр Сидоров"], dateCompleted: "", accepted: "Нет" },
    { id: 28, dateSet: "2025-04-18", project: "Заказчик Delta-2", theme: "Дизайн", description: "Создать промо-страницу", completed: true, executors: ["Мария Петрова"], dateCompleted: "2025-04-19", accepted: "Да" },
    { id: 29, dateSet: "2025-04-19", project: "Проект Epsilon-2", theme: "Оптимизация", description: "Улучшить SEO", completed: false, executors: ["Дмитрий Соколов"], dateCompleted: "", accepted: "Нет" },
    { id: 30, dateSet: "2025-04-20", project: "Заказчик Zeta-2", theme: "Тестирование", description: "Проверить адаптивность", completed: true, executors: ["Ольга Николаева"], dateCompleted: "2025-04-21", accepted: "Да" }
];
// Объект tasks остается без изменений, но предположим, что files теперь содержит ссылки
// Пример: task.files = [{ name: "document.pdf", url: "http://backend.com/files/document.pdf" }, ...]

// Объект для хранения фильтров и состояния сортировки
let filters = {};
let sortState = { field: null, ascending: true };

// Уникальный список всех проектов для рекомендаций
const allProjects = [...new Set(tasks.map(task => task.project))];

// Функция для получения актуального списка исполнителей
function getAllExecutors() {
    return [...new Set(tasks.flatMap(task => task.executors))];
}

let currentPage = 1;
const tasksPerPage = 20;

function createInterface() {
    const appDiv = document.getElementById("app");
    appDiv.innerHTML = `
        <div class="controls">
            <div class="filters">
                <div class="filter-group">
                    <label>Диапазон дат:</label>
                    <div class="date-range">
                        <input type="date" id="dateFrom" placeholder="С">
                        <input type="date" id="dateTo" placeholder="По">
                    </div>
                </div>
                <div class="filter-group">
                    <label>Заказчик:</label>
                    <div class="input-with-clear">
                        <input type="text" id="projectFilter" placeholder="Введите заказчика...">
                        <button class="clear-btn" id="clearProject">×</button>
                    </div>
                    <div id="projectSuggestions" class="suggestions hidden"></div>
                </div>
                <div class="filter-group">
                    <label>Исполнитель:</label>
                    <div class="input-with-clear">
                        <input type="text" id="executorFilter" placeholder="Введите исполнителя...">
                        <button class="clear-btn" id="clearExecutor">×</button>
                    </div>
                    <div id="executorSuggestions" class="suggestions hidden"></div>
                </div>
                <button id="resetFiltersBtn">Сбросить все</button>
            </div>
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Поиск по таблице...">
                <button id="searchBtn">🔍</button>
                <button id="addGlobalExecutorBtn">Добавить исполнителя</button>
            </div>
        </div>
    `;
    createTable(tasks);

    // Автоматическое применение фильтров по дате
    const dateFrom = document.getElementById("dateFrom");
    const dateTo = document.getElementById("dateTo");
    [dateFrom, dateTo].forEach(input => {
        input.addEventListener("change", () => {
            filters.dateFrom = dateFrom.value;
            filters.dateTo = dateTo.value;
            applyFilters();
        });
    });

    // Кнопки очистки
    document.getElementById("clearProject").addEventListener("click", () => {
        document.getElementById("projectFilter").value = "";
        filters.project = "";
        applyFilters();
    });
    document.getElementById("clearExecutor").addEventListener("click", () => {
        document.getElementById("executorFilter").value = "";
        filters.executors = "";
        applyFilters();
    });

    // Сброс всех фильтров
    document.getElementById("resetFiltersBtn").addEventListener("click", () => {
        filters = {};
        document.getElementById("dateFrom").value = "";
        document.getElementById("dateTo").value = "";
        document.getElementById("projectFilter").value = "";
        document.getElementById("executorFilter").value = "";
        document.getElementById("searchInput").value = "";
        sortState = { field: null, ascending: true };
        currentPage = 1;
        createTable(tasks);
    });

    // Поиск
    document.getElementById("searchBtn").addEventListener("click", () => {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase();
        const filteredTasks = tasks.filter(task =>
            task.id.toString().includes(searchTerm) ||
            task.dateSet.toLowerCase().includes(searchTerm) ||
            task.project.toLowerCase().includes(searchTerm) ||
            task.theme.toLowerCase().includes(searchTerm) ||
            task.description.toLowerCase().includes(searchTerm) ||
            task.executors.some(ex => ex.toLowerCase().includes(searchTerm)) ||
            (task.dateCompleted && task.dateCompleted.toLowerCase().includes(searchTerm)) ||
            task.accepted.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        createTable(filteredTasks);
    });
    document.getElementById("searchInput").addEventListener("keypress", (e) => {
        if (e.key === "Enter") document.getElementById("searchBtn").click();
    });

    // Автодополнение для заказчика
    const projectInput = document.getElementById("projectFilter");
    const projectSuggestions = document.getElementById("projectSuggestions");
    projectInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        projectSuggestions.innerHTML = "";
        if (value) {
            projectSuggestions.classList.remove("hidden");
            const matches = allProjects.filter(p => p.toLowerCase().includes(value));
            matches.forEach(match => {
                const div = document.createElement("div");
                div.textContent = match;
                div.className = "suggestion-item";
                div.style.cursor = "pointer";
                div.addEventListener("click", () => {
                    projectInput.value = match;
                    filters.project = match;
                    projectSuggestions.classList.add("hidden");
                    applyFilters();
                });
                projectSuggestions.appendChild(div);
            });
        } else {
            projectSuggestions.classList.add("hidden");
            filters.project = "";
            applyFilters();
        }
    });

    // Автодополнение для исполнителя
    const executorInput = document.getElementById("executorFilter");
    const executorSuggestions = document.getElementById("executorSuggestions");
    executorInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        executorSuggestions.innerHTML = "";
        if (value) {
            executorSuggestions.classList.remove("hidden");
            const allExecutors = getAllExecutors();
            const matches = allExecutors.filter(ex => ex.toLowerCase().includes(value));
            matches.forEach(match => {
                const div = document.createElement("div");
                div.textContent = match;
                div.className = "suggestion-item";
                div.style.cursor = "pointer";
                div.addEventListener("click", () => {
                    executorInput.value = match;
                    filters.executors = match;
                    executorSuggestions.classList.add("hidden");
                    applyFilters();
                });
                executorSuggestions.appendChild(div);
            });
        } else {
            executorSuggestions.classList.add("hidden");
            filters.executors = "";
            applyFilters();
        }
    });

    // Глобальная кнопка "Добавить исполнителя"
    document.getElementById("addGlobalExecutorBtn").addEventListener("click", () => {
        openGlobalExecutorModal();
    });

    // Закрытие предложений при клике вне
    document.addEventListener("click", (e) => {
        if (!projectInput.contains(e.target) && !projectSuggestions.contains(e.target)) {
            projectSuggestions.classList.add("hidden");
        }
        // if (!executorInput.contains(e.target) && !executorSuggestions.contains)
    });
}

function applyFilters() {
    filters.project = document.getElementById("projectFilter").value;
    filters.executors = document.getElementById("executorFilter").value;

    let filteredTasks = tasks.filter(task => {
        return (
            (!filters.project || task.project.toLowerCase().includes(filters.project.toLowerCase())) &&
            (!filters.executors || task.executors.some(ex => ex.toLowerCase().includes(filters.executors.toLowerCase()))) &&
            (!filters.dateFrom || task.dateSet >= filters.dateFrom) &&
            (!filters.dateTo || task.dateSet <= filters.dateTo)
        );
    });
    sortTasks(filteredTasks);
    currentPage = 1;
    createTable(filteredTasks);
}

function sortTasks(taskList) {
    if (!sortState.field) return;

    taskList.sort((a, b) => {
        let valA = a[sortState.field];
        let valB = b[sortState.field];

        if (sortState.field === "dateSet" || sortState.field === "dateCompleted") {
            valA = valA || "9999-12-31";
            valB = valB || "9999-12-31";
            return sortState.ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else if (sortState.field === "id") {
            return sortState.ascending ? valA - valB : valB - valA;
        } else if (sortState.field === "completed" || sortState.field === "accepted") {
            valA = sortState.field === "completed" ? valA : valA === "Да";
            valB = sortState.field === "completed" ? valB : valB === "Да";
            return sortState.ascending ? (valB - valA) : (valA - valB);
        } else if (sortState.field === "executors") {
            valA = valA.length ? valA.join(", ") : "";
            valB = valB.length ? valB.join(", ") : "";
            return sortState.ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        } else {
            return sortState.ascending ? valA.localeCompare(valB) : valB.localeCompare(valA);
        }
    });
}

function createTable(taskList) {
    const appDiv = document.getElementById("app");
    const existingTable = appDiv.querySelector("table");
    const existingPagination = appDiv.querySelector(".pagination");
    if (existingTable) existingTable.remove();
    if (existingPagination) existingPagination.remove();

    const totalPages = Math.ceil(taskList.length / tasksPerPage);
    const startIndex = (currentPage - 1) * tasksPerPage;
    const endIndex = startIndex + tasksPerPage;
    const paginatedTasks = taskList.slice(startIndex, endIndex);

    const table = document.createElement("table");
    table.innerHTML = `
        <thead>
            <tr>
                <th data-sort="id">№</th>
                <th data-sort="dateSet">Дата постановки</th>
                <th data-sort="project">Проект/Заказчик</th>
                <th data-sort="theme">Тема</th>
                <th data-sort="description">Описание</th>
                <th data-sort="executors">Исполнители</th>
                <th data-sort="completed">Выполнено</th>
                <th data-sort="dateCompleted">Дата выполнения</th>
                <th data-sort="accepted">Принято заказчиком</th>
            </tr>
        </thead>
        <tbody></tbody>
    `;

    const tbody = table.querySelector("tbody");
    paginatedTasks.forEach(task => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.id}</td>
            <td>${task.dateSet}</td>
            <td>${task.project}</td>
            <td>${task.theme}</td>
            <td>${task.description}</td>
            <td>${task.executors.length ? task.executors.join(", ") : "Не назначены"}</td>
            <td>${task.completed ? "Да" : "Нет"}</td>
            <td>${task.dateCompleted || "Не указано"}</td>
            <td>${task.accepted}</td>
        `;
        row.addEventListener("click", () => openEditModal(task));
        tbody.appendChild(row);
    });

    table.querySelectorAll("th[data-sort]").forEach(th => {
        th.addEventListener("click", () => {
            const field = th.dataset.sort;
            table.querySelectorAll("th").forEach(header => header.innerHTML = header.innerHTML.replace(" ↑", "").replace(" ↓", ""));
            if (sortState.field === field) {
                sortState.ascending = !sortState.ascending;
            } else {
                sortState.field = field;
                sortState.ascending = true;
            }
            th.innerHTML += sortState.ascending ? " ↑" : " ↓";
            applyFilters();
        });
    });

    appDiv.appendChild(table);
    renderPagination(taskList, totalPages);
}

function renderPagination(taskList, totalPages) {
    const paginationDiv = document.createElement("div");
    paginationDiv.className = "pagination";

    const prevBtn = document.createElement("button");
    prevBtn.textContent = "Назад";
    prevBtn.disabled = currentPage === 1;
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            createTable(taskList);
        }
    });
    paginationDiv.appendChild(prevBtn);

    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement("button");
        pageBtn.textContent = i;
        pageBtn.classList.toggle("active", i === currentPage);
        pageBtn.addEventListener("click", () => {
            currentPage = i;
            createTable(taskList);
        });
        paginationDiv.appendChild(pageBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Вперед";
    nextBtn.disabled = currentPage === totalPages;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            createTable(taskList);
        }
    });
    paginationDiv.appendChild(nextBtn);

    const appDiv = document.getElementById("app");
    appDiv.appendChild(paginationDiv);
}

function openEditModal(task) {
    const modal = document.createElement("div");
    modal.className = "modal";

    if (!task.comments) task.comments = [];
    if (!task.files) task.files = [];

    modal.innerHTML = `
        <div class="modal-content full-task-modal">
            <button class="close-modal-btn" id="closeModalBtn">×</button>
            <div class="modal-header">
                <h2>Задача #${task.id}</h2>
                <span>От: ${task.dateSet}</span>
                <span>Проект: ${task.project}</span>
                <div class="header-details">
                    <div class="status-toggle">
                        <label>Выполнено:</label>
                        <label class="checkbox-google">
                            <input type="checkbox" id="editCompleted" ${task.completed ? 'checked' : ''}>
                            <span class="checkbox-google-switch"></span>
                        </label>
                    </div>
                    <div class="status-toggle">
                        <label>Принято:</label>
                        <label class="checkbox-google">
                            <input type="checkbox" id="editAccepted" ${task.accepted === 'Да' ? 'checked' : ''}>
                            <span class="checkbox-google-switch"></span>
                        </label>
                    </div>
                </div>
            </div>
            <div class="task-details">
                <div class="field">
                    <label>Тема:</label>
                    <div class="editable-field">
                        <span id="themeDisplay">${task.theme}</span>
                        <button class="edit-btn" data-field="theme">✏️</button>
                        <input type="text" id="editTheme" value="${task.theme}" class="hidden">
                    </div>
                </div>
                <div class="field">
                    <label>Описание:</label>
                    <div class="editable-field">
                        <span id="descriptionDisplay">${task.description}</span>
                        <button class="edit-btn" data-field="description">✏️</button>
                        <textarea id="editDescription" class="hidden">${task.description}</textarea>
                    </div>
                </div>
                <div class="field">
                    <label>Исполнители:</label>
                    <div id="executorList" class="executor-list">
                        ${task.executors.length ? task.executors.map(ex => `
                            <div class="executor-item">
                                <span>${ex}</span>
                                <button class="remove-executor" data-executor="${ex}">×</button>
                            </div>
                        `).join('') : '<span>Не назначены</span>'}
                        <select id="addExecutorSelect">
                            <option value="">Добавить исполнителя</option>
                            ${getAllExecutors().filter(ex => !task.executors.includes(ex)).map(ex => `
                                <option value="${ex}">${ex}</option>
                            `).join('')}
                        </select>
                    </div>
                </div>
                <div class="field">
                    <label>Дата выполнения:</label>
                    <input type="date" value="${task.dateCompleted || ''}" id="editDateCompleted">
                </div>
                <div class="field comments">
                    <label>Комментарии:</label>
                    <div id="commentList">
                        ${task.comments.map((comment, index) => `
                            <div class="comment-item">
                                ${comment.text} 
                                <small>(${comment.date})</small>
                                <button class="remove-comment" data-index="${index}">×</button>
                            </div>
                        `).join('')}
                    </div>
                    <textarea id="newComment" placeholder="Новый комментарий"></textarea>
                    <button id="addComment">Добавить комментарий</button>
                </div>
                <div class="field files">
                    <label>Прикрепленные файлы:</label>
                    <div id="fileList">
                        ${task.files.length ? task.files.map(file => `
                            <div class="file-item">
                                <a href="${file.url}" target="_blank">${file.name}</a>
                            </div>
                        `).join('') : 'Нет файлов'}
                    </div>
                </div>
            </div>
            <div class="modal-buttons">
                <button id="saveBtn">Сохранить</button>
                <button id="closeBtn">Закрыть</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Редактирование темы и описания
    modal.querySelectorAll(".edit-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const field = btn.dataset.field;
            const display = modal.querySelector(`#${field}Display`);
            const input = modal.querySelector(`#edit${field.charAt(0).toUpperCase() + field.slice(1)}`);

            display.classList.toggle("hidden");
            input.classList.toggle("hidden");
            btn.textContent = display.classList.contains("hidden") ? "💾" : "✏️";

            if (!display.classList.contains("hidden")) {
                task[field] = input.value;
                display.textContent = task[field];
            }
        });
    });

    // Добавление исполнителя через селект
    const addExecutorSelect = modal.querySelector("#addExecutorSelect");
    addExecutorSelect.addEventListener("change", (e) => {
        const newExecutor = e.target.value;
        if (newExecutor && !task.executors.includes(newExecutor)) {
            task.executors.push(newExecutor);
            updateExecutorList(task, modal);
        }
        e.target.value = ""; // Сбрасываем выбор
    });

    // Удаление исполнителей
    modal.querySelectorAll(".remove-executor").forEach(btn => {
        btn.addEventListener("click", () => {
            const executor = btn.dataset.executor;
            task.executors = task.executors.filter(ex => ex !== executor);
            updateExecutorList(task, modal);
        });
    });

    // Обработчики для комментариев
    modal.querySelector("#addComment").addEventListener("click", () => {
        const commentText = modal.querySelector("#newComment").value.trim();
        if (commentText) {
            task.comments.push({
                text: commentText,
                date: new Date().toLocaleDateString()
            });
            updateCommentList(task, modal);
        }
    });

    modal.querySelectorAll(".remove-comment").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.index);
            task.comments.splice(index, 1);
            updateCommentList(task, modal);
        });
    });

    // Сохранение
    modal.querySelector("#saveBtn").addEventListener("click", () => {
        task.completed = modal.querySelector("#editCompleted").checked;
        task.accepted = modal.querySelector("#editAccepted").checked ? "Да" : "Нет";
        task.dateCompleted = modal.querySelector("#editDateCompleted").value;
        applyFilters();
        modal.remove();
    });

    // Закрытие модалки
    modal.querySelector("#closeBtn").addEventListener("click", () => modal.remove());
    modal.querySelector("#closeModalBtn").addEventListener("click", () => modal.remove());
}

function updateExecutorList(task, modal) {
    const executorList = modal.querySelector("#executorList");
    const allExecutors = getAllExecutors();
    executorList.innerHTML = `
        ${task.executors.length ? task.executors.map(ex => `
            <div class="executor-item">
                <span>${ex}</span>
                <button class="remove-executor" data-executor="${ex}">×</button>
            </div>
        `).join('') : '<span>Не назначены</span>'}
        <select id="addExecutorSelect">
            <option value="">Добавить исполнителя</option>
            ${allExecutors.filter(ex => !task.executors.includes(ex)).map(ex => `
                <option value="${ex}">${ex}</option>
            `).join('')}
        </select>
    `;

    // Перепривязываем обработчики
    const addExecutorSelect = modal.querySelector("#addExecutorSelect");
    addExecutorSelect.addEventListener("change", (e) => {
        const newExecutor = e.target.value;
        if (newExecutor && !task.executors.includes(newExecutor)) {
            task.executors.push(newExecutor);
            updateExecutorList(task, modal);
        }
        e.target.value = "";
    });

    modal.querySelectorAll(".remove-executor").forEach(btn => {
        btn.addEventListener("click", () => {
            const executor = btn.dataset.executor;
            task.executors = task.executors.filter(ex => ex !== executor);
            updateExecutorList(task, modal);
        });
    });
}

function updateCommentList(task, modal) {
    const commentList = modal.querySelector("#commentList");
    commentList.innerHTML = task.comments.map((comment, index) => `
        <div class="comment-item">
            ${comment.text} 
            <small>(${comment.date})</small>
            <button class="remove-comment" data-index="${index}">×</button>
        </div>
    `).join('');
    modal.querySelector("#newComment").value = "";
    modal.querySelectorAll(".remove-comment").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = parseInt(btn.dataset.index);
            task.comments.splice(index, 1);
            updateCommentList(task, modal);
        });
    });
}

function openGlobalExecutorModal() {
    const modal = document.createElement("div");
    modal.className = "modal";
    modal.innerHTML = `
        <div class="modal-contente">
            <h2>Добавить нового исполнителя</h2>
            <input type="text" id="newGlobalExecutor" placeholder="Введите имя исполнителя">
            <div class="suggestions" id="globalExecutorSuggestions"></div>
            <div class="modal-buttons">
                <button id="saveGlobalExecutor">Добавить</button>
                <button id="closeGlobalModal">Закрыть</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const input = modal.querySelector("#newGlobalExecutor");
    const suggestions = modal.querySelector("#globalExecutorSuggestions");
    const allExecutors = getAllExecutors();

    input.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        suggestions.innerHTML = "";
        if (value) {
            const matches = allExecutors.filter(ex => ex.toLowerCase().includes(value) && !tasks.some(t => t.executors.includes(ex)));
            matches.forEach(match => {
                const div = document.createElement("div");
                div.textContent = match;
                div.className = "suggestion-item";
                div.style.cursor = "pointer";
                div.addEventListener("click", () => {
                    input.value = match;
                    suggestions.innerHTML = "";
                });
                suggestions.appendChild(div);
            });
        }
    });

    modal.querySelector("#saveGlobalExecutor").addEventListener("click", () => {
        const newExecutor = input.value.trim();
        if (newExecutor && !allExecutors.includes(newExecutor)) {
            tasks.push({ // Добавляем фиктивную задачу, чтобы исполнитель попал в пул
                id: tasks.length + 1,
                dateSet: new Date().toISOString().split("T")[0],
                project: "Без проекта",
                theme: "Без темы",
                description: "Фиктивная задача для исполнителя",
                completed: false,
                executors: [newExecutor],
                dateCompleted: "",
                accepted: "Нет",
                comments: [],
                files: []
            });
        }
        modal.remove();
    });

    modal.querySelector("#closeGlobalModal").addEventListener("click", () => modal.remove());
}

document.addEventListener("DOMContentLoaded", createInterface);


