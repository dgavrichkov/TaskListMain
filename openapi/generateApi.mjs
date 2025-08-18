// scripts/generateApi.mjs
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';
import { generateApi } from 'swagger-typescript-api';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// === настройки ===
// можно прокинуть URL спецификации через переменную окружения OPENAPI_URL,
// либо путь к локальному файлу openapi.json через OPENAPI_PATH
const OPENAPI_URL = process.env.OPENAPI_URL || 'http://localhost:3000/api-json';
const OPENAPI_PATH = process.env.OPENAPI_PATH || '';

const OUTPUT_DIR = path.resolve(process.cwd(), 'src/shared/api/generated');
// const OUTPUT_NAME = 'api-types.ts';

// гарантируем, что папка существует
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

const input = OPENAPI_PATH ? { input: OPENAPI_PATH } : { url: OPENAPI_URL };

console.log('[api-codegen] generating types from', OPENAPI_PATH || OPENAPI_URL);
console.log('[api-codegen] output:', path.join(OUTPUT_DIR));

try {
  await generateApi({
    // name: OUTPUT_NAME,
    output: OUTPUT_DIR,
    // источник спецификации:
    ...input,

    // === главное: только типы, без клиента ===
    generateClient: false, // = --no-client
    responses: true,
    routeTypes: true, // = --route-types
    extractRequestParams: true, // = --extract-request-params
    extractRequestBody: true, // = --extract-request-body
    unionEnums: true, // = --union-enums
    sortTypes: true,

    // доп. поведение (по желанию):
    modular: true,
    cleanOutput: true, // чистить папку перед генерацией
    // hooks: {},                   // сюда можно добавить пост-обработку при желании
  });

  console.log('[api-codegen] done ✓');
} catch (e) {
  console.error('[api-codegen] failed:', e?.message || e);
  process.exit(1);
}
