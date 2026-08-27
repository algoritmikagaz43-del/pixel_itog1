// Ждем полной загрузки структуры страницы
document.addEventListener('DOMContentLoaded', function() {

    /* --- ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ --- */
    let total_price = 0;
    let cart_items_count = document.querySelector('.cart-amount');
    let add_to_cart_buttons = document.querySelectorAll('.add-to-cart-btn');
    let cart_button = document.querySelectorAll('.nav-item')[4];
    let cart_button_text = cart_button.querySelector('.cart-text');

    /* --- ДАННЫЕ ТОВАРОВ --- */
    let item_names = ['Пиксельная кисть', 'Массивный ластик', 'VGA Палитра', '8-bit Шейдеры'];
    let item_descriptions = [
        'Для рисования идеальных квадратов.', 
        'Стирает сразу блоки 16x16.', 
        'Классические 16 цветов.',
        'Эффекты помех CRT-монитора.'
    ];
    let item_prices = [490, 290, 190, 990];

    /* --- ИНИЦИАЛИЗАЦИЯ СТРАНИЦЫ --- */
    applyItemData();
    setupTeamHeight();

    /* --- СКРОЛЛ КНОПКА (теперь ошибки не будет) --- */
    const downBtn = document.getElementById('downBtn');
    if (downBtn) { // Дополнительная проверка безопасности
        downBtn.onclick = () => window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
    }

    /* --- ОСТАЛЬНОЙ ВАШ КОД (корзина, расчет цены, тема) --- */
    // ... остальной код функций applyItemData, setupTeamHeight и т.д. ...
});
