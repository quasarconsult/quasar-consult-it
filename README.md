# Quasar — sito Italia

Sito vetrina per **quasar-consulting.com**.
HTML statico generato da un piccolo script Node — nessuna dipendenza, solo Node 18+.

## Modificare i contenuti
Tutti i testi sono in **`content.mjs`**. Modifica e rigenera le pagine:

```sh
node build.mjs
```

## Anteprima locale
```sh
PORT=5057 node serve.mjs    # apri http://localhost:5057
```

## File
- `content.mjs` — testi del sito
- `build.mjs` — generatore delle pagine
- `serve.mjs` — server statico locale
- `assets/` — CSS, JS, immagini
- `*.html` — output generato (incluso nel repo, pronto al deploy)

## Deploy
**Cloudflare Pages** (direct upload) — carica i file `*.html` + `assets/`.
