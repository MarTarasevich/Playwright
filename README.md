## После клона репозитория
1 поставить npm

2 поставить библиотеки тестов
```bash
npm i -D @playwright/test
```


## Запуск теста в терминале

```bash
npx playwright test tests/smoke.spec.ts --headed --workers=1  // hdsa stg home

npx playwright test testsProd/smoke.CC.ts --project=prod-tests --headed --workers=1 // cc find a match & select Blood and Lymph Diseases

npx playwright test testsProd/smoke-all.ts --project=prod-tests --headed --workers=1 

npx playwright test testsProd/smoke.CC.match.ts --project=prod-tests --headed --workers=1 
```


## Как запустить codegen
```bash
npx playwright codegen https://connect.careboxhealth.com/en-US
```

