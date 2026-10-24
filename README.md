# KSI Football Scouting Centre

An isolated digital platform for KSI Football Club and KSI Football Academy. This repository is separate from the KSI Intelligence real-estate project.

## Project status
Initial project brief and implementation guardrails. No production deployment is configured.

## Goals
- Premium international club website and player scouting centre
- Player profiles with searchable, verified attributes and statistics
- Admin-managed photo/video uploads and media gallery
- Secure scout enquiry workflow
- Admin create/edit/unpublish/archive and publish-after-validation controls
- Optional bulk import from CSV/Excel
- Responsive accessibility-first design
- Keep confidential and unpublished player data protected

## Implementation guardrails
- Use only KSI-approved logo, photos, staff details, and player information. Do not substitute unrelated stock imagery for supplied assets.
- Never invent player statistics, height, preferred foot, nationality, match history, or achievements. Leave unknown fields blank.
- Players currently supplied for initial content:
  - Maduike Chidera Vincent — date of birth 05/10/2009; position DM; jersey 10.
  - Billal Haruna — date of birth 20/08/2009; position CF; jersey 11.
- Both listed players are minors. Add a guardian/club authorization and safeguarding publication check before making a profile or media public.
- Auth, database, private media storage, validation, access control and enquiry abuse protection must be implemented before calling this a production-ready system.
- Do not connect to or change the `ksi-intelligence` project or repository.
- Keep all work in preview/test until explicit production authorization.

## Proposed stack
Next.js App Router + TypeScript + Tailwind CSS. Select database/auth/media integrations only after checking the project's connected services and credentials; never commit secrets.

## Phases
1. Repository and visual foundation.
2. Premium public landing page, club/staff pages, responsive navigation, and gallery shell.
3. Searchable scouting directory and player profile templates.
4. Authenticated admin CRUD, protected uploads, validation, publishing controls, and safe unpublishing.
5. Scout enquiry workflow, notification handling, anti-spam, and privacy protections.
6. Tests, accessibility/performance checks, preview review, then separately approved deployment.
