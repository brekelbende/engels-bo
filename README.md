# Woordjes Memory

Oefenspel voor Engelse woordjes (Engels → Nederlands), in de browser.

- **Memory**: Engelse kaarten links, Nederlands (of plaatjes/zinnen) rechts.
- **Quiz**: meerkeuze Engels → Nederlands, met hints (plaatje of zin) en optionele aftelklok.
- Woorden worden in het Engels voorgelezen; records worden in de browser bewaard.

## Spelen

Open `index.html` in Safari of Chrome, of via GitHub Pages.

## Nieuwe woordjes toevoegen

1. Voeg in `words.js` een nieuw blok toe, bijvoorbeeld `u3: [ ... ]`, met per woord:
   `["english", "nederlands", "Voorbeeldzin met **english** erin.", "🙂🎈"]`
2. Voeg in `index.html` bij "Welke woordjes?" een knop toe met `data-list="u3"`.
