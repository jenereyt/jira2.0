export async function createHistory(taskId, change, user) {
    const url = 'https://servtodo.ssline.uz/history';
    const date = new Date().toISOString();
    console.log('Создание записи в истории:', { taskId, change, user, date }, url);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date,
                change,
                user,
                taskId
            })
        });
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }
        return await response.json(); // { id, date, change, user, taskId, task }
    } catch (error) {
        console.error('Ошибка при создании записи в истории:', error);
        throw error;
    }
}

export async function fetchHistory() {
    const url = 'https://servtodo.ssline.uz/history';
    console.log('Запрос всех записей истории:', url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Полученные записи истории:', data);
        return data; // [{ id, date, change, user, taskId, task }, ...]
    } catch (error) {
        console.error('Ошибка при получении истории:', error);
        alert(`Не удалось загрузить историю: ${error.message}`);
        return [];
    }
}

export async function fetchHistoryById(id) {
    const url = `https://servtodo.ssline.uz/history/${id}`;
    console.log('Запрос записи истории по ID:', id, url);
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Запись истории не найдена');
            }
            throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }
        return await response.json(); // { id, date, change, user, taskId, task }
    } catch (error) {
        console.error('Ошибка при получении записи истории:', error);
        throw error;
    }
}

export async function updateHistory(id, taskId, change, user, date) {
    const url = `https://servtodo.ssline.uz/history/${id}`;
    console.log('Обновление записи истории:', { id, taskId, change, user, date }, url);
    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date: date || new Date().toISOString(),
                change,
                user,
                taskId
            })
        });
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Запись истории не найдена');
            }
            throw new Error(`Ошибка HTTP: ${response.status} ${response.statusText}`);
        }
        return await response.json(); // { id, date, change, user, taskId }
    } catch (error) {
        console.error('Ошибка при обновлении записи истории:', error);
        throw error;
    }
}