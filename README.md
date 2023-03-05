[![Netlify Status](https://api.netlify.com/api/v1/badges/38b1d472-134d-4a6b-b534-a1549db6491f/deploy-status)](https://app.netlify.com/sites/astounding-mousse-70c52e/deploys)

# Собственная реализация игры "Сапёр". [Netlify](https://astounding-mousse-70c52e.netlify.app/)

Стек: React, TypeScript. Доп. библиотеки: nanoid, classnames

# Общее описание функциональности 

- поле 16х16 клеток, 40 мин
- слева счётчик мин от 40 до нуля, справа секундомер (от 0 до 999)
- первый клик никогда не будет по мине, т.к. они расставляются после него, исключаю данную ячейку. Запускается секундомер
- если рядом с открытым полем есть другие поля без мин поблизости, они открываются автоматически
- правая клавиша ставит флажок - предполагаемое место имени (для подсказки в консоль выводится все состояние матрицы)
- второй клик правой клавишей устанавливает вопросительный знак, третий снимает выделения
- клик по смайлику перезапускает игру
- испуганный смайлик - во время нажатия на ячейку, но еще не отпустили
- при проигрыше смайлик заменяется на грустный, раскрывается карта мин
- `победой` считывает, открытие всех ячеек и отметка на всех минах флажком
- после победы смайлик надевает солнечные очки, секундомер останавливается

# Как запустить:

- `npm install` — установка зависимостей,
- `npm run start` — запуск версии для разработчика,
- `npm run build` — сборка продакт версии.
