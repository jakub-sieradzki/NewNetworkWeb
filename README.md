# New Network Web App
Główne repozytorium projektu New Network.

## Rozpocznij pracę z kodem

### Instalacja potrzebnych programów
0. Zainstaluj [Visual Studio Code](https://code.visualstudio.com/).
1. Zainstaluj [Git](https://git-scm.com/downloads).
    * Podczas instalacji wybierz opcję "Use Visual Studio Code as Git's default editor".
2. Dodaj PHP'a do zmiennych środowiskowych Windows'a (wykorzystaj najnowszą wersję XAMPP'a z najnowszą wersją PHP'a). [Tutorial](https://ichi.pro/pl/dodaj-xampp-php-do-zmiennych-srodowiskowych-w-systemie-windows-10-192554782273742).
3. Zainstaluj [Composer](https://getcomposer.org/download/).
4. Zainstaluj [Node.js](https://nodejs.org/en/) (Wersja LTS!).

### Przygotowanie i uruchomienie projektu
0. W VS Code sklonuj to repo: https://github.com/jakub-sieradzki/NewNetworkWeb.git
1. W strukturze projektu odnajdź plik **.env.example**, utwórz jego kopię, a następnie zmień nazwę skopiowanego pliku na **.env**
2. Wykonaj następujące komendy w terminalu VS Code:
    1. **composer install**
    2. **npm install**
    3. **php artisan key:generate**
3. W celu kompilacji plików projektu użyj komendy: **npm run dev** (kompilacja jednorazowa) lub **npm run watch** (obserwuje na bieżąco zmiany w plikach i automatycznie je kompiluje) - opcja rekomendowana.
4. Otwórz nowy terminal w VS Code i wykonaj komendę **php artisan serve** - uruchamia ona serwer www na którym bedziesz mógł zobaczyć skompilowaną stronę New Network.

## Pomocne linki
- [The Net Ninja](https://www.youtube.com/c/TheNetNinja) - tutoriale technologii webowych
- [Dokumentacja Laravela](https://laravel.com/docs/8.x)
- [Dokumentacja Vue.js](https://v3.vuejs.org/)

### Jesteś gotowy na budowanie nowej platformy społecznościowej 🏗️ Miłej pracy, byczq 💪
