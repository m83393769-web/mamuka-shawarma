// ============================================
// ПОДКЛЮЧЕНИЕ К SUPABASE
// ============================================

// 🔥 ВСТАВЬ СЮДА СВОИ КЛЮЧИ ИЗ НАСТРОЕК SUPABASE
const SUPABASE_URL = 'https://piydhopdtderqbqjrwlh.supabase.co';  // Project URL
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpeWRob3BkdGRlcnFicWpyd2xoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE3ODc1NjgsImV4cCI6MjA4NzM2MzU2OH0.PCneHkgVleoL6JP1AFKF9B4izhKqtTh2vTgjGmJ7bP8';               // anon public

// Проверяем, что библиотека загружена
if (typeof supabase === 'undefined') {
    console.error('❌ Библиотека Supabase не загружена! Добавь <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>');
}

// Создаём клиент
const supabaseClient = supabase?.createClient 
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

// Функция проверки подключения
async function checkConnection() {
    if (!supabaseClient) {
        console.error('❌ Supabase клиент не создан');
        return false;
    }
    
    try {
        const { data, error } = await supabaseClient.from('menu').select('count', { count: 'exact', head: true });
        if (error) throw error;
        console.log('✅ Supabase подключен!');
        return true;
    } catch (e) {
        console.error('❌ Ошибка подключения:', e);
        return false;
    }
}

// Запускаем проверку
checkConnection();