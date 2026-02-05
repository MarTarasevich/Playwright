## После клона репозитория
1 поставить npm

2 поставить библиотеки тестов
```bash
npm i -D @playwright/test
```


## Запуск теста в терминале

Staging 

```bash
npx playwright test testsStg/smoke.HDSA.ts --headed --workers=1  // hdsa stg home
```

Prod CC

```bash
npx playwright test testsProd/smoke.CC.ts --project=prod-tests --headed --workers=1 // cc find a match & select Blood and Lymph Diseases
```

<<<<<<<<<<<<<<<<<<<<All prod links >>>>>>>>>>>>>>>>

```bash
npx playwright test testsProd/smoke-theirDomain.ts --project=prod-tests --headed --workers=1 
```

Prod . Find check

```bash

```bash
npx playwright test testsProd/smoke.CC.match.ts --project=prod-tests --headed --workers=1 
```

```bash
npx playwright test testsProd/smoke.CC.NotMatch.ts --project=prod-tests --headed --workers=1 
```

```bash
npx playwright test smoke.CC.match.ts smoke.CC.notMatch.ts testsProd/smoke.CC.pre-scrn.NotMatchOtherMatch.ts --project=prod-tests --headed 
```bash

## Запустить ран с отчетом (все СС тесты)
```bash
npx playwright test smoke.CC.match.ts smoke.CC.notMatch.ts testsProd/smoke.CC.pre-scrn.NotMatchOtherMatch.ts --project=prod-tests --headed --reporter=html

npx playwright show-report
```bash


## Как запустить codegen
```bash
npx playwright codegen https://connect.careboxhealth.com/en-US

npx playwright test lilly-codegen.ts --project=lilly-stg --headed  
```

```bash
npx playwright test lilly-CTM-600156.ts --project=lilly-stg --headed          // not match
```