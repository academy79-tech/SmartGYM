// Telegram Mini App Initialization
const tg = window.Telegram.WebApp;
if (tg) {
    tg.expand();
    if (tg.setHeaderColor) {
        tg.setHeaderColor('#101820');
    }
}

// Comprehensive Datasets (8 Professional Plans)
const plansData = [
    {
        id: "plan_5_day_split",
        titleRu: "5-дневный продвинутый сплит",
        descriptionRu: "Интенсивная 5-дневная программа: грудь, спина, плечи и руки, грудь/спина, становая и ноги.",
        days: [
            {
                dayNumber: 1,
                titleRu: "День 1 — Акцент на грудь",
                focusRu: "Грудные мышцы и средняя дельта",
                exercises: [
                    { name: "Жим штанги лежа", sets: 3, reps: "12", weight: 50 },
                    { name: "Жим гантелей на наклонной", sets: 3, reps: "12", weight: 20 },
                    { name: "Отжимания на брусьях", sets: 3, reps: "12", weight: 0 },
                    { name: "Сведение рук с гантелями", sets: 3, reps: "12", weight: 14 }
                ]
            },
            {
                dayNumber: 2,
                titleRu: "День 2 — Акцент на спину",
                focusRu: "Спина и широчайшие мышцы",
                exercises: [
                    { name: "Тяга верхнего блока", sets: 3, reps: "12", weight: 45 },
                    { name: "Тяга штанги в наклоне", sets: 3, reps: "12", weight: 40 },
                    { name: "Тяга горизонтального блока", sets: 3, reps: "12", weight: 50 },
                    { name: "Гиперэкстензия", sets: 3, reps: "12", weight: 0 }
                ]
            }
        ]
    },
    {
        id: "plan_push_pull_legs",
        titleRu: "3-дневный сплит: Толкай / Тяни / Ноги",
        descriptionRu: "Классический сплит по паттернам движений для оптимального восстановления и роста.",
        days: [
            {
                dayNumber: 1,
                titleRu: "День 1 — Толкай (Push)",
                focusRu: "Грудь, плечи, трицепс",
                exercises: [
                    { name: "Жим штанги лежа", sets: 3, reps: "12", weight: 50 },
                    { name: "Жим гантелей сидя", sets: 3, reps: "12", weight: 22 },
                    { name: "Разгибания рук на блоке", sets: 3, reps: "12", weight: 25 }
                ]
            }
        ]
    },
    {
        id: "plan_upper_lower",
        titleRu: "4-дневный сплит Верх / Низ",
        descriptionRu: "Популярная программа с чередованием тренировок верхней и нижней частей тела.",
        days: [
            {
                dayNumber: 1,
                titleRu: "День 1 — Верх А",
                focusRu: "Грудь, спина, плечи",
                exercises: [
                    { name: "Жим штанги лежа", sets: 3, reps: "12", weight: 50 },
                    { name: "Тяга штанги в наклоне", sets: 3, reps: "12", weight: 40 },
                    { name: "Махи гантелями в стороны", sets: 3, reps: "12", weight: 10 }
                ]
            }
        ]
    },
    {
        id: "plan_fullbody_men",
        titleRu: "Фулбади для мужчин (3 раза в неделю)",
        descriptionRu: "Силовая программа на все тело 3 раза в неделю для набора массы.",
        days: [
            {
                dayNumber: 1,
                titleRu: "Силовая фулбади тренировка",
                focusRu: "Сила и масса",
                exercises: [
                    { name: "Становая тяга", sets: 3, reps: "12", weight: 60 },
                    { name: "Жим штанги лежа", sets: 3, reps: "12", weight: 50 },
                    { name: "Тяга верхнего блока", sets: 3, reps: "12", weight: 45 }
                ]
            }
        ]
    },
    {
        id: "plan_fullbody_women",
        titleRu: "Фулбади для женщин (3 раза в неделю)",
        descriptionRu: "Сбалансированная программа для тонуса всего тела, осанки и ягодиц.",
        days: [
            {
                dayNumber: 1,
                titleRu: "Тренировка тонус",
                focusRu: "Ягодицы, ноги, осанка",
                exercises: [
                    { name: "Гиперэкстензия", sets: 3, reps: "12", weight: 0 },
                    { name: "Жим ногами", sets: 3, reps: "12", weight: 60 },
                    { name: "Выпады с ходьбой", sets: 2, reps: "12", weight: 12 }
                ]
            }
        ]
    },
    {
        id: "plan_weight_loss",
        titleRu: "Жиросжигание и рельеф",
        descriptionRu: "Интенсивные круговые тренировки для максимального сжигания калорий.",
        days: [
            {
                dayNumber: 1,
                titleRu: "Круговая тренировка",
                focusRu: "Кардио и тонус",
                exercises: [
                    { name: "Выпады с ходьбой", sets: 3, reps: "12", weight: 10 },
                    { name: "Отжимания на брусьях", sets: 3, reps: "12", weight: 0 },
                    { name: "Скручивания на пресс", sets: 3, reps: "15", weight: 0 }
                ]
            }
        ]
    },
    {
        id: "plan_hypertrophy",
        titleRu: "Максимальная гипертрофия и масса",
        descriptionRu: "Продвинутая бодибилдинг программа для максимального роста мышечных объемов.",
        days: [
            {
                dayNumber: 1,
                titleRu: "Грудь и Бицепс",
                focusRu: "Гипертрофия верха",
                exercises: [
                    { name: "Жим штанги лежа", sets: 4, reps: "12", weight: 60 },
                    { name: "Жим гантелей на наклонной", sets: 3, reps: "12", weight: 22 },
                    { name: "Сгибания рук на бицепс", sets: 3, reps: "12", weight: 14 }
                ]
            }
        ]
    },
    {
        id: "plan_powerlifting",
        titleRu: "Силовая база пауэрлифтинга",
        descriptionRu: "Развитие максимальных силовых показателей в базовых соревновательных движениях.",
        days: [
            {
                dayNumber: 1,
                titleRu: "Силовой день — База",
                focusRu: "Приседания, жим, тяга",
                exercises: [
                    { name: "Жим штанги лежа", sets: 5, reps: "5", weight: 70 },
                    { name: "Становая тяга", sets: 5, reps: "5", weight: 100 },
                    { name: "Армейский жим", sets: 3, reps: "8", weight: 40 }
                ]
            }
        ]
    }
];

const warmupData = [
    { title: "Повороты головы", reps: "10 повторений", desc: "Плавные повороты вправо и влево для разминки шейного отдела." },
    { title: "Круговые вращения руками", reps: "10 повторений", desc: "Разогрев плечевых суставов и вращательной манжеты." },
    { title: "Вращение бедрами", reps: "10 повторений", desc: "Подготовка тазобедренных суставов к базовым движениям." },
    { title: "Подъем на носки", reps: "10 повторений", desc: "Активация икроножных мышц и стоп." }
];

// App State
let state = {
    currentScreen: 'home',
    activePlan: plansData[0],
    currentDayIndex: 0,
    history: JSON.parse(localStorage.getItem('smartgym_history') || '[]'),
    userEmail: localStorage.getItem('smartgym_email') || ''
};

function navigateTo(screenId) {
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`screen-${screenId}`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    state.currentScreen = screenId;
    render();
}

function render() {
    // Home
    document.getElementById('home-plan-title').innerText = state.activePlan.titleRu;
    document.getElementById('home-plan-desc').innerText = state.activePlan.descriptionRu;

    // Plans
    const plansList = document.getElementById('plans-list');
    plansList.innerHTML = '';
    plansData.forEach(plan => {
        const isActive = plan.id === state.activePlan.id;
        plansList.innerHTML += `
            <div class="card" style="border: ${isActive ? '2px solid var(--primary-color)' : '1px solid #34485A'}">
                <strong>${plan.titleRu}</strong>
                <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0;">${plan.descriptionRu}</p>
                <button class="btn ${isActive ? 'btn-secondary' : ''}" onclick="selectPlan('${plan.id}')">
                    ${isActive ? 'Активный план ✓' : 'Выбрать план'}
                </button>
            </div>
        `;
    });

    // Workout
    const day = state.activePlan.days[state.currentDayIndex] || state.activePlan.days[0];
    document.getElementById('workout-day-title').innerText = day.titleRu;
    document.getElementById('workout-day-focus').innerText = `Фокус: ${day.focusRu}`;

    const workoutList = document.getElementById('workout-exercises-list');
    workoutList.innerHTML = '';
    day.exercises.forEach((ex, idx) => {
        workoutList.innerHTML += `
            <div class="card" style="margin-bottom: 12px; background: var(--surface-variant);">
                <strong>${idx + 1}. ${ex.name}</strong>
                <div style="display: flex; gap: 8px; margin-top: 8px;">
                    <label style="flex:1; font-size:12px;">Повторы: <input type="number" value="${ex.reps}" onchange="updateExReps(${idx}, this.value)"></label>
                    <label style="flex:1; font-size:12px;">Вес (кг): <input type="number" value="${ex.weight}" onchange="updateExWeight(${idx}, this.value)"></label>
                </div>
            </div>
        `;
    });

    // Diary
    const diaryStats = document.getElementById('diary-stats');
    const totalWorkouts = state.history.length;
    const totalTonnage = state.history.reduce((acc, item) => acc + item.tonnage, 0);
    const totalDuration = state.history.reduce((acc, item) => acc + item.duration, 0);
    diaryStats.innerHTML = `
        <div style="display: flex; justify-content: space-around; text-align: center;">
            <div><strong>${totalWorkouts}</strong><br><small>Тренировок</small></div>
            <div><strong>${totalTonnage} кг</strong><br><small>Тоннаж</small></div>
            <div><strong>${Math.round(totalDuration/60)} мин</strong><br><small>Время</small></div>
        </div>
    `;

    const diaryHistory = document.getElementById('diary-history');
    diaryHistory.innerHTML = '';
    if (state.history.length === 0) {
        diaryHistory.innerHTML = '<div class="card"><p>История тренировок пока пуста.</p></div>';
    } else {
        state.history.forEach(item => {
            diaryHistory.innerHTML += `
                <div class="card">
                    <strong>📌 ${item.dayTitle}</strong><br>
                    <small>${item.date} | Длительность: ${Math.round(item.duration/60)} мин | Тоннаж: ${item.tonnage} кг</small>
                </div>
            `;
        });
    }

    // Warmup
    const warmupList = document.getElementById('warmup-list');
    warmupList.innerHTML = '';
    warmupData.forEach(w => {
        warmupList.innerHTML += `
            <div class="card">
                <strong>${w.title}</strong>
                <span style="float: right; color: var(--primary-color); font-size: 12px;">${w.reps}</span>
                <p style="font-size: 13px; color: var(--text-secondary); margin-top: 6px;">${w.desc}</p>
            </div>
        `;
    });

    calculate1RM();
    calculateCalories();
}

function selectPlan(planId) {
    const found = plansData.find(p => p.id === planId);
    if (found) {
        state.activePlan = found;
        state.currentDayIndex = 0;
        render();
        alert('План успешно активирован!');
        navigateTo('home');
    }
}

function updateExReps(idx, val) {
    state.activePlan.days[state.currentDayIndex].exercises[idx].reps = val;
}

function updateExWeight(idx, val) {
    state.activePlan.days[state.currentDayIndex].exercises[idx].weight = parseInt(val) || 0;
}

function requestFinishWorkout() {
    if (confirm("Завершить тренировку и сохранить в дневник?")) {
        const day = state.activePlan.days[state.currentDayIndex];
        let tonnage = 0;
        day.exercises.forEach(ex => {
            tonnage += (parseInt(ex.reps) || 12) * (parseInt(ex.weight) || 0) * (parseInt(ex.sets) || 3);
        });

        const record = {
            date: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            dayTitle: day.titleRu,
            duration: 1800,
            tonnage: tonnage
        };

        state.history.unshift(record);
        localStorage.setItem('smartgym_history', JSON.stringify(state.history));
        alert('Тренировка успешно сохранена!');
        navigateTo('diary');
    }
}

function calculate1RM() {
    const w = parseFloat(document.getElementById('rm-weight').value) || 80;
    const r = parseFloat(document.getElementById('rm-reps').value) || 8;
    const rm = Math.round(w * (1 + r / 30));
    document.getElementById('rm-result').innerHTML = `Расчетный максимум (1RM): <strong>${rm} кг</strong>`;
}

function calculateCalories() {
    const gender = document.getElementById('cal-gender').value;
    const w = parseFloat(document.getElementById('cal-weight').value) || 75;
    const h = parseFloat(document.getElementById('cal-height').value) || 178;
    const a = parseInt(document.getElementById('cal-age').value) || 28;

    let bmr = (10 * w) + (6.25 * h) - (5 * a);
    bmr += (gender === 'male' ? 5 : -161);

    const tdee = Math.round(bmr * 1.55);
    const protein = Math.round(w * 2);
    const fat = Math.round((tdee * 0.25) / 9);
    const carbs = Math.round((tdee - (protein * 4) - (fat * 9)) / 4);

    document.getElementById('cal-result').innerHTML = `
        Норма: <strong>${tdee} ккал</strong><br>
        • Белки: ${protein} г<br>
        • Жиры: ${fat} г<br>
        • Углеводы: ${carbs} г
    `;
}

function loginGoogle() {
    const email = prompt("Введите вашу почту Gmail:", "user@gmail.com");
    if (email && email.includes("@")) {
        state.userEmail = email;
        localStorage.setItem('smartgym_email', email);
        document.getElementById('profile-email').innerText = `Gmail: ${email}`;
        alert('Успешный вход через Gmail без пароля!');
    }
}

function logout() {
    state.userEmail = '';
    localStorage.removeItem('smartgym_email');
    document.getElementById('profile-email').innerText = 'Gmail: не авторизован';
    alert('Вы вышли из аккаунта');
}

// Initial render
render();
