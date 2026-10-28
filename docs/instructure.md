# SaaS Project Management Platform — loyihaning to‘liq rejasi

Menimcha, bu sen uchun juda yaxshi tanlov. Chunki sen React va Express bilimlaringni amaliyotda mustahkamlashing, haqiqiy biznes mahsuloti yaratishing va keyinchalik Next.js hamda NestJS'ga o‘tishing mumkin.

Lekin biz shunchaki Task Manager yaratmaymiz. **Biz haqiqiy jamoalar foydalanishi mumkin bo‘lgan, professional ko‘rinishga ega SaaS mahsulot yaratamiz.**

Loyihani ishlab chiqish davomida sen:
- React va TypeScript bilan murakkab interfeyslar yaratish;
- Express.js orqali tartibli backend qurish;
- PostgreSQL va Prisma bilan ishlash;
- Authentication, authorization va multi-tenancy'ni amalga oshirish;
- Real-time funksiyalarni ishlab chiqish;
- Test yozish va xavfsizlikni ta'minlash;
- Loyihani production'ga chiqarish;
- Haqiqiy texnik muammolarni mustaqil hal qilish

kabi ko‘nikmalaringni amalda rivojlantirasan.

Quyida loyihani g‘oyadan boshlab, ishlab chiqarishga tayyor mahsulotgacha olib borish uchun batafsil reja beraman.

---

# 1. Loyihaning g‘oyasi nima?

Vaqtinchalik nomini **TaskFlow** deb olamiz. Keyinchalik o‘zing boshqa nom tanlashing mumkin.

TaskFlow — kompaniyalar, dasturchilar, dizaynerlar va boshqa jamoalar o‘z loyihalarini, vazifalarini va ish jarayonlarini boshqarishi uchun mo‘ljallangan SaaS platforma.

U quyidagi mahsulotlarga o‘xshash konsepsiyalardan ilhom olishi mumkin:



- Linear — tezkor ish jarayonlari va task boshqaruvi.
- ClickUp — vazifalar, loyihalar va jamoaviy hamkorlik.
- Asana — loyihalar, vazifalar va jamoalar boshqaruvi.

**Muhim:** biz ulardan birini aynan ko‘chirmaymiz. Ularning yaxshi yechimlarini o‘rganib, o‘zimizning mustaqil mahsulotimizni yaratamiz.

## Muammoni qanday hal qiladi?

Tasavvur qil, 8 nafar dasturchidan iborat jamoa bor.

Ular turli loyihalar ustida ishlaydi. Vazifalar Telegram'da, muddatlar Google Sheets'da, muhokamalar esa turli joylarda saqlanadi.

Natijada:
- Kim nima ustida ishlayotgani noma'lum.
- Vazifalar unutiladi.
- Muddatlar kechikadi.
- Rahbar loyiha holatini tezda bilolmaydi.
- Jamoa a'zolari bir-birining ishidan xabardor bo‘lmaydi.

TaskFlow bu jarayonlarni bitta platformaga birlashtiradi.

Masalan, loyiha rahbari yangi vazifa yaratadi, uni dasturchiga biriktiradi va muddat belgilaydi. Dasturchi vazifani bajaradi, izoh yozadi, kerakli faylni biriktiradi va statusni o‘zgartiradi. Rahbar esa barcha jarayonlarni dashboard orqali kuzatadi.

Bu — mahsulotning asosiy qiymati.

---

# 2. Mahsulotni kimlar ishlatadi?

Loyihani yaratishdan oldin uning foydalanuvchilarini aniqlab olamiz.

| Foydalanuvchi | Vazifasi |
|---|---|
| Founder / Owner | Tashkilotni yaratadi va umumiy boshqaradi |
| Admin | A'zolar, ruxsatlar va sozlamalarni boshqaradi |
| Project Manager | Loyihalar va vazifalarni boshqaradi |
| Developer / Designer | O‘z vazifalarini bajaradi va yangilaydi |
| Viewer | Loyihalarni ko‘radi, lekin o‘zgartira olmaydi |

Bularni bir-biridan ajratish uchun role-based access control — RBAC tizimidan foydalanamiz.

Masalan, Developer boshqa a'zolarni tashkilotdan chiqarib yubora olmasligi kerak. Viewer esa taskni o‘zgartira olmasligi kerak.

Bunday cheklovlar faqat interfeysda emas, **backend'da ham tekshirilishi shart.**

## SaaS degani nima?

SaaS — Software as a Service.

Bu foydalanuvchi dasturdan internet orqali foydalanadigan va odatda obuna asosida to‘lov qiladigan biznes modelidir.

TaskFlow'ning SaaS modelida:

- Foydalanuvchi ro‘yxatdan o‘tadi.
- O‘z tashkilotini yaratadi.
- Jamoa a'zolarini taklif qiladi.
- Loyihalar yaratadi.
- Bepul yoki pullik tarifdan foydalanadi.

Dastlab billing va pullik obunalarni amalga oshirish shart emas. Avval mahsulotning asosiy funksiyalarini sifatli ishlab chiqamiz. Obuna tizimini keyingi bosqichda qo‘shish mumkin.

# 3. Loyihaning funksional imkoniyatlari

Loyihani boshidan oxirigacha bir urinishda yozmaymiz. Uni modullarga ajratamiz.

Men funksiyalarni uchta darajaga bo‘lgan bo‘lardim:

- **MVP:** mahsulotning birinchi ishlaydigan versiyasi.
- **V1:** portfolio uchun professional, to‘liqroq mahsulot.
- **V2:** real foydalanuvchilar va biznes uchun ilg‘or imkoniyatlar.

## 3.1. Authentication — foydalanuvchilar tizimi

Foydalanuvchilar quyidagi imkoniyatlarga ega bo‘lishi kerak:

- Ro‘yxatdan o‘tish.
- Login va logout.
- Email orqali akkauntni tasdiqlash.
- Parolni tiklash.
- Profilni tahrirlash.
- Profil rasmi yuklash.
- Sessiyalarni boshqarish.
- Boshqa qurilmalardagi sessiyalarni bekor qilish.

### Muhim texnik qarorlar

Parollarni ochiq matn ko‘rinishida saqlamaymiz. Ularni Argon2id yoki boshqa mos, zamonaviy password-hashing algoritmi bilan hash qilamiz.

Authentication uchun ikki yondashuvdan birini tanlash mumkin:

1. Server tomonidan boshqariladigan session va `HttpOnly` cookie.
2. Access token va refresh token asosidagi tizim.

Ushbu loyiha uchun men xavfsiz cookie asosidagi session yondashuvini yoki puxta ishlab chiqilgan access/refresh token tizimini tanlagan bo‘lardim. Ikkalasini birdaniga qo‘shish shart emas.

Agar refresh token ishlatsang, uning muddati, bekor qilinishi, qayta ishlatilishi va o‘g‘irlangan token bilan bog‘liq holatlarni ham hisobga olishing kerak.

## 3.2. Organization va Team Management

Bu loyihaning eng muhim modullaridan biri.

Foydalanuvchi tashkilot yaratadi va boshqalarni taklif qiladi.

Masalan:

**Organization:** TechNova

**Teams:**
- Frontend Team
- Backend Team
- Design Team

Har bir tashkilot o‘z loyihalari, a'zolari va ma'lumotlariga ega bo‘ladi.

Funksiyalar:

- Organization yaratish.
- Organization nomi va logotipini o‘zgartirish.
- A'zolarni email orqali taklif qilish.
- Taklifni qabul qilish yoki rad etish.
- A'zolar rollarini o‘zgartirish.
- A'zoni tashkilotdan chiqarish.
- Organization ichida teamlar yaratish.
- Organization'ni tark etish.

### Multi-tenancy nima?

Bu yerda muhim arxitektura qarori bor.

Tasavvur qil:

- TechNova kompaniyasida 20 ta loyiha bor.
- WebStudio kompaniyasida 10 ta loyiha bor.

TechNova foydalanuvchisi WebStudio loyihalarini ko‘ra olmasligi kerak.

Buning uchun dastlab **shared database + shared schema** modelidan foydalanamiz. Ya'ni tashkilotlar bitta PostgreSQL database va bir xil jadvallardan foydalanadi, lekin tegishli ma'lumotlar `organizationId` orqali ajratiladi.

Masalan:

```text
Organization
  ├── Members
  ├── Teams
  └── Projects
       ├── Tasks
       ├── Comments
       └── Attachments
```

Har bir so‘rovda foydalanuvchining tashkilotga a'zoligi va tegishli resursga kirish huquqi tekshirilishi shart.

**Muhim:** frontend'dan kelgan `organizationId` qiymatiga ko‘r-ko‘rona ishonma. Foydalanuvchi boshqa tashkilotning ID'sini yuborib, uning ma'lumotlarini ola olmasligi kerak.

## 3.3. Project Management

Foydalanuvchilar tashkilot ichida loyihalar yaratishi mumkin.

Har bir loyiha quyidagi ma'lumotlarga ega bo‘ladi:

- Nomi.
- Tavsifi.
- Statusi.
- Priority.
- Boshlanish sanasi.
- Tugash muddati.
- Project manager.
- Loyiha a'zolari.
- Vazifalar.
- Faoliyat tarixi.

Loyihalar uchun quyidagi statuslardan foydalanish mumkin:

`PLANNING → ACTIVE → ON_HOLD → COMPLETED`

Bu statuslar loyihaning biznes jarayoniga mos ravishda belgilanadi.

Qo‘shimcha funksiyalar:

- Loyihani tahrirlash.
- Loyihani arxivlash.
- Loyiha a'zolarini boshqarish.
- Loyiha bo‘yicha progress ko‘rsatish.
- Loyiha ichidan vazifalarni qidirish.
- Loyiha faoliyatini ko‘rish.

## 3.4. Task Management

Bu platformaning markaziy moduli.

Har bir task quyidagi maydonlarga ega bo‘lishi mumkin:

| Maydon | Vazifasi |
|---|---|
| `id` | Task identifikatori |
| `title` | Vazifa nomi |
| `description` | Batafsil tavsif |
| `status` | Vazifa holati |
| `priority` | Muhimlik darajasi |
| `assigneeId` | Vazifa biriktirilgan foydalanuvchi |
| `reporterId` | Vazifani yaratgan foydalanuvchi |
| `projectId` | Vazifa tegishli bo‘lgan loyiha |
| `dueDate` | Bajarish muddati |
| `position` | Kanban ichidagi tartibi |
| `createdAt` | Yaratilgan vaqt |
| `updatedAt` | Oxirgi o‘zgarish vaqti |

Statuslar:

- `BACKLOG`
- `TODO`
- `IN_PROGRESS`
- `IN_REVIEW`
- `DONE`

Priority:

- `LOW`
- `MEDIUM`
- `HIGH`
- `URGENT`

Funksiyalar:

- Task yaratish.
- Tahrirlash va o‘chirish.
- Taskni boshqa foydalanuvchiga biriktirish.
- Muddat belgilash.
- Priority'ni o‘zgartirish.
- Izohlar yozish.
- Fayllar biriktirish.
- Tasklarni filterlash va saralash.
- Tasklar bo‘yicha qidirish.
- Task tarixini ko‘rish.

### Kanban board

Foydalanuvchi vazifalarni ustunlar orasida sudrab ko‘chira olishi kerak.

Masalan:

| To Do | In Progress | In Review | Done |
|---|---|---|---|
| Login UI | API integratsiyasi | Dashboard UI | Database schema |
| Register page | Task API | Navbar | Auth API |

Bu yerda drag-and-drop faqat frontend'dagi elementni ko‘chirish bilan tugamaydi. Yangi status va tartib backend'da ham saqlanishi kerak.

Bir nechta foydalanuvchi bir vaqtda ishlayotganida ham ma'lumotlar izchil qolishi uchun keyinchalik optimistic updates, real-time eventlar va kerakli joylarda concurrency nazoratini qo‘shish mumkin.

## 3.5. Comments va Activity Log

Task ustida jamoaviy ishlash uchun izohlar kerak.

Masalan:

> Developer: Login API tayyor bo‘ldi.

> Project Manager: Refresh token mexanizmini ham tekshirib ko‘ring.

Bundan tashqari, Activity Log quyidagi hodisalarni saqlaydi:

- Task yaratildi.
- Status o‘zgartirildi.
- Priority yangilandi.
- Vazifa boshqa foydalanuvchiga biriktirildi.
- Muddat o‘zgartirildi.

Bu yerda izohlar va faoliyat tarixini alohida modellar sifatida ko‘rish maqsadga muvofiq.

Activity Log'ni oddiy matnli yozuv sifatida emas, hodisa turi, uni bajargan foydalanuvchi, tegishli resurs va vaqt bilan saqlash foydali.

## 3.6. Notification System

Foydalanuvchiga quyidagi holatlarda bildirishnoma yuboriladi:

- Yangi task biriktirilganda.
- Task'ga izoh yozilganda.
- Muddat o‘zgartirilganda.
- Foydalanuvchi jamoaga taklif qilinganda.
- Task muddati yaqinlashganda.

Dastlab ilova ichidagi bildirishnomalarni yaratamiz.

Keyinchalik quyidagilarni qo‘shish mumkin:

- Real-time notification.
- Email notification.
- Background jobs.
- Bildirishnomalarni o‘qilgan deb belgilash.
- Notification preferences.

Barcha bildirishnomalarni har bir HTTP so‘rovi ichida sinxron yuborish shart emas. Email va boshqa uzoqroq vazifalarni keyinchalik queue orqali qayta ishlash mumkin.

## 3.7. Dashboard va Analytics

Dashboard foydalanuvchiga loyiha holatini tezda tushunishga yordam beradi.

Unda quyidagi ko‘rsatkichlar bo‘lishi mumkin:

- Jami loyihalar.
- Faol loyihalar.
- Jami vazifalar.
- Bajarilgan vazifalar.
- Muddati o‘tgan vazifalar.
- Foydalanuvchi bo‘yicha vazifalar.
- So‘nggi faoliyat.
- Haftalik progress.

Bu ko‘rsatkichlar shunchaki frontend'da hisoblanmasligi kerak. Ma'lumotlar backend'dan to‘g‘ri olinishi, kerak bo‘lsa database query'lari optimallashtirilishi lozim.

---

# 4. MVP, V1 va V2 — nimani qachon quramiz?

Loyihani haddan tashqari kattalashtirib yubormaslik uchun aniq chegaralar belgilaymiz.

| Funksiya | MVP | V1 | V2 |
|---|:---:|:---:|:---:|
| Authentication | ✓ | ✓ | ✓ |
| Organization | ✓ | ✓ | ✓ |
| Organization a'zolari | ✓ | ✓ | ✓ |
| RBAC | Asosiy | To‘liqroq | Kengaytirilgan |
| Project CRUD | ✓ | ✓ | ✓ |
| Task CRUD | ✓ | ✓ | ✓ |
| Kanban board | ✓ | ✓ | ✓ |
| Search va filter | Asosiy | Kengaytirilgan | Kengaytirilgan |
| Comments | — | ✓ | ✓ |
| Activity log | — | ✓ | ✓ |
| Notifications | — | ✓ | ✓ |
| Real-time updates | — | Asosiy | Kengaytirilgan |
| File attachments | — | ✓ | ✓ |
| Dashboard analytics | Asosiy | ✓ | Kengaytirilgan |
| Email reminders | — | — | ✓ |
| Billing | — | — | ✓ |
| Integrations va API keys | — | — | ✓ |

Bu jadval qat'iy qoida emas. Agar biror funksiya boshqa funksiyaning ishlashi uchun zarur bo‘lsa, uni oldinroq amalga oshirish mumkin.

**Mening tavsiyam:** avval MVP'ni oxirigacha yetkaz. Lekin kodni keyinchalik V1 funksiyalarini qo‘shish mumkin bo‘lgan tarzda tuz.

---

# 5. Texnologiyalar stack'i

Sening hozirgi maqsading React va Express orqali real tajriba orttirish bo‘lgani uchun dastlab shu stack'dan foydalanamiz.

## Frontend

| Texnologiya | Nima uchun kerak? |
|---|---|
| React | Interfeys yaratish |
| TypeScript | Kodda turlar xavfsizligini ta'minlash |
| Vite | Development va build jarayoni |
| Tailwind CSS | UI dizayn |
| shadcn/ui | Qayta ishlatiladigan UI komponentlari |
| React Router | Sahifalar orasida navigatsiya |
| TanStack Query | Server ma'lumotlari va cache boshqaruvi |
| Zustand | Zarur bo‘lganda global client state |
| React Hook Form | Formalarni boshqarish |
| Zod | Ma'lumotlarni tekshirish |
| dnd-kit | Kanban uchun drag-and-drop |
| Socket.IO Client | Real-time aloqa |
| Vitest + React Testing Library | Frontend testlari |

React va TypeScript bo‘yicha rasmiy qo‘llanmalarni [React dokumentatsiyasi](https://react.dev/learn?utm_source=chatgpt.com) va [React + TypeScript qo‘llanmasi](https://react.dev/learn/typescript?utm_source=chatgpt.com) orqali ko‘rishing mumkin.

**Muhim qaror:** Redux Toolkit'ni faqat zamonaviy stack ishlatayotganingni ko‘rsatish uchun qo‘shma. Agar Zustand sening client state ehtiyojlaringni qondirsa, ikkala kutubxonani bir vaqtda ishlatish shart emas.

Xuddi shuningdek, TanStack Query serverdan kelgan ma'lumotlar uchun, Zustand esa umumiy client state uchun ishlatilishi mumkin. Ularning vazifalarini bir-biriga aralashtirmaslik kerak.

## Backend

| Texnologiya | Nima uchun kerak? |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API va middleware |
| TypeScript | Backend kodini tiplash |
| PostgreSQL | Asosiy ma'lumotlar bazasi |
| Prisma ORM | Database bilan ishlash |
| Zod | Request ma'lumotlarini tekshirish |
| Argon2id | Parollarni xavfsiz hash qilish |
| Cookie/session yoki token tizimi | Authentication |
| Socket.IO | Real-time hodisalar |
| Redis | Keyinchalik cache va boshqa vazifalar |
| BullMQ | Keyinchalik background jobs |
| Vitest yoki Jest + Supertest | Backend testlari |
| Swagger / OpenAPI | API hujjatlari |

Express'ning routing, middleware va error handling imkoniyatlarini rasmiy [Express qo‘llanmasi](https://expressjs.com/guide/?utm_source=chatgpt.com) orqali o‘rganishing mumkin. Database va Prisma bilan ishlash uchun [Prisma rasmiy hujjatlari](https://www.prisma.io/docs?utm_source=chatgpt.com) mavjud.

Redis va BullMQ'ni birinchi kundanoq qo‘shish shart emas. Dastlab loyihaning asosiy biznes jarayonlari ishlasin. Keyin real ehtiyoj paydo bo‘lgan joylarda ularni qo‘shamiz.

## Infrastructure

- Git va GitHub.
- Docker.
- GitHub Actions orqali CI.
- Frontend va backend uchun hosting.
- PostgreSQL hosting.
- Environment variables.
- Logging va monitoring.

Bularning hammasini birinchi haftada sozlash shart emas. Lekin loyihani yakunda production'ga chiqarishni rejaning bir qismi deb hisobla.

---

# 6. Database arxitekturasi

Endi eng muhim qismlardan biriga o‘tamiz.

Yaxshi loyihada database modeli tasodifiy yaratilmaydi. Avval asosiy obyektlar va ularning o‘zaro munosabatlarini aniqlaymiz.

## 6.1. Asosiy jadvallar

Dastlab quyidagi modellar yetarli bo‘ladi:

| Model | Vazifasi |
|---|---|
| `User` | Foydalanuvchilar |
| `Session` | Foydalanuvchi sessiyalari, agar session-based auth tanlansa |
| `Organization` | Tashkilotlar |
| `OrganizationMember` | Tashkilot va foydalanuvchi munosabati |
| `Invitation` | Jamoaga takliflar |
| `Team` | Jamoalar |
| `TeamMember` | Jamoa a'zolari |
| `Project` | Loyihalar |
| `ProjectMember` | Loyiha a'zolari |
| `Task` | Vazifalar |
| `Comment` | Vazifa izohlari |
| `Attachment` | Fayllar haqidagi metadata |
| `ActivityLog` | Faoliyat tarixi |
| `Notification` | Bildirishnomalar |

Keyinchalik `Label`, `TaskLabel`, `Checklist`, `ChecklistItem` va boshqa modellarni qo‘shish mumkin.

Barcha modellarni birinchi kundanoq yaratib tashlash kerak emas. Avval MVP uchun kerakli modellarni ishlab chiqamiz.

## 6.2. Munosabatlar qanday bo‘ladi?

Soddalashtirilgan ko‘rinishda:

```text
User
 ├── OrganizationMember
 │       └── Organization
 │              ├── Team
 │              └── Project
 │                    ├── ProjectMember
 │                    └── Task
 │                          ├── Comment
 │                          ├── Attachment
 │                          └── ActivityLog
 │
 └── Notification
```

Bu diagramma tushunchani ko‘rsatish uchun soddalashtirilgan. Haqiqiy modelda `OrganizationMember`, `ProjectMember` va boshqa bog‘lovchi jadvallar alohida relation'larga ega bo‘ladi.

### Nega `OrganizationMember` kerak?

Chunki bitta foydalanuvchi bir nechta tashkilotga a'zo bo‘lishi mumkin.

Masalan:

- Ali — TechNova'da Developer.
- Ali — StartupX'da Project Manager.

Agar `User` modeliga bitta `organizationId` va bitta `role` qo‘yib qo‘ysang, bu holatni to‘g‘ri ifodalash qiyinlashadi.

Shuning uchun tashkilotdagi a'zolikni alohida modelda saqlash ma'qul.

## 6.3. Database bo‘yicha muhim qoidalar

1. Birlamchi va tashqi kalitlarni to‘g‘ri belgilash.
2. Kerakli joylarda unique constraint ishlatish.
3. Ko‘p ishlatiladigan query'lar uchun index qo‘shish.
4. Kerakli biznes operatsiyalarida transaction ishlatish.
5. Organization chegaralarini server tomonida tekshirish.
6. O‘chirish va arxivlash siyosatini oldindan belgilash.
7. Database migration'larni Git orqali boshqarish.

Masalan, task yaratishda foydalanuvchi tegishli tashkilotga a'zo ekanini, loyiha shu tashkilotga tegishli ekanini va assignee shu loyihada ishlashga ruxsatli ekanini tekshirishing kerak.

Bularni faqat frontend'da tekshirish yetarli emas.

---

# 7. Backend arxitekturasi va papkalar tuzilishi

Express.js bilan loyiha yaratishda barcha kodni `server.ts` ichiga yozib ketishdan saqlan.

Men senga boshida **modullarga ajratilgan, lekin ortiqcha murakkablashtirilmagan modular monolith** arxitekturasini tavsiya qilaman.

Bu degani, dastur bitta backend application sifatida ishlaydi, lekin kod funksional modullarga ajratiladi.

Masalan:

```text
taskflow/
├── apps/
│   ├── web/
│   └── api/
├── packages/
│   └── shared/
├── docker-compose.yml
├── README.md
└── package.json
```

Bu faqat yuqori darajadagi monorepo ko‘rinishi. Alohida repository ishlatishni xohlasang, frontend va backend'ni ikki repository'ga ham ajratishing mumkin.

### Frontend tuzilishi

```text
apps/web/src/
├── app/
├── components/
│   ├── ui/
│   ├── layout/
│   └── shared/
├── features/
│   ├── auth/
│   ├── organizations/
│   ├── projects/
│   ├── tasks/
│   ├── comments/
│   └── notifications/
├── hooks/
├── lib/
├── routes/
├── stores/
├── types/
└── main.tsx
```

Har bir `feature` o‘zining komponentlari, API funksiyalari, schema'lari va kerakli hook'lariga ega bo‘lishi mumkin.

Bu strukturani qat'iy qolip sifatida qabul qilma. Loyihaning hajmiga qarab moslashtiramiz.

### Backend tuzilishi

```text
apps/api/src/
├── config/
├── middlewares/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── organizations/
│   ├── teams/
│   ├── projects/
│   ├── tasks/
│   ├── comments/
│   └── notifications/
├── shared/
│   ├── errors/
│   ├── validation/
│   ├── logger/
│   └── utils/
├── app.ts
└── server.ts
```

Masalan, `tasks` moduli ichida:

```text
tasks/
├── task.routes.ts
├── task.controller.ts
├── task.service.ts
├── task.repository.ts
├── task.schema.ts
├── task.types.ts
└── task.test.ts
```

Bu yerda har bir qatlamning vazifasi alohida.

- **Route:** endpoint va middleware'larni bog‘laydi.
- **Controller:** HTTP request va response bilan ishlaydi.
- **Service:** biznes mantiqini bajaradi.
- **Repository:** database operatsiyalarini tashkil qiladi.
- **Schema:** kiruvchi ma'lumotlarni tekshiradi.

Har bir kichik modul uchun majburan barcha fayllarni yaratish shart emas. Maqsad — mas'uliyatlarni ajratish, sun'iy ravishda ko‘p qatlam yaratish emas.

---

# 8. API dizayni

Frontend va backend o‘rtasidagi shartnomani oldindan belgilash ishlab chiqishni ancha osonlashtiradi.

Quyida MVP uchun API endpointlarining boshlang‘ich ro‘yxati.

| Method | Endpoint | Vazifasi |
|---|---|---|
| `POST` | `/api/v1/auth/register` | Ro‘yxatdan o‘tish |
| `POST` | `/api/v1/auth/login` | Login |
| `POST` | `/api/v1/auth/logout` | Logout |
| `GET` | `/api/v1/auth/me` | Joriy foydalanuvchi |
| `GET` | `/api/v1/organizations` | Foydalanuvchi tashkilotlari |
| `POST` | `/api/v1/organizations` | Tashkilot yaratish |
| `GET` | `/api/v1/organizations/:orgId/projects` | Tashkilot loyihalari |
| `POST` | `/api/v1/organizations/:orgId/projects` | Loyiha yaratish |
| `GET` | `/api/v1/projects/:projectId/tasks` | Loyiha vazifalari |
| `POST` | `/api/v1/projects/:projectId/tasks` | Vazifa yaratish |
| `PATCH` | `/api/v1/tasks/:taskId` | Vazifani yangilash |
| `DELETE` | `/api/v1/tasks/:taskId` | Vazifani o‘chirish |
| `GET` | `/api/v1/tasks/:taskId/comments` | Izohlarni olish |
| `POST` | `/api/v1/tasks/:taskId/comments` | Izoh yaratish |

Bu yakuniy API kontrakti emas. Ishlab chiqishdan oldin response formatlari, xatolar, pagination va authorization qoidalarini ham belgilash kerak.

Masalan, tasklarni olish endpointi keyinchalik quyidagi query parametrlarini qabul qilishi mumkin:

```text
GET /api/v1/projects/123/tasks?status=IN_PROGRESS&priority=HIGH&page=1&limit=20
```

Natijada frontend barcha tasklarni olib, o‘zi filterlash o‘rniga, kerakli ma'lumotlarni serverdan oladi.

### API uchun umumiy qoidalar

- To‘g‘ri HTTP status kodlaridan foydalanish.
- Request ma'lumotlarini serverda tekshirish.
- Xatolarni yagona formatda qaytarish.
- Pagination va filtering'ni qo‘llab-quvvatlash.
- Kerakli joylarda idempotency va transaction'larni hisobga olish.
- OpenAPI hujjatlarini yaratish.
- Barcha himoyalangan endpointlarda authorization'ni tekshirish.

Masalan, boshqa tashkilotning `projectId` qiymatini yuborgan foydalanuvchiga shu loyihani ko‘rsatib yubormaslik kerak.

---

# 9. Frontend dizayni va sahifalar

Portfolio uchun backend'ning o‘zi yetarli emas. Mahsulot professional ko‘rinishi va undan foydalanish qulay bo‘lishi ham muhim.

Men quyidagi sahifalarni yaratgan bo‘lardim.

### Public sahifalar

- Landing page.
- Pricing page — keyinroq.
- Login.
- Register.
- Forgot password.
- Invitation acceptance.

### Application sahifalari

- Dashboard.
- Projects list.
- Project overview.
- Kanban board.
- Task details.
- Team members.
- Notifications.
- User profile.
- Organization settings.
- Activity log.

### Dashboard layout

Desktop versiyasida quyidagi tuzilma bo‘lishi mumkin:

```text
┌─────────────────────────────────────────────────────────┐
│ Logo     Search             Notifications    Avatar     │
├──────────────┬──────────────────────────────────────────┤
│              │                                          │
│ Dashboard    │  Welcome back, Ali                        │
│ Projects     │                                          │
│ My Tasks     │  Active Projects   Tasks Due   Completed  │
│ Teams        │                                          │
│ Settings     │  My Tasks                                │
│              │  ┌────────────────────────────────────┐  │
│              │  │ Task 1                             │  │
│              │  │ Task 2                             │  │
│              │  │ Task 3                             │  │
│              │  └────────────────────────────────────┘  │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘
```

Bu faqat strukturaviy eskiz. Haqiqiy interfeysda spacing, typography, ranglar, hover holatlari, responsive layout va boshqa detallarni ishlab chiqish kerak.

**Mening dizayn tavsiyam:** Linear kabi ixcham, toza va tez ishlaydigan interfeysdan ilhom ol. Juda ko‘p gradient, animatsiya va kartochkalar qo‘shib yuborma. Foydalanuvchi vazifasini tez bajarishi muhimroq.

---

# 10. Loyihani ishlab chiqish bosqichlari

Endi nazariyani amaliy vazifalarga aylantiramiz.

Men ishlab chiqishni quyidagi tartibda olib borishni tavsiya qilaman.

## 1-bosqich: Product planning

**Maqsad:** kod yozishni boshlashdan oldin nima qurayotganingni aniq bilish.

Vazifalar:
- MVP scope'ni belgilash.
- Foydalanuvchi rollarini aniqlash.
- Asosiy user flow'larni chizish.
- Sahifalar ro‘yxatini tuzish.
- Database ER diagram yaratish.
- API endpointlarni belgilash.
- GitHub repository yaratish.
- Issue va milestone'larni tashkil qilish.

Natija: loyiha bo‘yicha qisqa, lekin aniq texnik topshiriq.

## 2-bosqich: Foundation

**Maqsad:** loyihaning ishlash asoslarini tayyorlash.

Vazifalar:
- Frontend va backend'ni sozlash.
- TypeScript konfiguratsiyasi.
- PostgreSQL va Prisma.
- Environment variables.
- Logging.
- Validation.
- Error handling.
- Linting va formatlash.
- Git workflow.

Natija: loyihaning asosiy arxitekturasi ishlaydi.

## 3-bosqich: Authentication va Organization

**Maqsad:** foydalanuvchilar xavfsiz kirishi va tashkilotlar bilan ishlashi.

Vazifalar:
- Register va login.
- Sessiya yoki token mexanizmi.
- Joriy foydalanuvchi endpointi.
- Organization yaratish.
- Organization membership.
- Takliflar tizimi.
- Backend authorization.

Natija: bir nechta tashkilotdan foydalanuvchilar mustaqil ishlay oladi.

## 4-bosqich: Project va Task

**Maqsad:** platformaning asosiy qiymatini yaratish.

Vazifalar:
- Project CRUD.
- Task CRUD.
- Assignee.
- Status va priority.
- Deadline.
- Search va filter.
- Pagination.
- Kanban board.
- Drag-and-drop.

Natija: foydalanuvchi to‘liq task boshqaruvi jarayonidan o‘ta oladi.

## 5-bosqich: Collaboration

**Maqsad:** jamoaviy ishlash imkoniyatlarini qo‘shish.

Vazifalar:
- Comments.
- Activity log.
- Notification.
- Fayllarni biriktirish.
- Real-time yangilanishlar.

Natija: platformadan bir nechta foydalanuvchi hamkorlikda foydalanishi mumkin.

## 6-bosqich: Quality va security

**Maqsad:** ishlaydigan loyihani ishonchli mahsulotga aylantirish.

Vazifalar:
- Unit testlar.
- Integration testlar.
- Muhim user flow'lar uchun E2E testlar.
- Authorization testlari.
- Organization isolation testlari.
- Input validation.
- Rate limiting.
- Performance profiling.
- Database query'larni tekshirish.

Natija: asosiy funksiyalar avtomatik testlar bilan tekshiriladi va muhim xavfsizlik kamchiliklari kamaytiriladi.

## 7-bosqich: Deployment

**Maqsad:** loyihani internet orqali foydalanish mumkin bo‘lgan holatga keltirish.

Vazifalar:
- Frontend va backend deployment.
- PostgreSQL'ni production muhitida sozlash.
- Environment variables.
- HTTPS.
- CI pipeline.
- Logging.
- Error monitoring.
- README.
- Demo akkaunt yoki xavfsiz demo rejimi.

Natija: ish beruvchi loyihani ochib ko‘ra oladi, GitHub kodini tekshiradi va uning qanday ishlashini tushunadi.

---

# 11. Testlash strategiyasi

Portfolio loyihangda testlar bo‘lishi seni shunchaki interfeys yaratadigan dasturchidan ajratib turishi mumkin.

Lekin testlar sonining o‘zi muhim emas. Muhim biznes qoidalari tekshirilgan bo‘lishi kerak.

### Unit testlar

Masalan:
- Task statusini o‘zgartirish qoidalari.
- Ruxsatlarni tekshirish funksiyalari.
- Validation.
- Service qatlamidagi biznes mantiqi.

### Integration testlar

Masalan:
- Task yaratish database'ga to‘g‘ri yoziladimi?
- Noto‘g‘ri request to‘g‘ri xato qaytaradimi?
- Transaction xato yuz bersa, ma'lumotlar izchil qoladimi?

### E2E testlar

Masalan, foydalanuvchi:
1. Login qiladi.
2. Organization yaratadi.
3. Project yaratadi.
4. Task qo‘shadi.
5. Task'ni boshqa a'zoga biriktiradi.
6. Task statusini o‘zgartiradi.

Bu jarayon boshidan oxirigacha ishlashi kerak.

### Eng muhim xavfsizlik testlari

Quyidagi holatlarni alohida tekshir:

- Login qilmagan foydalanuvchi himoyalangan ma'lumotlarni ololmaydi.
- Oddiy a'zo administrator amallarini bajara olmaydi.
- Bir tashkilot foydalanuvchisi boshqa tashkilot ma'lumotlarini o‘qiy olmaydi.
- Foydalanuvchi ruxsatsiz task'ni o‘zgartira olmaydi.
- Boshqa foydalanuvchining sessiyasidan foydalanib bo‘lmaydi.

Ayniqsa, multi-tenant ilovalarda bunday testlar juda muhim.

---

# 12. Ishlab chiqish davomida qanday ishlashing kerak?

Bu qismni alohida ta'kidlamoqchiman, chunki sening asosiy maqsading — bilimlarni qayta o‘qish emas, **amaliy tajriba to‘plash**.

Men senga loyiha ustida quyidagi tartibda ishlashni maslahat beraman.

### 1. Avval vazifani aniqlaysan

Masalan:

> Foydalanuvchi organization ichida yangi project yarata olishi kerak.

Bu vazifaning talablarini aniqlaysan:
- Kim project yarata oladi?
- Qanday maydonlar kerak?
- Qanday validation bo‘ladi?
- Project qaysi organization'ga tegishli bo‘ladi?
- Qanday xatolar yuz berishi mumkin?

### 2. Keyin yechimni loyihalaysan

Database modeli, API endpointi va frontend interfeysini qanday bog‘lashni belgilaysan.

### 3. Kod yozasan

Avval backend yoki frontend'dan boshlashing mumkin. Muhimi, vazifani kichik bo‘laklarga ajratib, yakuniga yetkazish.

### 4. Bilmagan narsangni o‘rganasan

Agar biror muammo yuzaga kelsa:
- Rasmiy dokumentatsiyani tekshirasan.
- Muammoning sababini aniqlaysan.
- Kerakli texnologiyani o‘rganasan.
- Yechimni qo‘llaysan.
- Natijani test qilasan.

### 5. Kodni qayta ko‘rib chiqasan

O‘zingga savol berasan:

- Bu kodni boshqalar tushuna oladimi?
- Xatolar to‘g‘ri boshqarilyaptimi?
- Bu yechimni test qilish mumkinmi?
- Xavfsizlik muammosi yo‘qmi?
- Keyinchalik yangi funksiya qo‘shish osonmi?

Shu jarayon orqali amaliy tajribang ortadi.

---

# 13. Loyihani qancha vaqtda tugatish mumkin?

Men bu loyiha uchun taxminan quyidagi rejani tuzgan bo‘lardim.

| Bosqich | Taxminiy muddat |
|---|---:|
| Planning va arxitektura | 3–5 kun |
| Foundation va authentication | 1–2 hafta |
| Organization va membership | 1 hafta |
| Project va Task Management | 2–3 hafta |
| Kanban va collaboration | 1–2 hafta |
| Testing va security | 1–2 hafta |
| Deployment va polishing | 3–5 kun |

**Umumiy hisobda: taxminan 7–11 hafta.**

Bu haftasiga 20–30 soat ishlash va MVP'dan V1'ga bosqichma-bosqich o‘tish uchun taxminiy reja. Real-time, murakkab ruxsatlar, fayllar va boshqa funksiyalarni chuqurroq ishlab chiqish muddatni uzaytirishi mumkin.

Loyihani tezroq tugatish uchun funksiyalarni qisqartirish mumkin, lekin sifatni pasaytirish hisobiga emas.

---

# 14. Portfolio uchun qanday natija olishimiz kerak?

Loyiha tugaganda GitHub'da shunchaki kodlar turishi bilan cheklanmaymiz.

Quyidagilarni tayyorlaymiz:

**1. Live demo**

Haqiqiy ishlaydigan platforma.

**2. GitHub repository**

Tartibli kod, README, `.env.example` va ishga tushirish yo‘riqnomasi.

**3. Architecture diagram**

Frontend, backend, database va real-time aloqa qanday ishlashini ko‘rsatadigan diagramma.

**4. Database ER diagram**

Modellar va ularning munosabatlari.

**5. API documentation**

Endpointlar, request va response formatlari, authentication talablari va xatolar.

**6. Test natijalari**

Muhim biznes jarayonlari va ruxsatlar uchun avtomatik testlar.

**7. Case study**

Loyihaning maqsadi, arxitektura qarorlari, duch kelgan muammolaring va ularni qanday hal qilganing haqida qisqa texnik maqola.

**8. Portfolio uchun video**

2–3 daqiqalik demo: foydalanuvchi tizimga kiradi, loyiha yaratadi, task biriktiradi va Kanban board orqali vazifalarni boshqaradi.

Bu natijalar sening loyihani shunchaki yozmaganligingni, balki uni tushunib, sinab va yakunlab chiqqaningni ko‘rsatadi.

---

# 15. Hozir nimadan boshlaymiz?

Men senga hozircha barcha funksiyalarni yozib tashlashni maslahat bermayman. Avval loyihaning poydevorini to‘g‘ri quramiz.

Birinchi navbatda quyidagi 5 ta vazifani bajarish kerak:

1. **Product requirements:** MVP funksiyalarini yakuniy belgilash.
2. **UI/UX:** asosiy sahifalar va user flow'larni loyihalash.
3. **Database:** ER diagram va boshlang‘ich Prisma schema.
4. **Architecture:** frontend va backend papkalarini tashkil qilish.
5. **Development setup:** React, TypeScript, Express, PostgreSQL va Prisma muhitini tayyorlash.

Keyin birinchi funksiyani — authentication va organization yaratishni — ishlab chiqishga kirishamiz.

## Mening taklifim

Loyihani boshlashdan oldin uchta qarorni birgalikda aniqlasak, keyingi ishimiz ancha tartibli bo‘ladi.

**1. Frontend dizayni qanday bo‘lsin?**

- **A)** Linear uslubidagi minimal, premium va dark interfeys.
- **B)** Zamonaviy light interfeys, oq fon va professional dashboard.
- **C)** Dark va light rejimlarini qo‘llab-quvvatlaydigan interfeys.

**2. Loyiha qanday tuzilishda bo‘lsin?**

- **A)** Bitta monorepo: frontend va backend bitta repository ichida.
- **B)** Ikkita alohida repository: frontend va backend alohida.

Men shaxsan monorepo'ni tanlagan bo‘lardim, lekin alohida repository ham to‘g‘ri variant.

**3. Loyihani qanchalik katta qilamiz?**

- **A)** Avval MVP, keyin bosqichma-bosqich kengaytiramiz.
- **B)** Boshidanoq keng funksiyali, professional SaaS yaratishga harakat qilamiz.

**Mening tavsiyam: 1-C, 2-A, 3-A.** Ya'ni dark/light rejimli professional dizayn, monorepo va bosqichma-bosqich rivojlantirish.

Shu uchta qarorni belgilab olsak, keyingi qadamda senga loyihaning **aniq texnik topshirig‘i (PRD), boshlang‘ich arxitekturasi va database modelini** ishlab chiqib beraman. Shundan so‘ng darhol kod yozishni boshlashing mumkin.