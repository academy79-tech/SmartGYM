// Telegram Mini App Initialization
const tg = window.Telegram.WebApp;
if (tg) {
    tg.expand();
    if (tg.setHeaderColor) {
        tg.setHeaderColor('#101820');
    }
}

// Full Exercise Database with Local Dataset GIFs
const exercisesDb = {
    "bench_press": {
        name: "Жим штанги лежа",
        muscles: ["Грудные мышцы", "Трицепс", "Передние дельты"],
        instructions: ["Угол скамьи 0°. Плотно прижмите таз и поясницу.", "Возьмитесь за гриф хватом чуть шире плеч.", "Опускайте штангу к средней части груди.", "Выжмите вес вверх."],
        variants: ["exercises/bench_press.gif"]
    },
    "incline_db_press": {
        name: "Жим гантелей на наклонной скамье",
        muscles: ["Верх груди", "Передние дельты", "Трицепс"],
        instructions: ["Установите скамью под углом 30–45°.", "Опускайте гантели к верхней части груди.", "Выжимайте гантели вверх по дуге."],
        variants: ["exercises/incline_db_press.gif"]
    },
    "dips": {
        name: "Отжимания на брусьях",
        muscles: ["Низ груди", "Трицепс", "Плечи"],
        instructions: ["Наклоните корпус вперед для акцента на грудь.", "Опускайтесь до угла 90° в локтях."],
        variants: ["exercises/dips.gif", "exercises/dips (3).gif"]
    },
    "flyes": {
        name: "Сведение рук с гантелями",
        muscles: ["Грудные мышцы"],
        instructions: ["Локти слегка согнуты и зафиксированы.", "Движение напоминает объятие дерева."],
        variants: ["exercises/flyes.gif"]
    },
    "lat_raises": {
        name: "Махи гантелями в стороны",
        muscles: ["Средняя дельта"],
        instructions: ["Поднимайте за счет локтей, не выше уровня плеч."],
        variants: ["exercises/lat_raises.gif"]
    },
    "pullover": {
        name: "Пуловер с гантелью",
        muscles: ["Широчайшие мышцы", "Грудь"],
        instructions: ["Движение только в плечевом суставе.", "Опускайте гантель за голову по дуге."],
        variants: ["exercises/pullover.gif", "exercises/pullover1.gif", "exercises/pullover2.gif", "exercises/pullover3.gif"]
    },
    "barbell_row": {
        name: "Тяга штанги в наклоне",
        muscles: ["Широчайшие", "Ромбовидные"],
        instructions: ["Наклонитесь с прямой спиной.", "Тяните гриф к низу живота."],
        variants: ["exercises/barbell_row.gif"]
    },
    "lat_pulldown": {
        name: "Тяга верхнего блока",
        muscles: ["Широчайшие мышцы", "Бицепс"],
        instructions: ["Тяните рукоять к верхней части груди через локти вниз-назад."],
        variants: ["exercises/lat_pulldown.gif", "exercises/lat_pulldown (5).gif", "exercises/lat_pulldown 2.gif"]
    },
    "seated_row": {
        name: "Тяга горизонтального блока",
        muscles: ["Середина спины", "Ромбовидные"],
        instructions: ["Держите спину прямой, тяните рукоять к животу."],
        variants: ["exercises/seated_row.gif"]
    },
    "hyperextension": {
        name: "Гиперэкстензия",
        muscles: ["Поясница", "Ягодицы", "Бицепс бедра"],
        instructions: ["Зафиксируйте бедра, плавно поднимайте корпус до прямой линии."],
        variants: ["exercises/hyperextension (2).gif", "exercises/hyperextension.gif"]
    },
    "overhead_press": {
        name: "Армейский жим / Жим сидя",
        muscles: ["Передняя дельта", "Трицепс"],
        instructions: ["Выжимайте вес строго вверх над головой."],
        variants: ["exercises/overhead_press.gif"]
    },
    "deadlift": {
        name: "Становая тяга",
        muscles: ["Бицепс бедра", "Ягодицы", "Поясница"],
        instructions: ["Гриф над серединой стопы. Спина прямая, ноги мощно толкают пол."],
        variants: ["exercises/deadlift.gif"]
    },
    "leg_press": {
        name: "Жим ногами",
        muscles: ["Квадрицепсы", "Ягодицы"],
        instructions: ["Поясница прижата, не блокируйте колени вверху."],
        variants: ["exercises/leg_press.gif", "exercises/leg_press2.gif"]
    },
    "lunges": {
        name: "Выпады",
        muscles: ["Квадрицепсы", "Ягодицы"],
        instructions: ["Шаг вперед, опуская заднее колено почти до пола."],
        variants: ["exercises/lunges.gif", "exercises/lunges (2).gif", "exercises/lunges (3).gif"]
    },
    "leg_curls": {
        name: "Сгибание ног лежа",
        muscles: ["Бицепс бедра"],
        instructions: ["Прижимайте таз к подушке тренажера."],
        variants: ["exercises/leg_curls.gif"]
    },
    "leg_extensions": {
        name: "Разгибание ног в тренажере",
        muscles: ["Квадрицепс"],
        instructions: ["Пауза в верхней точке с прожимом квадрицепсов."],
        variants: ["exercises/leg_extensions.gif"]
    },
    "calf_raises": {
        name: "Подъемы на носки",
        muscles: ["Икроножные мышцы"],
        instructions: ["Максимальное растяжение внизу и мощный выжим вверх."],
        variants: ["exercises/calf_raises.gif"]
    },
    "biceps_curls": {
        name: "Сгибания на бицепс",
        muscles: ["Бицепс"],
        instructions: ["Локти прижаты к бокам и неподвижны."],
        variants: ["exercises/biceps_curls.gif"]
    },
    "triceps_pushdown": {
        name: "Разгибания рук на трицепс на блоке",
        muscles: ["Трицепс"],
        instructions: ["Плечевая кость неподвижна, работают только предплечья."],
        variants: ["exercises/triceps_pushdown.gif"]
    },
    "crunch": {
        name: "Скручивания на пресс",
        muscles: ["Пресс"],
        instructions: ["Отрывайте лопатки от пола за счет сокращения пресса."],
        variants: ["exercises/crunch.gif"]
    }
};

// All 8 Professional Training Plans
const plansData = [
    {
        id: "plan_5_day_split",
        titleRu: "5-дневный продвинутый сплит",
        descriptionRu: "Интенсивная 5-дневная программа: грудь, спина, плечи и руки, грудь/спина, становая и ноги.",
        categoryRu: "🧬 Сплит-тренировки",
        days: [
            {
                dayNumber: 1,
                titleRu: "День 1 — Акцент на грудь",
                focusRu: "Грудные мышцы и средняя дельта",
                exercises: ["bench_press", "incline_db_press", "dips", "flyes", "lat_raises"]
            },
            {
                dayNumber: 2,
                titleRu: "День 2 — Акцент на спину",
                focusRu: "Спина и широчайшие мышцы",
                exercises: ["pullover", "barbell_row", "lat_pulldown", "seated_row", "hyperextension"]
            },
            {
                dayNumber: 3,
                titleRu: "День 3 — Плечи и руки",
                focusRu: "Дельты, бицепс и трицепс",
                exercises: ["overhead_press", "lat_raises", "biceps_curls", "triceps_pushdown"]
            },
            {
                dayNumber: 4,
                titleRu: "День 4 — Грудь и спина",
                focusRu: "Грудь, спина и руки",
                exercises: ["bench_press", "lat_pulldown", "incline_db_press", "biceps_curls"]
            },
            {
                dayNumber: 5,
                titleRu: "День 5 — Становая и ноги",
                focusRu: "Становая тяга и ноги",
                exercises: ["deadlift", "leg_press", "lunges", "leg_curls", "calf_raises"]
            }
        ]
    },
    {
        id: "plan_push_pull_legs",
        titleRu: "3-дневный сплит: Толкай / Тяни / Ноги",
        descriptionRu: "Классический сплит по паттернам движений для оптимального восстановления и роста.",
        categoryRu: "🧬 Сплит-тренировки",
        days: [
            {
                dayNumber: 1,
                titleRu: "День 1 — Толкай (Push)",
                focusRu: "Грудь, плечи, трицепс",
                exercises: ["bench_press", "incline_db_press", "overhead_press", "triceps_pushdown"]
            },
            {
                dayNumber: 2,
                titleRu: "День 2 — Тяни (Pull)",
                focusRu: "Спина, бицепс, задняя дельта",
                exercises: ["lat_pulldown", "barbell_row", "seated_row", "biceps_curls"]
            },
            {
                dayNumber: 3,
                titleRu: "День 3 — Ноги (Legs)",
                focusRu: "Квадрицепсы, бицепс бедра, икры",
                exercises: ["deadlift", "leg_press", "leg_extensions", "calf_raises"]
            }
        ]
    },
    {
        id: "plan_upper_lower",
        titleRu: "4-дневный сплит Верх / Низ",
        descriptionRu: "Популярная программа с чередованием тренировок верхней и нижней частей тела.",
        categoryRu: "🧬 Сплит-тренировки",
        days: [
            {
                dayNumber: 1,
                titleRu: "День 1 — Верх А",
                focusRu: "Грудь, спина, плечи",
                exercises: ["bench_press", "barbell_row", "lat_raises"]
            },
            {
                dayNumber: 2,
                titleRu: "День 2 — Низ А",
                focusRu: "Квадрицепсы, ягодицы, пресс",
                exercises: ["deadlift", "leg_press", "crunch"]
            },
            {
                dayNumber: 3,
                titleRu: "День 3 — Верх Б",
                focusRu: "Плечи, руки, спина",
                exercises: ["overhead_press", "seated_row", "biceps_curls"]
            },
            {
                dayNumber: 4,
                titleRu: "День 4 — Низ Б",
                focusRu: "Бицепс бедра, икры",
                exercises: ["leg_curls", "lunges", "calf_raises"]
            }
        ]
    },
    {
        id: "plan_fullbody_men",
        titleRu: "Фулбади для мужчин (3 раза в неделю)",
        descriptionRu: "Силовая программа на все тело 3 раза в неделю для набора массы.",
        categoryRu: "🏋️ Фулбади (Всё тело)",
        days: [
            {
                dayNumber: 1,
                titleRu: "Силовая фулбади тренировка",
                focusRu: "Сила и масса",
                exercises: ["deadlift", "bench_press", "lat_pulldown", "overhead_press"]
            }
        ]
    },
    {
        id: "plan_fullbody_women",
        titleRu: "Фулбади для женщин (3 раза в неделю)",
        descriptionRu: "Сбалансированная программа для тонуса всего тела, осанки и ягодиц.",
        categoryRu: "🏋️ Фулбади (Всё тело)",
        days: [
            {
                dayNumber: 1,
                titleRu: "Тренировка тонус",
                focusRu: "Ягодицы, ноги, осанка",
                exercises: ["hyperextension", "leg_press", "lunges", "lat_pulldown", "crunch"]
            }
        ]
    },
    {
        id: "plan_weight_loss",
        titleRu: "Жиросжигание и рельеф",
        descriptionRu: "Интенсивные круговые тренировки для максимального сжигания калорий.",
        categoryRu: "⚡ Специализированные программы",
        days: [
            {
                dayNumber: 1,
                titleRu: "Круговая тренировка",
                focusRu: "Кардио и тонус",
                exercises: ["lunges", "dips", "lat_pulldown", "crunch"]
            }
        ]
    },
    {
        id: "plan_hypertrophy",
        titleRu: "Максимальная гипертрофия и масса",
        descriptionRu: "Продвинутая бодибилдинг программа для максимального роста мышечных объемов.",
        categoryRu: "🧬 Сплит-тренировки",
        days: [
            {
                dayNumber: 1,
                titleRu: "Грудь и Бицепс",
                focusRu: "Гипертрофия верха",
                exercises: ["bench_press", "incline_db_press", "biceps_curls"]
            },
            {
                dayNumber: 2,
                titleRu: "Спина и Трицепс",
                focusRu: "Гипертрофия спины",
                exercises: ["deadlift", "lat_pulldown", "triceps_pushdown"]
            }
        ]
    },
    {
        id: "plan_powerlifting",
        titleRu: "Силовая база пауэрлифтинга",
        descriptionRu: "Развитие максимальных силовых показателей в базовых соревновательных движениях.",
        categoryRu: "⚡ Специализированные программы",
        days: [
            {
                dayNumber: 1,
                titleRu: "Силовой день — База",
                focusRu: "Приседания, жим, тяга",
                exercises: ["bench_press", "deadlift", "overhead_press"]
            }
        ]
    }
];

const warmupData = [
    { title: "Повороты головы", reps: "10 повторений", desc: "Плавные повороты вправо и влево для разминки шейного отдела." },
    { title: "Вращение бедрами", reps: "10 повторений", desc: "Широкие круговые вращения тазом." },
    { title: "Подъем рук в стороны", reps: "10 повторений", desc: "Плавный подъем прямых рук через стороны вверх с глубоким вдохом." },
    { title: "Круговые вращения руками", reps: "10 повторений", desc: "Вращения прямыми руками вперед с полной амплитудой." },
    { title: "Круговые вращения в обратную сторону", reps: "10 повторений", desc: "Вращения прямыми руками назад с раскрытием грудной клетки." },
    { title: "Разведение рук", reps: "10 повторений", desc: "Сомкните руки перед грудью и с усилием разведите их в стороны." },
    { title: "Повороты туловища", reps: "10 повторений", desc: "Плавные скручивания корпуса влево и вправо." },
    { title: "Вращение ногой", reps: "10 повторений", desc: "Вращения согнутой в колене ногой для разогрева тазобедренного сустава." },
    { title: "Подъем на носки", reps: "10 повторений", desc: "Динамичные подъемы на носки для разогрева стоп и икроножных." }
];

// App State & Rest Timer
let state = {
    currentScreen: 'home',
    activePlan: plansData[0],
    currentDayIndex: 0,
    selectedPlanDetail: null,
    selectedExercise: null,
    voiceExercises: ["Жим штанги лежа", "Становая тяга", "Скручивания"],
    history: JSON.parse(localStorage.getItem('smartgym_history') || '[]'),
    userEmail: localStorage.getItem('smartgym_email') || ''
};

let restTimerInterval = null;
let restSecondsRemaining = 90;

function startRestTimer(seconds = 90) {
    restSecondsRemaining = seconds;
    const card = document.getElementById('rest-timer-card');
    card.classList.remove('hidden');

    if (restTimerInterval) clearInterval(restTimerInterval);

    restTimerInterval = setInterval(() => {
        if (restSecondsRemaining > 0) {
            restSecondsRemaining--;
            updateTimerDisplay();
        } else {
            clearInterval(restTimerInterval);
            card.classList.add('hidden');
            if (navigator.vibrate) navigator.vibrate(500);
            alert('Время отдыха завершено! Переходите к следующему подходу.');
        }
    }, 1000);
    updateTimerDisplay();
}

function setRestTime(secs) {
    restSecondsRemaining = secs;
    updateTimerDisplay();
}

function skipRestTimer() {
    if (restTimerInterval) clearInterval(restTimerInterval);
    document.getElementById('rest-timer-card').classList.add('hidden');
}

function updateTimerDisplay() {
    const m = Math.floor(restSecondsRemaining / 60);
    const s = restSecondsRemaining % 60;
    document.getElementById('timer-display').innerText = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// Navigation History stack for Back button
let navStack = ['home'];

function navigateTo(screenId, pushStack = true) {
    if (pushStack && state.currentScreen !== screenId) {
        navStack.push(state.currentScreen);
    }
    document.querySelectorAll('.screen').forEach(el => el.classList.add('hidden'));
    const target = document.getElementById(`screen-${screenId}`);
    if (target) target.classList.remove('hidden');

    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

    const backBtn = document.getElementById('header-back');
    if (screenId === 'home') {
        backBtn.classList.add('hidden');
    } else {
        backBtn.classList.remove('hidden');
    }

    state.currentScreen = screenId;
    render();
}

function goBack() {
    if (navStack.length > 1) {
        navStack.pop();
        const prev = navStack[navStack.length - 1];
        navigateTo(prev, false);
    } else {
        navigateTo('home', false);
    }
}

// Swipe Gesture Detection for Back Navigation
let touchStartX = 0;
let touchEndX = 0;

window.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

window.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX - touchStartX > 70 && touchStartX < 60) {
        goBack();
    }
}

function render() {
    // Home
    document.getElementById('home-plan-title').innerText = state.activePlan.titleRu;
    document.getElementById('home-plan-desc').innerText = state.activePlan.descriptionRu;

    // Plans Catalog grouped by category
    const plansList = document.getElementById('plans-list');
    plansList.innerHTML = '';
    const categories = [...new Set(plansData.map(p => p.categoryRu))];
    categories.forEach(cat => {
        plansList.innerHTML += `<div style="font-weight: bold; color: var(--primary-color); margin: 12px 0 6px 0;">${cat}</div>`;
        plansData.filter(p => p.categoryRu === cat).forEach(plan => {
            const isActive = plan.id === state.activePlan.id;
            plansList.innerHTML += `
                <div class="card" onclick="openPlanDetail('${plan.id}')" style="cursor: pointer; border: ${isActive ? '2px solid var(--primary-color)' : '1px solid #34485A'}">
                    <strong>${plan.titleRu}</strong>
                    <p style="font-size: 13px; color: var(--text-secondary); margin: 6px 0;">${plan.descriptionRu}</p>
                    <span style="font-size: 12px; color: var(--primary-color);">${isActive ? 'Активный план ✓' : 'Нажмите для просмотра →'}</span>
                </div>
            `;
        });
    });

    // Plan Detail View
    if (state.currentScreen === 'plan-detail' && state.selectedPlanDetail) {
        const p = state.selectedPlanDetail;
        document.getElementById('detail-plan-title').innerText = p.titleRu;
        document.getElementById('detail-plan-desc').innerText = p.descriptionRu;
        const daysContainer = document.getElementById('detail-days-list');
        daysContainer.innerHTML = '';
        p.days.forEach(d => {
            let exHtml = d.exercises.map(exKey => {
                const exObj = exercisesDb[exKey];
                return `<div style="padding: 4px 0; color: var(--text-secondary); cursor: pointer;" onclick="openExerciseDetail('${exKey}')">• ${exObj ? exObj.name : exKey}</div>`;
            }).join('');
            daysContainer.innerHTML += `
                <div style="margin-bottom: 12px; background: var(--surface-variant); padding: 10px; border-radius: 8px;">
                    <strong>${d.titleRu}</strong><br>
                    <small style="color: var(--accent-color);">Фокус: ${d.focusRu}</small>
                    <div style="margin-top: 6px;">${exHtml}</div>
                </div>
            `;
        });
    }

    // Exercise Detail View
    if (state.currentScreen === 'exercise-detail' && state.selectedExercise) {
        const exKey = state.selectedExercise;
        const ex = exercisesDb[exKey];
        if (ex) {
            document.getElementById('ex-detail-name').innerText = ex.name;
            document.getElementById('ex-detail-img').src = ex.variants[0];
            document.getElementById('ex-detail-muscles').innerText = ex.muscles.join(', ');

            const instList = document.getElementById('ex-detail-instructions');
            instList.innerHTML = ex.instructions.map(step => `<li>${step}</li>`).join('');

            const variantsDiv = document.getElementById('ex-variants-selector');
            variantsDiv.innerHTML = '';
            if (ex.variants.length > 1) {
                ex.variants.forEach((v, idx) => {
                    variantsDiv.innerHTML += `<button class="btn btn-secondary" style="width: auto; padding: 6px 12px; font-size: 13px;" onclick="switchExVariant('${exKey}', ${idx})">Вариант ${idx + 1}</button>`;
                });
            }
        }
    }

    // Workout
    const day = state.activePlan.days[state.currentDayIndex] || state.activePlan.days[0];
    document.getElementById('workout-day-title').innerText = day.titleRu;
    document.getElementById('workout-day-focus').innerText = `Фокус: ${day.focusRu}`;

    const workoutList = document.getElementById('workout-exercises-list');
    workoutList.innerHTML = '';
    day.exercises.forEach((exKey, idx) => {
        const exObj = exercisesDb[exKey] || { name: exKey };
        workoutList.innerHTML += `
            <div class="card" style="margin-bottom: 12px; background: var(--surface-variant);">
                <strong onclick="openExerciseDetail('${exKey}')" style="cursor: pointer; color: var(--accent-color);">${idx + 1}. ${exObj.name} 🎬</strong>
                <div style="display: flex; gap: 8px; margin-top: 8px; align-items: center;">
                    <label style="flex:1; font-size:12px;">Повторы: <input type="number" value="12" placeholder="12"></label>
                    <label style="flex:1; font-size:12px;">Вес (кг): <input type="number" value="0" placeholder="0"></label>
                    <button class="btn" style="width: auto; padding: 6px 12px; margin-top: 14px;" onclick="startRestTimer(90)">Отметить</button>
                </div>
            </div>
        `;
    });

    // Voice Plan Screen rendering exercises list
    const voiceExContainer = document.getElementById('voice-exercises-container');
    if (voiceExContainer) {
        voiceExContainer.innerHTML = state.voiceExercises.map((ex, i) => `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 4px 0;">
                <span>${i + 1}. ${ex}</span>
                <button class="btn btn-secondary" style="width: auto; padding: 2px 8px; font-size: 11px;" onclick="removeVoiceEx(${i})">Удалить</button>
            </div>
        `).join('');
    }

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

function openPlanDetail(planId) {
    const found = plansData.find(p => p.id === planId);
    if (found) {
        state.selectedPlanDetail = found;
        navigateTo('plan-detail');
    }
}

function activateSelectedPlan() {
    if (state.selectedPlanDetail) {
        state.activePlan = state.selectedPlanDetail;
        state.currentDayIndex = 0;
        render();
        alert('План успешно активирован!');
        navigateTo('home');
    }
}

function openExerciseDetail(exKey) {
    state.selectedExercise = exKey;
    navigateTo('exercise-detail');
}

function switchExVariant(exKey, variantIdx) {
    const ex = exercisesDb[exKey];
    if (ex && ex.variants[variantIdx]) {
        document.getElementById('ex-detail-img').src = ex.variants[variantIdx];
    }
}

function showAddExerciseModal() {
    const listDiv = document.getElementById('add-exercise-list');
    listDiv.innerHTML = '';
    Object.keys(exercisesDb).forEach(key => {
        const ex = exercisesDb[key];
        listDiv.innerHTML += `
            <div class="card" onclick="addExerciseToCurrentWorkout('${key}')" style="cursor: pointer; padding: 12px; margin-bottom: 8px;">
                <strong>${ex.name}</strong><br>
                <small style="color: var(--primary-color);">${ex.muscles.join(', ')}</small>
            </div>
        `;
    });
    navigateTo('add-exercise');
}

function addExerciseToCurrentWorkout(exKey) {
    const day = state.activePlan.days[state.currentDayIndex];
    if (day) {
        day.exercises.push(exKey);
        alert('Упражнение успешно добавлено в тренировку!');
        navigateTo('workout');
    }
}

function startVoiceRecognition() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        const manual = prompt("Голосовой ввод не поддерживается браузером. Введите название упражнения:", "Приседания");
        if (manual) {
            state.voiceExercises.push(manual);
            render();
        }
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'ru-RU';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
        const speechResult = event.results[0][0].transcript;
        state.voiceExercises.push(speechResult);
        render();
        alert(`Распознано: "${speechResult}"`);
    };

    recognition.onerror = (event) => {
        alert("Ошибка распознавания речи: " + event.error);
    };

    recognition.start();
}

function removeVoiceEx(index) {
    state.voiceExercises.splice(index, 1);
    render();
}

function saveVoicePlan() {
    const title = document.getElementById('voice-plan-title').value || "Мой план";

    const exKeys = state.voiceExercises.map(name => {
        const lower = name.toLowerCase();
        let matchedKey = "bench_press";
        if (lower.includes("присед") || lower.includes("ног")) matchedKey = "leg_press";
        else if (lower.includes("станов") || lower.includes("спин")) matchedKey = "deadlift";
        else if (lower.includes("жим лежа") || lower.includes("груд")) matchedKey = "bench_press";
        else if (lower.includes("наклон") || lower.includes("гантел")) matchedKey = "incline_db_press";
        else if (lower.includes("брус") || lower.includes("отжим")) matchedKey = "dips";
        else if (lower.includes("тяга") && lower.includes("верх")) matchedKey = "lat_pulldown";
        else if (lower.includes("тяга") && lower.includes("гориз")) matchedKey = "seated_row";
        else if (lower.includes("тяга")) matchedKey = "barbell_row";
        else if (lower.includes("пресс") || lower.includes("скруч")) matchedKey = "crunch";
        else if (lower.includes("бицепс") || lower.includes("сгиб")) matchedKey = "biceps_curls";
        else if (lower.includes("трицепс") || lower.includes("разгиб")) matchedKey = "triceps_pushdown";
        else if (lower.includes("плеч") || lower.includes("жим сид")) matchedKey = "overhead_press";
        else if (lower.includes("мах") || lower.includes("дельт")) matchedKey = "lat_raises";
        else if (lower.includes("гипер")) matchedKey = "hyperextension";
        else if (lower.includes("икр") || lower.includes("носк")) matchedKey = "calf_raises";
        else {
            const found = Object.keys(exercisesDb).find(k => exercisesDb[k].name.toLowerCase().includes(lower));
            if (found) matchedKey = found;
        }
        return matchedKey;
    });

    const newPlan = {
        id: "custom_" + Date.now(),
        titleRu: title,
        descriptionRu: "Создано с помощью голосового ввода",
        categoryRu: "🎙️ Пользовательские планы",
        days: [
            {
                dayNumber: 1,
                titleRu: title,
                focusRu: "Пользовательская тренировка",
                exercises: exKeys
            }
        ]
    };

    plansData.push(newPlan);
    state.activePlan = newPlan;
    state.currentDayIndex = 0;
    alert('План успешно создан и активирован!');
    navigateTo('workout');
}

function requestFinishWorkout() {
    if (confirm("Завершить тренировку и сохранить в дневник?")) {
        const day = state.activePlan.days[state.currentDayIndex];
        let tonnage = 0;
        day.exercises.forEach(() => {
            tonnage += 12 * 50 * 3;
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

    const p50 = Math.round(rm * 0.50);
    const p60 = Math.round(rm * 0.60);
    const p70 = Math.round(rm * 0.70);
    const p75 = Math.round(rm * 0.75);
    const p80 = Math.round(rm * 0.80);
    const p85 = Math.round(rm * 0.85);
    const p90 = Math.round(rm * 0.90);
    const p95 = Math.round(rm * 0.95);

    document.getElementById('rm-result').innerHTML = `
        Расчетный максимум (1RM): <strong>${rm} кг</strong><br><br>
        <div style="font-size: 13px; line-height: 1.6;">
            <strong>Таблица процентовки:</strong><br>
            • 95% (1-2 пов): <strong>${p95} кг</strong><br>
            • 90% (3-4 пов): <strong>${p90} кг</strong><br>
            • 85% (5-6 пов): <strong>${p85} кг</strong><br>
            • 80% (7-8 пов): <strong>${p80} кг</strong><br>
            • 75% (9-10 пов): <strong>${p75} кг</strong><br>
            • 70% (11-12 пов): <strong>${p70} кг</strong><br>
            • 60% (разминка): <strong>${p60} кг</strong><br>
            • 50% (разминка): <strong>${p50} кг</strong>
        </div>
    `;
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
