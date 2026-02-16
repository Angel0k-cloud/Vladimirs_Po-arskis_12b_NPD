# Restorāna rezervācija

## Projekta apraksts
Šis ir vienkāršs, klientam draudzīgs tīmekļa risinājums restorāna galdiņa rezervēšanai. Lietotājs ievada rezervācijas datus (vārdu, cilvēku skaitu, datumu, laiku un zāli), un sistēma uzreiz parāda apstiprinājumu vai kļūdas paziņojumu.

Projekts veidots ar **HTML + CSS + JavaScript** un darbojas bez servera (tikai pārlūkā).

## Funkcionalitātes skaidrojums
- **Ievades forma rezervācijai**: vārds, cilvēku skaits (1–30), datums, laiks, zāle (iekšā/terase).
- **Datu validācija**:
  - Vārds: vismaz 2 simboli.
  - Cilvēku skaits: skaitlis no 1 līdz 30.
  - Datums: nevar būt pagātnē (date laukam automātiski tiek uzlikts minimālais datums – šodiena).
  - Laiks: obligāti jāizvēlas.
- **Rezultāta paziņojumi**:
  - Veiksmīga rezervācija (zaļš paziņojums).
  - Brīdinājums lielām grupām:
    - no 8 cilvēkiem – var būt nepieciešams priekšapmaksas apstiprinājums;
    - no 12 cilvēkiem – ieteikums apstiprināt pa tālruni.
  - Kļūdas paziņojums ar uzskaitītām problēmām (sarkans paziņojums).
- **Lauku izcelšana kļūdu gadījumā**: kļūdainie lauki tiek vizuāli iezīmēti (sarkana apmale/ēna).
- **Dizains un pielāgojamība**:
  - Moderns, “card” stila izkārtojums ar hero bloku.
  - Responsīvs režģis (uz mazākiem ekrāniem lauki pārkārtojas vienā kolonnā).

## Lietošanas instrukcija
1. Lejupielādē/atver projekta mapi, kurā atrodas faili:
   - `index.html`
   - `style.css`
   - `script.js`
2. Atver `index.html` jebkurā modernā pārlūkā (Chrome/Edge/Firefox).
   - Ja strādā ar VS Code, vari izmantot paplašinājumu **Live Server**, lai ērtāk testētu izmaiņas.
3. Aizpildi laukus:
   - **Rezervācija uz vārda** (piemēram, “Anna Ozola”)
   - **Cilvēku skaits**
   - **Datums**
   - **Laiks**
   - **Zāle** (iekšā vai terase)
4. Nospied **“Rezervēt”**.
5. Pārbaudi rezultātu:
   - Ja dati ir korekti — saņemsi apstiprinājumu (vai brīdinājumu lielām grupām).
   - Ja ir kļūdas — redzēsi detalizētu kļūdas paziņojumu, un problemātiskie lauki būs iezīmēti.

## Failu struktūra
- `index.html` — lapas struktūra un rezervācijas forma
- `style.css` — vizuālais noformējums, responsīvais izkārtojums, kļūdu stili
- `script.js` — validācija, paziņojumu ģenerēšana un notikumu apstrāde
