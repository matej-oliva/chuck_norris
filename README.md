# Chuck Norris Jokes Generator

---

This app was created as a project for job application. It fetches jokes from <https://api.chucknorris.io/> and displays them as simple text.
Deployed to Vercel: <https://chuck-norris-beta.vercel.app/>

## Available Scripts

- `yarn start` - for development runtime
- `yarn build` - for production runtime
- `yarn test` - for test runtime
- `yarn prettier` - to overwrite all files with prettier rules

## Tech stack

### Frameworks

- [x] React
- [x] MUI
- [x] Jest
- [x] Redux

### Libraries

- [x] @emotion/react
- [x] @emotion/styled
- [x] @mui/icons-material
- [x] @mui/material
- [x] @reduxjs/toolkit
- [x] @testing-library/jest-dom
- [x] @testing-library/react
- [x] @testing-library/user-event
- [x] eslint-plugin-react
- [x] lodash
- [x] prettier
- [x] react
- [x] react-dom
- [x] react-redux
- [x] react-scripts
- [x] redux

## Assignment [cs_CZ]

**React, Redux, Material-ui**
Zadání domácího úkolu

### Cíl

Cílem je vytvořit, dle níže uvedených požadavků, aplikaci (SPA), která na základě požadavků uživatele zobrazí vtip/moudro Chucka Norrise. Na prvním místě se hodnotí funkční zpracování, následně design (fantazii a propracování se ovšem meze nekladou:)).

### Doporučení

Přestože je úkol rozsahem velmi malý, doporučujeme k němu přistupovat, jakoby se jednalo o velký projekt. Takový pohled by měl mít vliv na adresářovou strukturu vytvářeného projektu, modularizaci komponent, znovupoužitelnost, rozšiřitelnost kódu a také využití knihoven, které by se běžně pro realizaci nezvolily.

Vypracování úkolu by nemělo trvat déle než 12 hodin čistého času. Tento čas by měl sloužit jako vodítko k míře realizačního detailu.

### Uživatelské požadavky

- Jako uživatel chci, po příchodu na stránku aplikace, vždy vidět jeden a pouze jeden Chuckův vtip.

  - Jakákoliv interakce vedoucí k získání dalšího vtipu, přepisuje naposledy zobrazený vtip.

- Jako uživatel chci, podle zadaného řetězce, vyhledat a zobrazit náhodný Chuckův vtip, obsahující zadaný řetězec.

  - Jako uživatel chci být informován, pokud takový neexistuje.

- Jako uživatel chci mít možnost, vybrat si náhodný Chuckův vtip dle jeho kategorie.

  - Seznam kategorií se získá a určuje API.

  - Jako uživatel chci vědět, že se mi zobrazuje vtip z dané kategorie.

### Technické požadavky

Předvést schopnost otestovat zvolenou část kódu / funkcionality. Testovací engine/framework dle vlastní preference.

Měly by být tvořeny funkcionální komponenty. Měla by být použita ES6 (a novější) syntaxe. Aplikace by neměla obsahovat errory ani warningy v devtools konzoli.

Povinné zakomponování knihoven: React (pochopitelně:)), Material-UI (UI), Redux (state management, např. pro vtip, vybranou kategorii atd.)

Preference (ne nutnost) techniky CSS-in-JS (styled-components, emotion, sx, apod.)

Volitelné balíčky/knihovny: ramda, @reduxjs/toolkit, jakékoliv další po vlastním zvážení.

Volitelně linter + prettier. Pro vytvoření projektu je možné použít jakýkoliv React starter kit.

API: <https://api.chucknorris.io/>

bundler: Webpack

package manager: Yarn

Projekt musí být možné spustit lokálně (_yarn start_).
